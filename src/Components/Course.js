import React from "react";
import { Card,CardBody,CardSubtitle,CardText,Button,Container } from "reactstrap";

const card = ({ title, info }) =>{
    return(
        <card className="text-center">
            <CardBody style={{height:200}}>
                <CardSubtitle style={{ color:"Dodgerblue",fontSize:60,fontWeight: 'bold' }}>{title}</CardSubtitle>
                <CardText style={{fontSize:30}}>{info}</CardText>
                <Container className="text-center">
                    <Button  size="lg" color="success" outline style={{ marginRight: 19 }}>Learn</Button>
                    <Button size="lg" color="warning ml-3" outline >Watch</Button>
                </Container>
            </CardBody>
        </card>
    )
}
export default card;