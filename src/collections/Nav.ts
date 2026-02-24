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
      label: {
        pt: 'Nome',
      },
      admin: {
        description: 'Nome do item do menu',
      },
    },
    {
      name: 'url',
      type: 'relationship',
      required: true,
      relationTo: 'page',
      label: {
        pt: 'Página',
      },
      admin: {
        description: 'Página para onde o menu aponta',
      },
    },
    // {
    //   name: 'type',
    //   type: 'select',
    //   required: true,
    //   options: ['principal', 'detalhe'],
    // },
  ],
}
