export default async function fetchData({API, method, data}) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? data : null,
  };

  try {
    const response = await fetch(API, options);
    return response;
  } catch (error) {
    return error;
  }
}