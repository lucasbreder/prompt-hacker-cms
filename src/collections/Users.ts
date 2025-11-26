import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    singular: {
      pt: 'Usuário',
    },
    plural: {
      pt: 'Usuários',
    },
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
