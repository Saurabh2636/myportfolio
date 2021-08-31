import React from "react";
import "./Aboutus.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const Aboutus = () => {
  return (
    <div className="Aboutus">
      <div className="heading">
        <h1> About us</h1>
      </div>
      <Container className="card">
        <Grid container justifyContent="center" direction="column">
          <Grid item className="inner">
            <img
              src="https://pickaface.net/gallery/avatar/unr_eduardoavator_170411_2205_yk7xv.png"
              class="rounded-circle"
              alt="Cinque Terre"
              width="140"
              height="140"
            />
            <p>
              Line 22:11: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
              https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
              jsx-a11y/anchor-is-valid
            </p>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Aboutus;
