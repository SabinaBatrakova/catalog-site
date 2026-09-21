import { Routes, Route } from 'react-router-dom'
import { TemplatePage } from '@/pages/TemplatePage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/templates/:templateId" element={<TemplatePage />} />
    </Routes>
  )
}