import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: {
      pt: 'Página',
    },
    plural: {
      pt: 'Páginas',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        pt: 'Título',
      },
    },
    {
      name: 'slug',
      unique: true,
      type: 'text',
      required: true,
      label: {
        pt: 'Slug',
      },
      admin: {
        description: 'URL amigável para a página, deixe em branco para gerar automaticamente',
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (!data?.slug && data?.title) {
              data.slug = data.title
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .replace(/\s/g, '-')
            }
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
      label: {
        pt: 'Resumo',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
      label: {
        pt: 'Conteúdo',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      required: false,
      relationTo: 'media',
      label: {
        pt: 'Miniatura',
      },
    },
  ],
}
