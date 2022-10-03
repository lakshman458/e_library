import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'
import"../styles/quiz.css"

const Quiz = () => {
  return (
    <div>
      <Card className="active_subcribtions">
        <h4>Select From Your Active Subscription</h4>
      <Table striped>
      <thead>
        <tr>
          <th>ebook id</th>
          <th>e-Book Name</th>
          <th>Subcription Date</th>
          <th>Subcription Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1221</td>
          <td>Harry Porter & The half blood ...</td>
          <td>29 Mar 2020 </td>
          <td>1022242</td>
        </tr>
        <tr>
          <td >1226 </td>
          <td>Interstellar</td>
          <td>25 Feb 2020</td>
          <td>1011231</td>
        </tr>
        <tr>
          <td  >1889</td>
          <td>Corporate Chanakya</td>
          <td>12 Jan 2020</td>
          <td>1011223</td>
        </tr>
      </tbody>
    </Table>
      </Card   >

      <Card className="quiz">
        <Card.Title>Harry Potter & The Half Blood Prince Quiz</Card.Title>
  <Card.Body>


    QUIZ
  </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;
