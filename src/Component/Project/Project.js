import React from "react";
import "./Project.css";
import Grid from '@material-ui/core/Grid'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="heading">
          <h1> Project</h1>
        </div>
        <Grid container  justifyContent="center" spacing={10}>
          <Grid item>
          <Card style={{ width: "18rem" ,margin:"auto"}}sm={4} >
                <Card.Img variant="top" className='image' src="https://images.unsplash.com/photo-1630149461875-233003e5cbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item>
            <Card style={{ width: "18rem" ,margin:"auto"}}sm={4} >
                <Card.Img variant="top" className='image' src="https://images.unsplash.com/photo-1630149461875-233003e5cbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item>
            <Card style={{ width: "18rem" ,margin:"auto"}}sm={4} >
                <Card.Img variant="top" className='image' src="https://images.unsplash.com/photo-1630149461875-233003e5cbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item>
            <Card style={{ width: "18rem" ,margin:"auto"}}sm={4} >
                <Card.Img variant="top" className='image' src="https://images.unsplash.com/photo-1630149461875-233003e5cbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Project;
