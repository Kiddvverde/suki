import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: 'dvqduvyd',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-06-16',
})