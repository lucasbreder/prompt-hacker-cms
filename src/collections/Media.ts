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
      ({ doc, req }) => {
        const serverURL = req.payload?.config?.serverURL

        if (doc.url && !doc.url.startsWith('http')) {
          doc.url = `${serverURL}${doc.url}`
        }

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
