import React from "react";
import "./Skill.css";
import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import html from './image/html.png'
import css from './image/css3.jpg'
import js from './image/javascript.webp'
import node from './image/node.png'
import express from './image/express.webp'
import mongo from './image/mongodb.png'
import vs from './image/vsc.webp'
import reactjs from './image/reactjs.png'
import git from './image/git.png'
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
                <Grid item><img src={html} width={80}/></Grid>
                <Grid item><img src={css} width={80}/></Grid>
                <Grid item><img src={js} width={80}/></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Back-End</Typography>
                </Grid>
                <Grid item><img src={node} width={80}/></Grid>
                <Grid item><img src={express} width={80}/></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Database</Typography>
                </Grid>
                <Grid item><img src={mongo} width={80}/></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={10}>
                <Grid item>
                  <Typography variant="h5">Front-End</Typography>
                </Grid>
                <Grid item><img src={git} width={80}/></Grid>
                <Grid item><img src={vs} width={80}/></Grid>
                <Grid item><img src={reactjs} width={80}/></Grid>
               
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Skill;
