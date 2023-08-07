import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    // marginTop: '10px',
    backgroundImage: 'linear-gradient(rgb(56, 56, 56), rgb(0, 0, 0))',
    borderTop: '10pt solid green',
  },
  footerBox: {
    display: 'flex',
    padding: '10px 10px 20px 10px',
    color: 'white',
    height: '4vh',
  },
})

const Footer = () => {
  const classes = useStyles()
  //
  return (
    <Container className={classes.container}>
      <Grid className={classes.footerBox}>
        <Typography variant="h5">NFL News</Typography>
      </Grid>
    </Container>
  )
}

export default Footer
