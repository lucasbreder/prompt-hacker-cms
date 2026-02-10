import type { CollectionConfig } from 'payload'

export const Axis: CollectionConfig = {
  slug: 'axis',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Eixo',
    },
    plural: {
      pt: 'Eixos',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
