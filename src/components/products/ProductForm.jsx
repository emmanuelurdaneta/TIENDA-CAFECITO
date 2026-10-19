import { useState } from 'react'
import { uploadImage } from '../../services/imgbb.js'

const MAX_IMAGE_SIZE = 32 * 1024 * 1024 // límite de Imgbb: 32 MB

const initialValues = { id: '', nombre: '', precio: '', stock: '' }

function validate(values, imagen) {
  const errors = {}
  if (!values.id.trim()) errors.id = 'El ID es obligatorio.'
  if (!values.nombre.trim()) errors.nombre = 'El nombre es obligatorio.'
  if (!(Number(values.precio) > 0)) errors.precio = 'El precio debe ser mayor a 0.'
  if (!Number.isInteger(Number(values.stock)) || Number(values.stock) < 0 || values.stock === '') {
    errors.stock = 'El stock debe ser un número entero mayor o igual a 0.'
  }
  if (!imagen) {
    errors.imagen = 'Seleccioná una imagen.'
  } else if (!imagen.type.startsWith('image/')) {
    errors.imagen = 'El archivo debe ser una imagen.'
  } else if (imagen.size > MAX_IMAGE_SIZE) {
    errors.imagen = 'La imagen no puede superar los 32 MB.'
  }
  return errors
}

function ProductForm() {
  const [values, setValues] = useState(initialValues)
  const [imagen, setImagen] = useState(null)
  const [errors, setErrors] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje(null)

    const validationErrors = validate(values, imagen)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setEnviando(true)
    try {
      console.log('Subiendo imagen a Imgbb...')
      const urlImagen = await uploadImage(imagen)
      console.log('Imagen subida con éxito.')
      console.log('URL:', urlImagen)

      const producto = { ...values, urlImagen }
      // Simulación del envío a la API
      console.log('Enviando los siguientes datos COMPLETOS a la API:', producto)

      setMensaje({ tipo: 'ok', texto: 'Producto enviado correctamente. Revisá la consola.' })
      setValues(initialValues)
      setImagen(null)
      e.target.reset()
    } catch (err) {
      console.error(err)
      setMensaje({ tipo: 'error', texto: err.message })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="form-section" id="nuevo-producto">
      <h2>Agregar nuevo producto</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label className="form__field">
          ID
          <input name="id" value={values.id} onChange={handleChange} />
          {errors.id && <span className="form__error">{errors.id}</span>}
        </label>

        <label className="form__field">
          Nombre
          <input name="nombre" value={values.nombre} onChange={handleChange} />
          {errors.nombre && <span className="form__error">{errors.nombre}</span>}
        </label>

        <label className="form__field">
          Precio
          <input name="precio" type="number" min="0" step="any" value={values.precio} onChange={handleChange} />
          {errors.precio && <span className="form__error">{errors.precio}</span>}
        </label>

        <label className="form__field">
          Stock
          <input name="stock" type="number" min="0" step="1" value={values.stock} onChange={handleChange} />
          {errors.stock && <span className="form__error">{errors.stock}</span>}
        </label>

        <label className="form__field">
          Imagen
          <input name="imagen" type="file" accept="image/*" onChange={(e) => setImagen(e.target.files[0] ?? null)} />
          {errors.imagen && <span className="form__error">{errors.imagen}</span>}
        </label>

        <button type="submit" className="btn" disabled={enviando}>
          {enviando ? 'Enviando…' : 'Enviar'}
        </button>

        {mensaje && (
          <p className={mensaje.tipo === 'ok' ? 'form__success' : 'form__error'}>{mensaje.texto}</p>
        )}
      </form>
    </section>
  )
}

export default ProductForm
