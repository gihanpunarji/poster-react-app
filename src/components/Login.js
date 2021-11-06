import React, { useState } from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

function Signup() {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const userLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user);
        } catch(error) {
            console.log(error.message);
            <p>{error.message}</p>
        }
    }

    return (
        <Container>
            <h1 style={{textAlign:'center'}}>
            Login to Poster To view your Account</h1>
            <Form>
                <input type="text" placeholder='Enter your email' onChange={(e) =>
                    {setLoginEmail(e.target.value)}} />
                <input type="password" placeholder='Enter your password' onChange={(e) => 
                    {setLoginPassword(e.target.value)}} />
            </Form>
            <Buttons>
                <Link to='/login'>
                    <input  onClick={userLogin} type="button" value='Login' />
                </Link>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    margin: calc(120px - 50px) auto;
    background-color: 'red';
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;

    input {
        margin: 4px;
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        padding: 10px 4px;
        width: 30%;

        @media(max-width: 720px) {
            width: 80%;
        }
    }

    @media(max-width: 720px) {
            margin-top: 70px;
        }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input[type='button'] {
        margin: 10px;
        width: 150px;

        @media(max-width: 720px) {
            width: 80%;
        }
    }

    @media(max-width: 720px) {
        width: 100%;
        flex-direction: column;

    }

`


export default Signup
