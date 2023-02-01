import {Container} from "./style"
import {RiMapPinLine} from "react-icons/ri"
import {VscBellDot, VscChevronDown} from "react-icons/vsc"

import Rain from "../../assets/rain.svg"

function App() {


  return (
    <Container>
    
      <header>
        <h1>Waether</h1>
        <button> <RiMapPinLine/> Fortaleza <VscChevronDown/></button>
        <button><VscBellDot/></button>
      </header>
      
      <main>
        <h1>Terça-feira</h1>
    <div className="temp">
      <img  src={Rain} />
    <h2>58º</h2>
    </div>
    
    
    </main>
    <div className="card">
    <h3>Dias da semana</h3>

    </div>

    
    </Container>
  )
}

export default App
