import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function NewsCard({ toChild }) {
    // console.log(toChild);
    return (
            <Col className='p-2' sm={3} md={3} lg={4} xl={3}>


<Link  style={{textDecoration:'none',color:'black'}} to={`singlecard/${toChild.publishedAt}`} >


                <Container >
                    <Card className='mt-4 text-center' style={{ width: '100%', boxShadow: "10px -2px 20px 2px rgb(0 0 0 /30%)" }}>
                        <Card.Img variant="top" src={toChild.urlToImage} alt='image.png' />
                        <Card.Body>
                            <Card.Title>{toChild.title}</Card.Title>
                            <Card.Text>
                                {toChild.description}
                            </Card.Text>

                        </Card.Body>
                        <Button variant="link" style={{ textDecoration: 'none' ,color:'blue'}}>{toChild.url}</Button>
                    </Card>
                </Container>


        </Link>
        </Col>

    )
}

export default NewsCard