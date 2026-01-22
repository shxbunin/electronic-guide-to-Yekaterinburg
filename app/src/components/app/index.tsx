import MapPage from '@/pages/map-page'
import PlacePage from '@/pages/place-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/:id" element={<PlacePage />} />
      </Routes>
    </BrowserRouter>
  )
}