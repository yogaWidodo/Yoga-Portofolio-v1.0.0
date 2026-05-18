import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageSrc',
      title: 'Image Filename (public folder)',
      description: 'Nama file gambar di folder /public (contoh: idms.png). Gunakan ini jika tidak upload gambar via Sanity.',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button / Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Urutan tampil (1 = paling atas)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'techStack',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
