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
      label: 'Home',
      path: 'src/content/singleton/homepage',
      schema: {
        headline: fields.text({ label: 'HomeText' }),
        services: fields.array(
          fields.object({
            name: fields.text({ label: 'Getting Your Quote' }),
            message: fields.text({ label: 'Step Explination', multiline: true }),
          }),
          {
            label: 'Services',
          }
        ),
        expertise: fields.array(
          fields.object({
            name: fields.text({ label: 'Expertise Title' }),
            message: fields.text({ label: 'Explain the expertise.', multiline: true }),
          }),
          {
            label: 'Expertise',
          }
        ),
        about: fields.text({ label: 'About Section', multiline: true }),
        testimonials: fields.array(
          fields.object({
            quote: fields.text({ label: 'Quote', multiline: true }),
            autohr: fields.text({ label: 'Author.' }),
            title: fields.text({ label: 'Position Title.' }),
            avatar: fields.image({ label: 'Avatar' }),
          }),
          {
            label: 'testimonials',
          }
        ),
      },
    }),
    Aboutpage: singleton({
      label: 'About',
      path: 'src/content/singleton/aboutpage',
      schema: {
        headline: fields.text({ label: 'About Summary' }),
        mission: fields.text({ label: 'Our Mission', multiline: true }),
        years: fields.date({
          label: 'Event date',
          description: 'The date of the event',
        }),
        experts: fields.number({ label: 'Number Of Experts' }),
        projects: fields.number({ label: 'Projects Completed' }),
        awards: fields.number({ label: 'Awards Recived' }),
        values: fields.array(
          fields.object({
            name: fields.text({ label: 'Value' }),
            message: fields.text({ label: 'Name', multiline: true }),
          }),
          {
            label: 'Company Values',
          }
        ),
        team: fields.array(
          fields.object({
            name: fields.text({ label: 'Employee Name' }),
            position: fields.text({ label: 'position', multiline: true }),
          }),
          {
            label: 'Meet Our Team',
          }
        ),
      },
    }),
    contact: singleton({
      label: 'Contact',
      path: 'src/content/singleton/contactPage',
      schema: {
        headline: fields.text({ label: 'Title' }),
        summary: fields.text({ label: 'Summary' }),
        location: fields.text({ label: 'Comopany Address' }),
        phoneNumber: fields.text({ label: 'Phone Number' }),
        companyEmail: fields.text({ label: 'Email' }),
      },
    }),
  },
});
