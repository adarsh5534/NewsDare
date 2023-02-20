import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
import { Image } from 'react-bootstrap';
function SingleCard() {

    const params =useParams()
    const [singlecard,setSinglecard]=useState([])
    const getSinglecardData = async()=>{
        await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=85a0070c80ef4504a47193d7f0e8cd8f')
        .then(res=>{
            setSinglecard(res.data.articles);
        })
   
   
    }
const singleData = singlecard.find(item=>item.publishedAt==params.publishedAt)
    useEffect(()=>{
getSinglecardData()
    },[]) 
    
  return (  

   <>
   {
    singleData?(
<Row>
    <Col sm={12} md={12}  >
    <div className='contain' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',maxWidth:'600px',margin:'0 auto'}}>
        <div style={{padding:'50px',backgroundColor:'whitesmoke',textAlign:'center'}}>
        <Image style={{maxWidth:'100%'}} src={singleData.urlToImage}/>
        <h5>{singleData.author}</h5>
    <h2 style={{margin:'0 0 10px',position:'relative'}}>{singleData.title}<br/>
    <span style={{ fontSize:'large'}}>{singleData.content}</span>
    
    </h2>
        </div>
        <p>{singleData.publishedAt}</p>

    </div>
  
    </Col>
    
</Row>
    ):'not found'
   }
   </>
  )
}

export default SingleCard