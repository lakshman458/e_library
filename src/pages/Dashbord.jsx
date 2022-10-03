import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "../styles/dash.css";

const Dashbord = () => {
  const cards = [
    {
      id: 0,
      title: "Total Points",
      text: " point scored by  subcriptions",
      color: "red",
      count: 200,
    },
    {
      title: "Books Subcribed",
      text: " Number of books read",
      color: "blue",
      count: 2,
    },

    {
      title: "Active Subcriptions",
      text: " number of books  currently reading",
      color: "green",
      count: 1,
    },
  ];

  return (
    <>
      <div className="container">
        {cards.map((cards_data) => (
          <Card className="dashbord_card ">
            <Card.Body>
              <Card.Title>{cards_data.title}</Card.Title>
              <span
                style={{ border: `7px solid ${cards_data.color}` }}
                className="count_card"
              >
                {" "}
                <Card.Text>{cards_data.text}</Card.Text>
                <span className="number">{cards_data?.count}</span>
              </span>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="table_card">
        <span className="subcribe_point">Top Subscribers by Points</span>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tanamay Sant</td>
              <td>1900</td>
            </tr>
            <tr>
              <td>Biswajit Mishra</td>
              <td>1891</td>
            </tr>
            <tr>
              <td>Ankur Sharma</td>
              <td>1700</td>
            </tr>
            <tr>
              <td>Preeti Pathak</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Mali Banerjee</td>
              <td>1200</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Dashbord;
