import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Arquivo',
    },
    plural: {
      pt: 'Arquivos',
    },
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        doc.url = `${process.env.PAYLOAD_URL}${doc.url}`
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
