
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/HomePage'

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}