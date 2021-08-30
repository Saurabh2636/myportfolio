import React from 'react'
import './Aboutus.css'
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
const Aboutus = () => {
    return (
        <div className='Aboutus'>
            <div className='heading'>
                <h1> About us</h1>
            </div>
            <Container className='card'>
            <Grid container justifyContent="center" spacing={10} >
                <Grid item>
                <img src="https://images.unsplash.com/photo-1630231141061-ec6b1384245e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" class="rounded-circle" alt="Cinque Terre" width="250" height="236"/> 
                </Grid>
                <Grid item>
                    <h2>About me</h2>
                     <p>Line 22:11:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid</p>
                </Grid> 
            </Grid>

            </Container>
        </div>
    )
}

export default Aboutus
