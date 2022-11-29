import { GlobalStyle } from "./components/styled/Global.styled"
import { Container  } from "./components/styled/container.styled"
import Box from "./components/Box"
function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Container>
        <Box/>
      </Container>
      

    </div>
  )
}

export default App
