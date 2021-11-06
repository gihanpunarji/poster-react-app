import React from "react";
import styled from "styled-components";
import PostView from "./PostView";
import Signup from "./Signup";
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function Home() {
    return(
        <Container>
            <Router>
                <Routes>
                    <Route path='/' exact element={<PostView />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </Container>
    )
} 

const Container = styled.div``
export default Home