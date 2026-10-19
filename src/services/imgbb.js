const IMGBB_URL = 'https://api.imgbb.com/1/upload'

export async function uploadImage(file) {
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY
  if (!apiKey) {
    throw new Error('Falta configurar VITE_IMGBB_API_KEY en el archivo .env')
  }

  const formData = new FormData()
  formData.append('image', file)

  const response = await fetch(`${IMGBB_URL}?key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    body: formData,
  })

  const result = await response.json().catch(() => null)
  if (!response.ok || !result?.success) {
    const detalle = result?.error?.message ?? `HTTP ${response.status}`
    throw new Error(`No se pudo subir la imagen a Imgbb: ${detalle}`)
  }

  return result.data.url
}
