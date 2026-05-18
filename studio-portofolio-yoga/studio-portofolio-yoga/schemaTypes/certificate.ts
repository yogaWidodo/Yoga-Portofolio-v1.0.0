import { defineField, defineType } from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Role / Description',
      type: 'string',
      description: 'Contoh: Fullstack Developer, Machine Learning Engineer',
    }),
    defineField({
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageSrc',
      title: 'Image Path (public folder)',
      description: 'Path relatif dari /public (contoh: /certi/berijalan.png)',
      type: 'string',
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF Path / URL',
      description: 'Path PDF dari /public atau URL eksternal (contoh: /pdf/berijalan.pdf)',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured (tampil besar)',
      type: 'boolean',
      description: 'Aktifkan untuk certificate utama yang tampil lebih besar',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
