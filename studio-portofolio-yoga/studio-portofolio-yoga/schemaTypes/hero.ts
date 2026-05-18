import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Judul utama hero section (contoh: Full Stack Developer.)',
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-Headline',
      type: 'string',
      description: 'Teks abu-abu di bawah headline (contoh: Architect of experiences.)',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Paragraf deskripsi singkat di hero',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      description: 'Judul pada About section (contoh: Fullstack Developer)',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      rows: 5,
      description: 'Paragraf panjang tentang dirimu di bagian About',
    }),
    defineField({
      name: 'githubUsername',
      title: 'GitHub Username',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number (with country code)',
      type: 'string',
      description: 'Contoh: 6288233181003',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
  },
})
