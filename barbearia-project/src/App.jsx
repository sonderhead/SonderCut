import { useState } from 'react'
import './App.css'
import { Header } from './components/layout/header'
import { Main } from './components/layout/main'
import { SectionQuemSomos } from './components/layout/sectionQuemSomos'
import { SectionNossosServicos} from './components/layout/sectionNossosServicos'
import { SectionForm } from './components/layout/sectionForm'
import { SectionContato } from './components/layout/sectionContato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <SectionQuemSomos/>
      <SectionNossosServicos/>
      <SectionForm/>
      <SectionContato/>
  
    </>
  )
}

export default App
