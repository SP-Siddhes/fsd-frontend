import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import "../styles/Home.css"
import axios from "axios"
import API_URL from '../../config/global';

const Home = () => {
    useEffect (() => {
      const user = JSON.parse(localStorage.getItem("Userinfo"));
      if (user && user.token) {
        getData(user.token)
      }
    }, [])



    const getData = async (token) => {
      try{
        const config ={
          headers: {
            Authorization:token
          }
        }
        const response = await axios.post( `${API_URL}/home`, config)
        console.log(response)

      }catch (e){
        console.log(e)
      }
    }





  return (
   <Container>
    <h1> Welcome to our website</h1>
    <p> How to get started?</p>
    <Button variant='primary' type='submit'>Get started</Button>


   </Container>
  )
}

export default Home