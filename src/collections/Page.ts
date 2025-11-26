import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Página',
    },
    plural: {
      pt: 'Páginas',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      unique: true,
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      required: false,
      relationTo: 'media',
    },
  ],
}
