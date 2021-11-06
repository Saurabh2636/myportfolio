import React from "react";
import "./Project.css";
import Grid from "@material-ui/core/Grid";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import portfolio from "./image/portfolio.png";
import food from "./image/food.png";
import notes from "./image/notes.png";
import covid from "./image/covid.png";
import chat from './image/chat1.png';
import library from "./image/library.png";
import news from './image/newas.png'
const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="heading">
          <h1> Project</h1>
        </div>
        <Grid container justifyContent="center" spacing={10}>
        <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto" ,maxHeight:'16.5rem'}}
              sm={4}
              className="single"
            >
              <Card.Img variant="top" className="image" src={news} />
              <Card.Body className="content">
                <Card.Title>
                  <strong>News Today</strong>
                </Card.Title>
                <Card.Text>
                  <strong>
                   The project simply fetch the data from public api.For getting more information you have to create account on the given login page which created from firebase authentication sys.
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://newsind.herokuapp.com/login"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto",maxHeight:'15rem' }}
              sm={4}
              className="single"
            >
              <Card.Img variant="top" className="image" src={portfolio} />
              <Card.Body className="content">
                <Card.Title>
                  <strong>portfolio</strong>
                </Card.Title>
                <Card.Text>
                  <strong>
                    create this portfolio using basic html css and javascript
                    and reactjs.for making ui better lil bit use of material ui
                    and bootstrap both.
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://saurabh2636.github.io/myportfolio/"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto" ,maxHeight:'15rem'}}
              sm={4}
              className="single"
            >
              <Card.Img variant="top" className="image" src={food} />
              <Card.Body className="content">
                <Card.Title>
                  <strong>recipe app</strong>
                </Card.Title>
                <Card.Text>
                  <strong>
                    the project contain multiple choice of meal.we can order
                    breakfast ,dinner and many more dishes.at the end we can
                    check bill.
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://saurabh2636.github.io/Food/"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto" ,maxHeight:'15rem'}}
              sm={4}
              className="single"
            >
              <Card.Img variant="top" className="image" src={notes} />
              <Card.Body className="content">
                <Card.Title>
                  <strong>notes</strong>
                </Card.Title>
                <Card.Text>
                  <strong>
                    this project able to store our notes or data in json server.
                    we just need to install json server in our system
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://saurabh2636.github.io/Mynotes/"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto",maxHeight:'15rem' }}
              sm={4}
              className="single"
            >
              <Card.Img variant="top" className="image" src={covid} />
              <Card.Body className="content">
                <Card.Text>
                  <Card.Title>
                    <strong>Covid</strong>
                  </Card.Title>
                  <strong>
                    {" "}
                    fetching corona updates from public apis.we can fetch data
                    of any country.for fetching data we use axios{" "}
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://saurabh2636.github.io/Covid-19/"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto",height:'15rem' }}
              sm={4}
              
              className="single"
            >
              <Card.Img variant="top" className="image" src={chat} />
              <Card.Body className="content">
                <Card.Title>
                  <strong>Chat app</strong>
                </Card.Title>
                <Card.Text>
                  <strong>
                   Real time chat application with the help of socket.io 
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://chat2636.netlify.app/chat"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{ width: "18rem", margin: "auto" ,maxHeight:'15rem'}}
              sm={4}
              className="single"
            >
              <Card.Img variant="top" className="image" src={library} />
              <Card.Body className="content">
                <Card.Title>
                  <strong>Library</strong>
                </Card.Title>
                <Card.Text>
                  <strong>
                  This project devloped in mern stack where we can do multiple operations (CRUD)
                  </strong>
                </Card.Text>
                <Button
                  variant="danger"
                  className="btn"
                  onClick={() => {
                    window.location.assign(
                      "https://saurabh2636.github.io/"
                    );
                  }}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Project;
