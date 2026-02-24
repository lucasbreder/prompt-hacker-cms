import type { CollectionConfig } from 'payload'

export const Art: CollectionConfig = {
  slug: 'art',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      pt: 'Obra',
    },
    plural: {
      pt: 'Obras',
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
        description: 'URL amigável para a obra, deixe em branco para gerar automaticamente',
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
      type: 'text',
      required: false,
      label: {
        pt: 'Resumo',
      },
    },
    {
      name: 'year',
      type: 'text',
      required: false,
      label: {
        pt: 'Ano',
      },
    },
    {
      name: 'author',
      type: 'text',
      required: false,
      label: {
        pt: 'Autor',
      },
    },
    {
      name: 'author_note',
      type: 'textarea',
      required: false,
      label: {
        pt: 'Nota do Autor',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
      label: {
        pt: 'Descrição',
      },
    },
    {
      name: 'art',
      type: 'upload',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
      label: {
        pt: 'Obra',
      },
    },
    {
      name: 'art_video',
      type: 'upload',
      required: false,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
      label: {
        pt: 'Vídeo',
      },
    },
    {
      name: 'process_layout',
      type: 'select',
      required: false,
      defaultValue: 'grid',
      admin: {
        position: 'sidebar',
      },
      label: {
        pt: 'Layout do Processo',
      },
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'Vertical',
          value: 'vertical',
        },
        {
          label: 'Carrossel',
          value: 'carousel',
        },
      ],
    },
    {
      name: 'art_process',
      type: 'upload',
      required: false,
      relationTo: 'media',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
      label: {
        pt: 'Processo',
      },
    },
    {
      name: 'platform',
      relationTo: 'platforms',
      type: 'relationship',
      hasMany: true,
      label: {
        pt: 'Plataforma',
      },
    },
    {
      name: 'axis',
      relationTo: 'axis',
      type: 'relationship',
      hasMany: true,
      label: {
        pt: 'Eixo',
      },
    },
  ],
}
