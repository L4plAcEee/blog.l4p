<script setup>
import { ref, onMounted } from 'vue'

const diaries = ref([])
const filteredDiaries = ref([])
const searchDate = ref('')

onMounted(async () => {
  // 需要注意路径是相对于 .md 文件的
  const modules = import.meta.glob('/日记/*.md')
  
  for (const path in modules) {
    const mod = await modules[path]()
    // 排除 index.md 本身
    if (path.endsWith('index.md')) continue
    
    const date = path.match(/\/(\d{4}-\d{2}-\d{2})\.md$/)?.[1]
    if (date) {
      diaries.value.push({
        date,
        title: mod.frontmatter?.title || date,
        path: path.replace('.md', '.html').replace('/docs', '')
      })
    }
  }
  
  diaries.value.sort((a, b) => new Date(b.date) - new Date(a.date))
  filteredDiaries.value = diaries.value
})

const filterByDate = () => {
  if (!searchDate.value) {
    filteredDiaries.value = diaries.value
  } else {
    filteredDiaries.value = diaries.value.filter(diary => 
      diary.date.includes(searchDate.value)
    )
  }
}
</script>

<template>
  <div class="diary-list">
    <div class="search-box">
      <input 
        type="date" 
        v-model="searchDate"
        @change="filterByDate"
        class="date-input"
      />
    </div>

    <div class="diary-items">
      <div v-for="diary in filteredDiaries" :key="diary.date" class="diary-item">
        <a :href="diary.path">
          <span class="diary-date">{{ diary.date }}</span>
          <span class="diary-title">{{ diary.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.diary-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-box {
  margin-bottom: 20px;
}

.date-input {
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  width: 200px;
}

.diary-items {
  display: flex;
  flex-direction: column; 
  gap: 12px;
}

.diary-item {
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.3s;
}

.diary-item:hover {
  transform: translateX(4px);
  border-color: var(--vp-c-brand);
}

.diary-item a {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.diary-date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}

.diary-title {
  font-weight: 500;
}
</style>