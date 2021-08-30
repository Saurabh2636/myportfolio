import React from "react";
import "./Skill.css";
import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
const Skill = () => {
  return (
    <div className="skill">
      <div className="heading">
        <h1>Technology</h1>
      </div>
      <div className="container">
        <Container className="card inner">
          <Grid container spacing={10} justifyContent="center">
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Front-End</Typography>
                </Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Front-End</Typography>
                </Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Front-End</Typography>
                </Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Front-End</Typography>
                </Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
                <Grid item>😎</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Skill;
