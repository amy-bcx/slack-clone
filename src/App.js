
import './App.css';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./components/theme.js";





function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark"): setTheme("light");
  };

  const [rooms, setRooms] = useState([])

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) =>{
      setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name: doc.data().name};
      }))
    })

  }

    useEffect(() => {
      getChannels();
      }, [])

    console.log(rooms);

  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme } >
      <GlobalStyles/>
    <StyledApp>

      <Router>
        <Container>
       
          <Header />
          
          <Main>
      
            <Sidebar rooms={rooms} /> 
            <Switch>
              <Route path="/room">
                <Chat />
                
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
      </StyledApp>
      
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
const StyledApp = styled.div`
`
// <button onClick={() => themeToggler()}>Change</button>
//Need to find a way to apply it to the header but no time for today left