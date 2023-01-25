import {Container} from "./style"
import {RiMapPinLine} from "react-icons/ri"
import {VscBellDot, VscChevronDown} from "react-icons/vsc"

import Rain from "../../assets/rain.svg"

function App() {


  return (
    <Container>
    <main>
      <header>
        <button> <RiMapPinLine/> Fortaleza <VscChevronDown/></button>
        <button><VscBellDot/></button>
      </header>
     <div className="rain">
    <img  src={Rain} /></div>
    </main>
    
    </Container>
  )
}

export default App
