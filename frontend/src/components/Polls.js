import React from 'react'
import {Context} from '../Context'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"


const Polls = props => {

  const [questions, setQuestions] = React.useState([])

  const context = React.useContext(Context)
  const backendHost = context.backendHost

  const onGetModels = (event) => {
    event.preventDefault();
    event.stopPropagation();

    fetch(backendHost + "/api/polls/questions/")
      .then(res => {
        console.log(res)
        return( res.json())
      })
      .then(
        (questions) => {
          console.log(questions)
          setQuestions(questions)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
  <Container>
    <Jumbotron>
    <h2>Polls Demo APP</h2>
    <h4>Create a new  <Link to="/create">Question</Link></h4>
    <h4>or</h4>
    <h4 className="header">
     Get all Question by making a get request to /api/polls/questions endpoint
    </h4>
    <Button variant="primary" onClick={onGetModels}>
        Get
    </Button>
    {questions.map(question => (
      <div key={question.id}>
        <Card>
          <Card.Header>{question.question_text}</Card.Header>
          <Card.Body>
            <Card.Text>
              id = {question.id}
            </Card.Text>
            <Card.Text>
              Supporting text
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

export default Polls