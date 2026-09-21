import { Routes, Route } from 'react-router-dom'
import { Catalog } from '@/pages/Catalog'
import { TemplatePage } from '@/pages/TemplatePage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/templates/:templateId" element={<TemplatePage />} />
    </Routes>
  )
}