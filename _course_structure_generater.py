import os
from datetime import datetime

class CourseStructureGenerator:
    def __init__(self, course_name):
        self.course_name = course_name
        self.base_path = os.path.join(os.getcwd(), 'docs', course_name)

    def create_directory(self, path):
        """Create directory if it doesn't exist"""
        os.makedirs(path, exist_ok=True)
        print(f"Created directory: {path}")

    def create_empty_file(self, path):
        """Create empty file"""
        with open(path, 'w', encoding='utf-8') as f:
            pass
        print(f"Created empty file: {path}")

    def generate_structure(self):
        """Generate the complete course structure"""
        # Create main directories
        directories = [
            '',
            'notes',
            'notes/chapter-01',
            'notes/chapter-01/exercises',
            'notes/chapter-02',
            'notes/chapter-02/exercises',
            'reviews',
            'projects',
            'resources/images',
            'resources/codes',
            'summary'
        ]
        
        for directory in directories:
            self.create_directory(os.path.join(self.base_path, directory))

        # Create empty files
        files = [
            'README.md',
            'SUMMARY.md',
            'notes/chapter-01/01-topic-name.md',
            'notes/chapter-01/02-topic-name.md',
            'notes/chapter-02/01-topic-name.md',
            'reviews/week-review.md',
            'reviews/chapter-review.md',
            'summary/mindmap.md',
            'summary/key-points.md'
        ]

        for file in files:
            self.create_empty_file(os.path.join(self.base_path, file))

        print(f"\nCourse structure for '{self.course_name}' has been generated successfully in /docs!")

# 使用示例
if __name__ == "__main__":
    course_name = input("请输入课程名称: ")
    generator = CourseStructureGenerator(course_name)
    generator.generate_structure()