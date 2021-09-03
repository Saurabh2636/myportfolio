import React from "react";
import "./Aboutus.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const Aboutus = () => {
  return (
    <div className="Aboutus">
      <div className="heading">
        <h1> About us</h1>
      </div>
      <Container className="card">
        <Grid container justifyContent="center" direction="column">
          <Grid item className="about" >
            <img
              src="https://pickaface.net/gallery/avatar/unr_eduardoavator_170411_2205_yk7xv.png"
              class="rounded-circle"
              alt="Cinque Terre"
              width="140"
              height="140"
            />
            <div>
              <h5 align="center">I am Saurabh Rana,a web developer from india.</h5>
              <Typography align='center'>Making beautiful and scalable website is my passion.led to my great interest in front-end web development.</Typography>
              <Typography align='center'>I learnt the basics HTML , CSS & JavaScript and the famous javascript front-end library - <strong>REACT.JS.</strong></Typography>
              <Typography align='center'>Soon i felt comfortable with React and i decided to learn about <strong>NODE ,EXPRESS AND MONGODB</strong></Typography>
              <p align='center'> apart form this, i am a captian of my cricket team.</p>
            </div>
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
