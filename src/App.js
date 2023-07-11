import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./App.css"
import { Container} from "./components/index"

import {Home,Profile} from "./Pages/index"
import {Header, Footer} from "./sections/index"




const App = ()=>{
    return(
        <>
        <Router>
            <Header/>
              <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                
                </Routes>
              
              </Container>


        </Router>
        
            

        </>
        
    )
}

export default App