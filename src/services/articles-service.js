

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

export const fetchArticles = async (limit = 10, offset = 0) =>{
  let response = await fetch(`${serviceUrl}/articles?limit=${limit}&offset=${offset}`);
  response = await response.json();
  return response;
}
