import { useEffect, useState } from 'react'
import { getProductos } from '../../services/productos.js'
import ItemList from './ItemList.jsx'
import ProductForm from './ProductForm.jsx'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    getProductos(controller.signal)
      .then(setProductos)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return (
    <>
      <section id="productos">
        <h2>Productos</h2>
        {loading && <p className="status">Cargando productos…</p>}
        {error && <p className="status status--error">{error}</p>}
        {!loading && !error && <ItemList productos={productos} />}
      </section>
      <ProductForm />
    </>
  )
}

export default ItemListContainer
