export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_CLOUD_API_NAME);
  return fetch(process.env.REACT_CLOUD_API_KIY, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
