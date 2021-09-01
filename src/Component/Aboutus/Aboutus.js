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
          <Grid item className="inner" >
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
          <Grid item>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27741.440929214226!2d79.41954358690984!3d29.642032649934475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0abd4273fb1dd%3A0x17d59cc393c2ccdc!2sRanikhet%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1630469489736!5m2!1sen!2sin" width="100%" height="300" style={{border:0,allowfullscreen:"" ,loading:"lazy"}}></iframe>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Aboutus;
