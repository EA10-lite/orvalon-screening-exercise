import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  Home,
  LinkedIn,
  Products,
  Todo,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
