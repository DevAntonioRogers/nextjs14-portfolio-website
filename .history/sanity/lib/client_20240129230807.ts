import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const builder = imageUrlBuilder(client)

export function urlFor(source:string) {
  return builder.image(source)
}
