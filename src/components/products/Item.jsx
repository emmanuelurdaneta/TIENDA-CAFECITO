import { formatPrice } from '../../utils/formatPrice.js'
import ItemCount from './ItemCount.jsx'

function Item({ nombre, categoria, precio, stock, imagen, descripcion }) {
  const handleAdd = (cantidad) => {
    console.log(`Agregado: ${cantidad} × ${nombre}`)
  }

  return (
    <article className="item-card">
      <img className="item-card__img" src={imagen} alt={nombre} loading="lazy" />
      <div className="item-card__body">
        <span className="item-card__category">{categoria}</span>
        <h3 className="item-card__name">{nombre}</h3>
        <p className="item-card__description">{descripcion}</p>
        <p className="item-card__price">{formatPrice(precio)}</p>
        <p className="item-card__stock">Stock: {stock}</p>
        {stock > 0 ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <p className="status">Sin stock disponible</p>
        )}
      </div>
    </article>
  )
}

export default Item
