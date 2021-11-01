import React from "react";
import styled from "styled-components";

function Home() {
    return(
        <Container>
            <Post>
                <PostHeader>
                    <Details>
                        <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-1/p240x240/242493320_1241149729697908_2159125378599502668_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=1t7tMDC5RpsAX9WzrMX&_nc_ht=scontent.fcmb1-2.fna&oh=266e29db20581ce3ab83ce9662817e70&oe=61A5C5AC" alt="" />
                        <span style={{marginLeft: 10}}>Profile Name</span>
                    </Details>
                    <span style={{fontSize: 22}}>...</span>
                </PostHeader>
                <PostImage src='https://th.bing.com/th/id/R.e634d465fc117284db4f81ecceabbf4e?rik=HeQgRgW%2blF6djQ&pid=ImgRaw&r=0' />
                <PostFooter>
                    <Likes>
                        <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                        <img src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png"/>
                    </Likes>
                    <img src="https://img.icons8.com/material-outlined/24/000000/share.png"/>
                </PostFooter>
            </Post>
        </Container>
    )
} 


const Container = styled.div`
    display: flex;
    margin: 60px 400px;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    border-radius: 3px;

    @media(max-width:720px){
        margin: 40px 100px;
    }
`

const Post = styled.div`
    display: flex;
    flex-direction: column;

`

const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

    span{
        cursor: pointer;
    }
`

const Details = styled.div`
    display: flex;
    text-transform: lowercase;
    align-items: center;

    img{
        border-radius: 50%;
        height: 35px;
        width: 305x;
    }

`

const PostImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media(max-width:720px) {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const PostFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px;
    img{
        cursor: pointer;
    }

`
const Likes = styled.div`
    img {
        margin-right: 10px;
        cursor: pointer;
    }
`


export default Home