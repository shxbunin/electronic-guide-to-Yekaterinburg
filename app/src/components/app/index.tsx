import MapPage from '@/pages/map-page'
import PlacePage from '@/pages/place-page'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<MapPage />} />
        <Route path="/:id" element={<PlacePage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
