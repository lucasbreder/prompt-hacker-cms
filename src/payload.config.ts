// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { pt } from '@payloadcms/translations/languages/pt'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Art } from './collections/Art'
import { Nav } from './collections/Nav'
import { Page } from './collections/Page'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: ['http://localhost:3000', 'https://prompthacker.sudu.dev'],
  csrf: ['http://localhost:3000', 'https://prompthacker.sudu.dev'],
  collections: [Nav, Art, Media, Page, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  i18n: {
    fallbackLanguage: 'pt', // default
    supportedLanguages: { en, pt },
    translations: {
      pt: {
        general: {
          navs: 'Menu',
        },
      },
    },
  },
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
