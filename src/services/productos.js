const PRODUCTOS_URL = `${import.meta.env.BASE_URL}productos.json`

export async function getProductos(signal) {
  const response = await fetch(PRODUCTOS_URL, { signal })
  if (!response.ok) {
    throw new Error(`No se pudieron cargar los productos (HTTP ${response.status})`)
  }
  return response.json()
}
