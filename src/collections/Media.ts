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
        const protocol = req.protocol || 'http'
        const host = req.host || req.headers.get('host') // O host (ex: localhost:3000)
        const serverURL = `${protocol}//${host}`
        doc.url = `${serverURL}${doc.url}`
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
