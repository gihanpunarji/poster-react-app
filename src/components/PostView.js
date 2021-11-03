import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from 'firebase/firestore'
import styled from "styled-components";
import db from '../firebase'

function PostView() {

    const [users, setUsers] = useState([]);

    useEffect(() => 
        onSnapshot(collection(db, 'users'), (snapshot) =>{
            setUsers(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
    ,[])

    const commentInput = () => {
        console.log('clicked');
    }

    return(
        <>
            {users.map(user => {
                return(
                    <Container key={user.id}>
                        <Post>
                            <PostHeader>
                                <Details>
                                    <img src={user.profileImage} alt="" />
                                    <span style={{marginLeft: 10}}>{user.name}</span>
                                </Details>
                                <span style={{fontSize: 22}}>...</span>
                            </PostHeader>
                            <PostImage src={user.postImgUrl} />
                            <PostFooter>
                                <Buttons>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" />
                                    <img src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png" onClick={() => commentInput()} />
                                </Buttons>
                                <img src="https://img.icons8.com/material-outlined/24/000000/share.png"/>
                            </PostFooter>
                            <Comments>
                                <span style={{fontWeight: 600, fontSize: 15}}>{user.name}</span>
                                <span style={{color:'gray', fontSize: 14}}>: {user.comment}</span>
                                <form>
                                    <img src="https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/48/000000/external-emoji-birthday-party-tulpahn-basic-outline-tulpahn.png"/>
                                    <input type="text" placeholder='comment here' />
                                    <input type="button" value="send" />
                                </form>
                            </Comments>
                        </Post>
            </Container>
                )
            })}
        </>
    )
} 


const Container = styled.div`
    margin: 20px auto;
    max-width: 1280px;
    width: 40%;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    border-radius: 3px;

    @media(max-width: 720px) {
        width: 80%;
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
    padding-bottom: 4px;
    border-bottom: 1px solid #d7d7d7;

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
    border-top: 1px solid #d7d7d7;
    padding-top: 4px;

    img{
        cursor: pointer;
        transition: .25s all;
        :hover {
            transform: scale(1.15);
        }
    }

`
const Buttons = styled.div`
    img {
        margin-right: 10px;
        cursor: pointer;
        transition: .25s all;
        :hover {
            transform: scale(1.15);
        }
    }
`

const Comments = styled.div`
    width: 100%;
    margin: 0 8px;
    cursor: pointer;

    input{
        width: 80%;
        outline: none;
        border: none;
    }

    form{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 2px 0;
    }

    img{
        width: 13px;
        height: 13px;
    }

    input[type='button'] {
        background: transparent;
        cursor: pointer;
        align-items: flex-end;
        width: 20%;
    }
`


export default PostView