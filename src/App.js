import { StyledButton } from "./components/Button.style";
import { AppContainer } from "./components/Container.style";

function App () {
  return (
    <AppContainer>
      <StyledButton
        buttonLabel="Click here"
        backgroundColor="violet"
      >
      </StyledButton>
    </AppContainer>
  )
}

export default App;
