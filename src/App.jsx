import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import ImageSlider from './components/ImageSlider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <ImageSlider/>
    </>
  )
}

export default App
