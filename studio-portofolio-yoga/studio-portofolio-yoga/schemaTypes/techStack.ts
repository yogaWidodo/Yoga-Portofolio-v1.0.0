import { defineField, defineType } from 'sanity'

export const techStackType = defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Contoh: Frontend, Backend, Mobile, Database & Tools',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Material Icon Name',
      type: 'string',
      description: 'Nama icon dari Material Icons (contoh: data_object, dns, smartphone, build)',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Daftar skill/teknologi dalam kategori ini',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
})
