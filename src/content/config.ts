// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 在image schema中确保包含宽高信息
const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  width: z.number().optional(), // 添加宽度属性
  height: z.number().optional() // 添加高度属性
});

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: imageSchema,
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const eventsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: imageSchema,
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
    location: z.string().optional(),
    collaborators: z.string().optional(),
    images: z.array(imageSchema).optional(),
    excerpt: z.string().optional(),
  }),
});

const experienceCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: imageSchema,
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});


const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: imageSchema,
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'events': eventsCollection,
  'experience': experienceCollection,
  "recommend": blogCollection,
};
