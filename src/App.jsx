import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<h1>Coba</h1>} />
      </Route>
    </Routes>
  )
}

export default App
