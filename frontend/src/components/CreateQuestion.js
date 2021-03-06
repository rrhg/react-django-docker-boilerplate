import React from 'react'
import {Context} from '../Context'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const CreateQuestion = props => {

  const [questionText, setQuestionText] = React.useState("")
  const [response, setResponse] = React.useState({})

  const context = React.useContext(Context)
  const backendHost = context.backendHost

  const onPostReq = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const objectToSend = {question_text:questionText}
    fetch(backendHost + "/api/polls/questions/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(objectToSend)
    })
    .then(res => res.json())
    .then(
        (result) => {
          setResponse(result)
        },
        (error) => {
          console.log(error)
        }
    )
  }

  return (
  <Container>
    <Jumbotron>
    <h2 className="header">
    ...Let's create a Question in Django backend by making a post request to /api/polls/questions endpoint
    </h2>

    <Form onSubmit={onPostReq}>
    <Form.Group>
    {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>Question Title</Form.Label>
        <Form.Control onChange={(e)=>setQuestionText(e.target.value)} value={questionText} type="text" placeholder="Enter questionText" />
        <Form.Text className="text-muted">
        Weird titles ar Ok
        </Form.Text>
    </Form.Group>
    
    <Form.Group>
    {/* <Form.Group controlId="formBasicPassword"> */}
        <Form.Label>Object received in response </Form.Label>
        <Form.Control onChange={(e)=>{}} value={JSON.stringify(response)} type="text" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    </Jumbotron>
  </Container>
  )
}

export default CreateQuestion