import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoryDetailPage from './pages/CategoryDetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/category/:categoryId" element={<CategoryDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
