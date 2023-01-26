import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'lfnbo22x',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: false,
    token: process.env.PUBLIC_SANITY_TOKEN
})