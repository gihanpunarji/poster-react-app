import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
                <Logo>
                    <span>Poster</span>
                    <span></span>
                </Logo>
                <Menus>
                    <Menu src='https://img.icons8.com/material-rounded/24/000000/home.png' />
                    <Menu src='https://img.icons8.com/material/24/000000/sync-settings.png' />
                    <Menu src='https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-1/p240x240/242493320_1241149729697908_2159125378599502668_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=1t7tMDC5RpsAX9WzrMX&_nc_ht=scontent.fcmb1-2.fna&oh=266e29db20581ce3ab83ce9662817e70&oe=61A5C5AC' />
                </Menus>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  height: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin-left: 30px;
    cursor: pointer;
`

const Menus = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 100px;

    @media (max-width: 1280px) {
        margin: 30px;
    }
    
`

const Menu = styled.img`
    margin: 20px;
    cursor: pointer;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    
    @media (max-width: 1280px) {
        margin: 10px;
        height: 30px;
        width: 30px;
    }
`

export default Header
