import type { CollectionConfig } from 'payload'

export const Platforms: CollectionConfig = {
  slug: 'platforms',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Plataforma',
    },
    plural: {
      pt: 'Plataformas',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        pt: 'Nome',
      },
    },
  ],
}
