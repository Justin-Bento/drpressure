import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'author',
      schema: {
        author: fields.text({ label: 'Author' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        avatar: fields.image({ label: 'Avatar', directory: 'public/images/avatars' }),
      },
    }),
  },
});
