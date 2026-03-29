import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const sanityClient = createClient({
  apiVersion,
  dataset: dataset || "production",
  projectId: projectId || "demo",
  useCdn,
});
