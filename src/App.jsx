import Layout from './components/layout/Layout.jsx'
import ItemListContainer from './components/products/ItemListContainer.jsx'

function App() {
  return (
    <Layout>
      <section className="hero" id="inicio">
        <h1 className="hero__title">Bienvenido a Tostado Café</h1>
        <p className="hero__text">
          Granos de especialidad de origen único, tostados en pequeños lotes, y todo lo que necesitás
          para prepararlos en casa.
        </p>
      </section>
      <ItemListContainer />
    </Layout>
  )
}

export default App
