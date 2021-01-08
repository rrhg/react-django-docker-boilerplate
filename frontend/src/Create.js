import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Create = props => {

  const sendPostReq = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('send post was called')
    // fetch("http://localhost:8000/myapp/")
    fetch("http://backend:8000/myapp/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          // setIsLoaded(true);
          // setItems(result);
        },
        // Note: it's important to handle errors here
  
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
          // setIsLoaded(true);
          // setError(error);
        }
      )
  }

  return (
  <Container>
    <Jumbotron>
    <h2 className="header">
    ...Let's create a SampleModel in Django backend by making a post request to /sampleapp endpoint
    </h2>

    {/* <Form onSubmit={()=>console.log('onSubmit was called')}> */}
    <Form onSubmit={sendPostReq}>
    <Form.Group>
    {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>SampleModel Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
        <Form.Text className="text-muted">
        Weird titles ar Ok
        </Form.Text>
    </Form.Group>
    
    <Form.Group>
    {/* <Form.Group controlId="formBasicPassword"> */}
        <Form.Label>Additional Info</Form.Label>
        <Form.Control type="text" placeholder="Enter additional info" />
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

export default Create