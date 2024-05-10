export default async function fetchData({
  API,
  method,
  data,
  params,
  headers = { 'Content-Type': 'application/json' },
}) {
  const options = {
    method,
    headers: headers,
    body: data ? data : null,
  };

  if (params) {
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      API += `?${queryString ?? ''}`; 
    }
  }
  
  try {
    const response = await fetch(API, options);
    return response;
  } catch (error) {
    return error;
  }
}
