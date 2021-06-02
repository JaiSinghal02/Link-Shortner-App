import React,{useState} from 'react'
import styled,{ ThemeProvider } from 'styled-components'
import theme from './theme'
import Button from './Components/ThemedComponents/Button'
import NavBar from './Components/Navigation/NavBar'
import NavModal from './Components/Navigation/NavModal'
import Cover from './Components/Cover/Cover'
import SearchBar from './Components/SearchBar/SearchBar'
import LinkBar from './Components/LinkBar/LinkBar'
import Feature from './Components/Feature/Feature'
import BottomBox from './Components/BottomBox/BottomBox'
import Footer from './Components/Footer/Footer'
import axios from 'axios'

const Box = styled.div`
  text-align: center;
  font-family: ${theme.typography.Fonts.Family};
  font-weight: ${theme.typography.Fonts.Weights[1]};
  overflow-x: hidden;
  `
  const Header = styled.header`
  background-color:white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography['Body Copy']};`
  const ColorBox= styled.div`
  width: 100%;
  background-color: #f0f1f6;
  overflow-y: hidden;
  `
function App(props) {
  
  const [showNavModal,setShowNavModal]=useState(false)
  const [link,setLink]=useState("")
  const [data,setData]=useState([])
  const [error,setError]=useState("")
  const [copyTag,setCopyTag]=useState([])
  const [searchButtonText,setSearchButtonText] = useState("Shorten it!");

  function setSearchLink(e){
    e.preventDefault();
    if(error){
      setError("")
    }
    setLink(e.target.value)
  }
  function searchLink (e){
    if(link===""){
      setError("Please add a link")
      return;
    }
    setSearchButtonText("Fetching..");
    axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((res)=>{
        setCopyTag(prev=>([...prev,"Copy"]))
        setData(prev=>([...prev,res.data.result]))
        setSearchButtonText("Shorten it!");
      })
      .catch((err)=>{
        setSearchButtonText("Shorten it!");
        console.log(err.response.data.error)
      })
  }
  function copyToClipboard(ind,text){
    navigator.clipboard.writeText(text)
      .then(()=>{
        const len=copyTag.length
        const newArr= new Array(len).fill("Copy")
        newArr[ind]="Copied"
        setCopyTag(newArr)
      })
  }
  return (
    <ThemeProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap" rel="stylesheet"/>
    <Box>
      <Header>
        <NavBar showModal={()=>setShowNavModal(!showNavModal)}></NavBar>
        {showNavModal?<NavModal showModal={()=>setShowNavModal(!showNavModal)}></NavModal>:null}
        <Cover></Cover>
        <SearchBar setSearchLink={setSearchLink} searchLink={searchLink} btnText={searchButtonText} value={link} error={error}></SearchBar>
        {data.length>0?data.reverse().map((d,i)=>{
        return(
          <LinkBar data={d} key={i} copyToClipboard={(text)=>copyToClipboard(i,text)} copyTag={copyTag[i]}></LinkBar>
        )}):null}
        <ColorBox>
        <Feature></Feature>
        </ColorBox>
      </Header>
    </Box>
    <BottomBox></BottomBox>
    <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
