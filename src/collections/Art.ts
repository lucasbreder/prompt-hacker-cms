import type { CollectionConfig } from 'payload'

export const Art: CollectionConfig = {
  slug: 'art',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Obra',
    },
    plural: {
      pt: 'Obras',
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
      type: 'text',
      required: false,
    },
    {
      name: 'author',
      type: 'text',
      required: false,
    },
     {
      name: 'author_note',
      type: 'textarea',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'team',
      type: 'textarea',
      required: false,
    },
    {
      name: 'art',
      type: 'upload',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'art_process',
      type: 'upload',
      required: false,
      relationTo: 'media',
      hasMany: true,
      admin: {
        position: 'sidebar',
      }
    },
    
  ],
}
