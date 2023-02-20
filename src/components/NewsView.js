import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import './NewsView.css'

function NewsView() {
    const [news, setNews] = useState([])

    const newslist = async () => {
        try{
           await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=85a0070c80ef4504a47193d7f0e8cd8f')
            .then(res=>{
                setNews(res.data.articles)
    
            })
    
        }
        catch(err){
               console.log('no data'); 
        }
      
                   
           
        }
useEffect(()=>{
    newslist()
},[])

        return (
           
           <>
            <Row>
                {
                        news.map(item=>(
                           
                              <NewsCard toChild={item} />
                          
                        ))
                           
                          
                }
            </Row>
          
            
           <hr className='container'/>
            </>
        )
    }

    export default NewsView