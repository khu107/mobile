export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'qpixq2v4');
  return fetch('https://api.cloudinary.com/v1_1/dy0qk8l1j/image/upload', {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
