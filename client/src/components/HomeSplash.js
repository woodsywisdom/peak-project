import React from 'react';
import { Grid, Container, Typography, Divider, Table, TableContainer, TableBody, Paper, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles({
  climbingResources: {
    background: 'lightyellow',
  },
  twentyClassics: {
    background: 'lightgreen',
  },
  featuredRoute: {
    background: 'lightblue',
  },
  leadingNews: {
    background: 'lightpink',
  },
  headerText: {
    fontSize: '22px',
    fontWeight: '500',
    borderBottom: '7px solid rgb(51, 103, 153)'
  },
  splashContainer: {
    marginTop: '30px',
  },
  tinyTitle: {
    fontSize: '16px',
    fontWeight: '600px',
  }
})

const tableBuilder = (row, idx) => {
  return (
    <TableRow hover key={idx} >
      <TableCell >{idx + 1}.</TableCell>
      <TableCell >{row.name}</TableCell>
      <TableCell >{row.state}{' > '}{row.region}</TableCell>
      <TableCell >
        <Rating readOnly value={row.rating} size='small'/>
      </TableCell>
      <TableCell >{row.grade}</TableCell>
    </TableRow>
  )
}

const HomeSplash = () => {

  const classes = useStyles();

  const twentyBest = [{
    name: 'Exum Ridge',
    state: 'Wyoming',
    region: 'Grand Teton NP',
    rating: 5,
    grade: '5.5',
  }, {
    name: 'High Exposure',
    state: 'New York',
    region: 'Gunks',
    rating: 5,
    grade: '5.6',
  }, {
    name: 'East Ridge',
    state: 'Wyoming',
    region: 'Wind River Range',
    rating: 5,
    grade: '5.6',
  }, {
    name: 'Epinephrine',
    state: 'Nevada',
    region: 'Red Rocks',
    rating: 5,
    grade: '5.9',
  }, {
    name: 'Stolen Chimney',
    state: 'Utah',
    region: 'Fisher Towers',
    rating: 5,
    grade: '5.10',
  },
  ]

  return (
    <>
      <Grid container spacing={2}
        className={classes.splashContainer}
      >
        <Grid item sm={8}
        >
          <Container
            className={classes.climbingResources}
          >
            <Typography variant='h2' className={classes.headerText} >The Definitive Climbing Resource</Typography>
            <Grid container >
              <Grid item xs={4}>
                <Typography >Your Favorite Areas</Typography>
                <Typography variant='body2' >None.  Pick some favorite areas and we'll keep you up-to-date!</Typography>
              </Grid>
              <Grid item xs={8} >
                <Typography >New in All Locations</Typography>

              </Grid>
            </Grid>
          </Container>
          <Container
            className={classes.twentyClassics}
          >
            <Typography variant='h2' className={classes.headerText} >Top 20 Classic Climbs</Typography>
            <TableContainer component={Paper}>
              <Table size='small' padding='none'>
                <TableBody>
                  {twentyBest.map(tableBuilder)}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Grid>
        <Divider orientation='vertical' flexItem />
        <Grid item xs={4} >

        </Grid>
      </Grid>
    </>
  );
}

export default HomeSplash;
