import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const GetDjangoSampleModel = props => {

  const [title, setTitle] = React.useState("")
  const [response, setResponse] = React.useState({})

  const onPostReq = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const objectToSend = {title:title}
    fetch("http://localhost:8000/api/apimodel/", {
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
    ..Let's create a SampleModel in Django backend by making a post request to /sampleapp endpoint
    </h2>

    <Form onSubmit={onPostReq}>
    <Form.Group>
    {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>SampleModel Title</Form.Label>
        <Form.Control onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" />
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

export default GetDjangoSampleModel