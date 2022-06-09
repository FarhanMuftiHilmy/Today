import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import News from './Pages/News';
import Navbar from './Components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;
