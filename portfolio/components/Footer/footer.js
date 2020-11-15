import React from 'react';
import Container from 'react-bootstrap/Continer';
import Row from 'react-bootstrap/Row';
import Col from 

function Footer() {

    return(
        <Footer className="at-5">
            <Container fluid={true}>
                <Row className="border-top justify-contet-between p-3">
                    <Col classsName="p-0" md={3} sm={12}> Diana Maina</Col>

                    <Col className=" p-0 d-flex justify-content-end" md={3}>This site was made by Diana Maina.</Col>

                </Row>
            </Container>
        </Footer>
    );

}

export default Footer;