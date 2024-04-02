export default async function fetchData({API, method, data}) {
  const options = {
    method,
    data: data ? data : null,
  };

  try {
    const response = await fetch(API, options);
  
    return await response.json();
  } catch (error) {
    return error;
  }
}