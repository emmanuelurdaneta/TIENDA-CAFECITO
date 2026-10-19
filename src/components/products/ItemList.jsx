import Item from './Item.jsx'

function ItemList({ productos }) {
  if (productos.length === 0) {
    return <p className="status">No hay productos disponibles.</p>
  }

  return (
    <div className="item-grid">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  )
}

export default ItemList
