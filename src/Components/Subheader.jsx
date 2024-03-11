import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Subheader = ({ pagetitle, subline }) => {
    return (
        <div>
            <Container fluid className='list-row'>
                <Row  >
                    <Col md={7}><h2>{pagetitle}</h2></Col>
                    <Col md={5} >
                        {
                            subline && <ul className='link-block'>
                                <h4><Link to='/'>Home</Link></h4>
                                <h5>{pagetitle}</h5>
                            </ul>}</Col>



                </Row>
            </Container>
        </div>
    )
}

export default Subheader