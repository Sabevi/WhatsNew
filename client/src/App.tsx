
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import CreateArticlePage from './pages/CreateArticlePage'
import Layout from './components/Layout/Layout'

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="create" element={<CreateArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}