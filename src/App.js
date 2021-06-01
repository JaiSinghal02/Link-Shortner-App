import React,{useState} from 'react'
import styled,{ ThemeProvider } from 'styled-components'
import theme from './theme'
import Button from './Components/ThemedComponents/Button'
import NavBar from './Components/Navigation/NavBar'
import NavModal from './Components/Navigation/NavModal'
function App() {
  const Box = styled.div`
  text-align: center;
  font-family: ${theme.typography.Fonts.Family};
  font-weight: ${theme.typography.Fonts.Weights[1]};
  `
  const Header = styled.header`
  background-color:white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography['Body Copy']};`

  const [showNavModal,setShowNavModal]=useState(false)

  return (
    <ThemeProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap" rel="stylesheet"/>
    <Box>
      <Header>
        <NavBar showModal={()=>setShowNavModal(!showNavModal)}></NavBar>
        {showNavModal?<NavModal showModal={()=>setShowNavModal(!showNavModal)}></NavModal>:null}
        <Box style={{width: '35%',maxWidth: '130px'}}>
        <Button dark >Copied</Button>
        </Box>
        <div style={{width: '60%',maxWidth: '200px'}}>
        <Button light borderRadius="20px">Get Started</Button>
        </div>
        
        <p style={{color:theme.colors.Secondary.Red}}>
          Edit <code >src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </Box>
    </ThemeProvider>
  );
}

export default App;
