import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
function Apple({ toApple }) {
    const [Apple, setApple] = useState([])
    const baseUrl = 'https://newsapi.org/v2/everything?'
    async function getApple() {
        await axios.get(`${baseUrl}${toApple}`).then(res => {
            setApple(res.data.articles)
        })
    }
    // console.log(Apple);
    useEffect(() => {
        getApple()
    }, [])
    return (

<>

<Row>
            {
                Apple.map(item=>(
                    <Col className='p-2' sm={3} md={3} lg={4} xl={3}>

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
                </Col>
                ))
            }
          
        </Row>
        
        </>

 
    );


}

export default Apple