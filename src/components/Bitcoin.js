import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Bitcoin({ toBitcoin }) {
    const [Bitcoin, setBitcoin] = useState([])
    const baseUrl = 'https://newsapi.org/v2/everything?'
    async function getBitcoin() {
        await axios.get(`${baseUrl}${toBitcoin}`).then(res => {
            setBitcoin(res.data.articles)
        })
    }
    // console.log(Bitcoin);
    useEffect(() => {
        getBitcoin()
    }, [])
    return (


        <Row>
            {
                Bitcoin.map(item=>(
                    <Col className='p-2' sm={12} md={6} lg={4} xl={3}>
<Link  style={{textDecoration:'none',color:'black'}} to={`singlecard/${item.url}`} >

                    <Container >
                        <Card className='mt-4 text-center' style={{ width: '100%', boxShadow: "10px -2px 20px 2px rgb(0 0 0 /30%)" }}>
                            <Card.Img variant="top" src={item.urlToImage} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
    
                            </Card.Body> 
                            
                        </Card>
                      
                    </Container>
                    </Link>
                </Col>
                ))
            }
          
        </Row>

    );


}

export default Bitcoin