import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const ActionBar = ({ actionList }) => {
    console.log("actionList");
    const handleAction = (callAction) => {
        console.log(callAction);
        if (callAction.action) {
            callAction.action();
        }
    }
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='dropdown-block'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    View Details
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                    {
                                        actionList.map((items, Index) => (
                                            <Dropdown.Item key={Index} onClick={() => handleAction(items)}>{items.title}</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>


                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default ActionBar