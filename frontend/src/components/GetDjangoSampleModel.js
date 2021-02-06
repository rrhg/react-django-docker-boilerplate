import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

const GetDjangoSampleModel = props => {

  const [models, setModels] = React.useState([])

  const onGetModels = (event) => {
    event.preventDefault();
    event.stopPropagation();
    fetch("http://localhost:8000/api/apimodel/")
      .then(res => res.json())
      .then(
        (models) => {
          console.log(models)
          setModels(models)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
  <Container>
    <Jumbotron>
    <h3 className="header">
    ..Let's get all Django Sample Models by making a get request to /api/apimodel endpoint
    </h3>
    <Button variant="primary" onClick={onGetModels}>
        Get
    </Button>
    {models.map(model => (
      <div key={model.id}>
        <Card>
          <Card.Header>{model.title}</Card.Header>
          <Card.Body>
            <Card.Text>
              id = {model.id}
            </Card.Text>
            <Card.Text>
              Supporting text.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    ))}
    </Jumbotron>
  </Container>
  )
}

export default GetDjangoSampleModel