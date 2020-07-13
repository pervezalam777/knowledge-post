import { processPublicRequest } from "./base-service";

export const fetchArticles = async (limit = 10, offset = 0) => {
  let details = {
    url: `/articles?limit=${limit}&offset=${offset}`,
    method:"GET",
  }
  return processPublicRequest(details);
}
