import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Guardians',
        short_name: 'Guardians',
        description: 'Next.js App',
        start_url: '/',
        display: 'standalone',
        background_color: '#D4E09B',
        theme_color: '#D4E09B',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}