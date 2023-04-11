import Home from './Components/Homepage/Home'
import "./App.css"
import ModalStates from './Context/ModalStates'
function App() {

  return (
    <ModalStates>
      <Home/>
    </ModalStates>
      
  )
}

export default App
