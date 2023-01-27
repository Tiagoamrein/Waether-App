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
     <div className="rain">
    <img  src={Rain} /></div>
    <h2>58º</h2>
    <p>Precipitations
Max.: 31º   Min.: 25º</p>
    </main>
    
    </Container>
  )
}

export default App
