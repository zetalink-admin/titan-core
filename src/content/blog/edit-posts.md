---
title: "How to edit blog posts in Astro"
excerpt: "Learn how to edit posts in Astro"
featuredImage: "/blog/edit-posts.jpg"
publishDate: "2025-02-22"
publish: true
categories: ["Theme Usage"]

seo:
  title: "How to edit posts in Astro"
  description: "Learn how to edit posts in Astro"
  image: "/blog/edit-posts.jpg"
---

## Steps to Edit a Blog Post

### Accessing the File
Navigate to your blog post file in the **src/content/blog/** directory. The filename typically matches your post's URL slug (e.g., my-first-post.md).

### Editing Frontmatter
The frontmatter is the metadata section at the top of your markdown file, contained between the --- markers. Here's what you can modify:

**title**: The post's main heading  
**excerpt**: A brief summary of your post  
**publishDate**: Original publication date  
**publish**: true  
**categories**: Array of relevant categories

### Editing Content
Below the frontmatter, you can edit your post's content using markdown syntax:

```javascript
title: "How to edit blog posts in Astro"
excerpt: "Learn how to edit posts in Astro"
featuredImage: "/blog/edit-posts.jpg"
publishDate: "2024-03-10"
publish: true
categories: ["Design", "Accessibility"]
```
