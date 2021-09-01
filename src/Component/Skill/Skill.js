import React from "react";
import "./Skill.css";
import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import html from "./image/html.png";
import css from "./image/css3.jpg";
import js from "./image/javascript.webp";
import node from "./image/node.png";
import express from "./image/express.webp";
import mongo from "./image/mongodb.png";
import vs from "./image/vsc.webp";
import reactjs from "./image/reactjs.png";
import git from "./image/git.png";
const Skill = () => {
  return (
    <div className="skill">
      <div className="heading">
        <h1>Technology</h1>
      </div>
      <div className="container">
        <Container className="card inner1">
          <Grid container spacing={10} justifyContent="center">
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h5">Front-End</Typography>
                </Grid>
                <Grid item>
                  <img src={html} width={80} />
                </Grid>
                <Grid item>
                  <img src={css} width={80} />
                </Grid>
                <Grid item>
                  <img src={js} width={80} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h5">Back-End</Typography>
                </Grid>
                <Grid item>
                  <img src={node} width={80} />
                </Grid>
                <Grid item>
                  <img src={express} width={80} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h5">Other</Typography>
                </Grid>
                <Grid item>
                  <img src={git} width={80} />
                </Grid>
                <Grid item>
                  <img src={vs} width={80} />
                </Grid>
                <Grid item>
                  <img src={reactjs} width={80} />
                </Grid>
                <Grid item>
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    width={80}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h5">Database</Typography>
                </Grid>
                <Grid item>
                  <img src={mongo} width={80} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Skill;
