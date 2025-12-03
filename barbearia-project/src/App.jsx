import { useState } from 'react'
import './App.css'
import { Header } from './components/layout/header'
import { Main } from './components/layout/main'
import { SectionQuemSomos } from './components/layout/sectionQuemSomos'
import { SectionNossosServicos} from './components/layout/sectionNossosServicos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <SectionQuemSomos/>
      <SectionNossosServicos/>
    </>
  )
}

export default App
