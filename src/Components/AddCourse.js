import React, { Fragment } from "react";
import { Form,FormGroup,Button,Container,Label } from "reactstrap";
import Navbar from "./navbar";

const AddCourse = () =>{
    return(
        <Fragment>
            <Navbar/>
            <Form style={{ size:750,marginLeft: 10 }}>
                <FormGroup>
                    <label for="userID">Course ID : -</label><br />
                    <input
                        bsSize="lg"
                        type="text"
                        name="id"
                        placeholder="Enter ID here."
                        id="userID"
                        style={{width: 1330 }} />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title : -</label><br />
                    <input
                        type="text"
                        name="Course title"
                        id="title"
                        placeholder="Enter Course Title"
                        style={{ width: 1330 }} />
                </FormGroup>

                <FormGroup>
                    <Label for="courdesc">Course Description : -</Label><br />
                    <input
                        type="text"
                        id="courdesc"
                        placeholder="Enter Course Description"
                        name="Description"
                        style={{ width: 1330 }} />
                </FormGroup>

                {/* <FormGroup>
                    <label for="select">Select Course Author : -</label><br/>
                    <input id="select" type="select" name="select">
                        <option>CodeWithHarry</option>
                        <option>LearnCodeWithDurghesh</option>
                        <option>Telusko</option>
                        <option>Rupali-Molavade</option>
                        <option>Vandana-Lokande</option>
                        <option>WsCubeTech</option>
                    </input>
                </FormGroup> */}
                <h6>Select Course Author from below options</h6>
                <FormGroup check>
                    <input type="radio" name="check" />
                    <label check>CodeWithHarry</label>
                </FormGroup>
                <FormGroup check>
                    <input type="radio" name="check" />
                    <label check>LearnCodeWithDurghesh</label>
                </FormGroup>
                <FormGroup check>
                    <input type="radio" name="check" />
                    <label check>Telusko</label>
                </FormGroup>
                <FormGroup check>
                    <input type="radio" name="check" />
                    <label check>Rupali-Molavade</label>
                </FormGroup>
                <FormGroup check>
                    <input type="radio" name="check" />
                    <label check>Vandana-Lokande</label>
                </FormGroup>
                <FormGroup check>
                    <input type="radio" name="check" />
                    <label check>WsCubeTech</label>
                </FormGroup>

                <FormGroup>
                    <label for="text">Course Descripton.</label><br />
                    <input
                        id="text"
                        name="description"
                        placeholder="Enter Descripton Here."
                        type="text"
                        style={{ height: 150, width: 600 }} />
                </FormGroup>
                <Container className="text-center">
                    <Button size="lg" color="success" outline style={{ marginRight: 19 }}>Login</Button>
                    <Button size="lg" color="danger" outline>Cancel</Button>
                </Container>
                <hr />
            </Form>
        </Fragment>
    )
}
export default AddCourse;