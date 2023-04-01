import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import QuestionAnswe from './components/QuestionAnswer/QuestionAnswe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
    <Blog></Blog>
    <QuestionAnswe></QuestionAnswe>
    </div>
  )
}

export default App
