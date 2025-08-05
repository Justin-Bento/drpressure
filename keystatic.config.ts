import { config, fields, collection, singleton } from '@keystatic/core';

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
      path: 'src/content/testimonials/*',
      slugField: 'name',
      schema: {
        name: fields.text({ label: 'Author' }),
        description: fields.text({ label: 'Quote' }),
        message: fields.text({ label: 'Quote', multiline: true }),
        image: fields.image({ label: 'Avatar', directory: 'public/images/avatars' }),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'HomeTitle',
      path: 'src/content/singleton/homepage',
      schema: {
        headline: fields.text({ label: 'HomeText' }),
      },
    }),
  },
});
