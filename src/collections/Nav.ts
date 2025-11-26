import type { CollectionConfig } from 'payload'

export const Nav: CollectionConfig = {
  slug: 'nav',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Menu',
    },
    plural: {
      pt: 'Menus',
    },
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: ['principal', 'detalhe'],
    },
  ],
}
