export default async function fetchData({
  API,
  method,
  data,
  headers = { 'Content-Type': 'application/json' },
}) {
  const options = {
    method,
    headers: headers,
    body: data ? data : null,
  };

  try {
    const response = await fetch(API, options);
    return response;
  } catch (error) {
    return error;
  }
}
