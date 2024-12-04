from algoliasearch.search_client import SearchClient
import json
import os
from pathlib import Path
import frontmatter
import markdown
from bs4 import BeautifulSoup
import re
import subprocess
import sys

# 添加执行批处理文件的函数
def run_backup():
    try:
        # 获取当前脚本所在目录
        script_dir = Path(__file__).parent
        backup_file = script_dir / '_backup_blog.bat'
        
        print("Starting backup process...")
        # 执行批处理文件
        process = subprocess.run([backup_file], 
                               shell=True,
                               check=True,
                               capture_output=True,
                               text=True)
        
        print("Backup completed successfully")
        print(process.stdout)  # 打印输出结果
        
    except subprocess.CalledProcessError as e:
        print("Error during backup:", e)
        print("Error output:", e.stderr)
        sys.exit(1)  # 如果备份失败，退出程序
    except Exception as e:
        print(f"Unexpected error during backup: {e}")
        sys.exit(1)

# 在开始索引之前运行备份
print("Starting the process...")
run_backup()

def get_documents():
    documents = []
    docs_dir = Path('docs')
    
    for md_file in docs_dir.rglob('*.md'):
        if md_file.name in ['index.md', 'README.md']:
            continue
            
        post = frontmatter.load(md_file)
        html = markdown.markdown(post.content)
        soup = BeautifulSoup(html, 'html.parser')
        
        # 生成URL路径
        url_path = str(md_file.relative_to(docs_dir)).replace('\\', '/')
        url = f'/{url_path[:-3]}.html'
        
        # 提取标题层级
        headers = []
        current_lvl = {'lvl0': None, 'lvl1': None, 'lvl2': None, 'lvl3': None, 'lvl4': None, 'lvl5': None, 'lvl6': None}
        
        for header in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
            level = int(header.name[1]) - 1  # h1 -> 0, h2 -> 1, etc.
            current_lvl[f'lvl{level}'] = header.text
            
            # 创建层级结构
            hierarchy = {}
            for lvl in range(7):
                if current_lvl[f'lvl{lvl}'] is not None:
                    hierarchy[f'lvl{lvl}'] = current_lvl[f'lvl{lvl}']
            
            # 为每个标题创建一个文档
            doc = {
                'objectID': f"{url_path}#{header.get('id', header.text.lower().replace(' ', '-'))}",
                'url': url + f"#{header.get('id', header.text.lower().replace(' ', '-'))}",
                'type': 'lvl' + str(level),
                'content': header.text,
                'hierarchy': hierarchy,
                'lang': 'zh-CN'  # 添加语言标记
            }
            documents.append(doc)
            
            # 如果是段落，添加到最近的标题下
            next_el = header.find_next_siblings()
            content = []
            for el in next_el:
                if el.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                    break
                if el.name == 'p':
                    content.append(el.text)
            
            if content:
                doc = {
                    'objectID': f"{url_path}#{header.get('id', header.text.lower().replace(' ', '-'))}-content",
                    'url': url + f"#{header.get('id', header.text.lower().replace(' ', '-'))}",
                    'type': 'content',
                    'content': ' '.join(content),
                    'hierarchy': hierarchy,
                    'lang': 'zh-CN'
                }
                documents.append(doc)
    
    return documents

# 读取配置
with open("algolia.config.json") as f:
    config = json.load(f)

# 初始化客户端
client = SearchClient.create(config['appid'], config['admin_api'])
index = client.init_index(config['index_name'])

# 设置索引配置
index.set_settings({
    'searchableAttributes': [
        'content',
        'hierarchy.lvl0',
        'hierarchy.lvl1',
        'hierarchy.lvl2',
        'hierarchy.lvl3',
        'hierarchy.lvl4',
        'hierarchy.lvl5',
        'hierarchy.lvl6'
    ],
    'attributesForFaceting': ['lang', 'type']
})

# 获取并上传文档
documents = get_documents()
if documents:
    print(f"Found {len(documents)} documents to index")
    index.save_objects(documents)
    print("Documents uploaded successfully")
else:
    print("No documents found")