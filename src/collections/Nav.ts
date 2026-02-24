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
      name: 'page',
      type: 'relationship',
      required: false,
      relationTo: 'page',
      validate: (value: any, { siblingData }: { siblingData: any }) => {
        if (!value && !siblingData?.link_url) {
          return 'Você deve preencher a Página ou o Link Externo'
        }
        return true
      },
      label: {
        pt: 'Página',
      },
      admin: {
        description: 'Página para onde o menu aponta',
      },
    },
    {
      name: 'link_url',
      type: 'text',
      required: false,
      label: {
        pt: 'Link Externo',
      },
      admin: {
        description:
          'Link externo para onde o menu aponta, caso não seja preenchido, será usado o link da página',
      },
    },
  ],
}
