import React, { useState, useEffect } from 'react';
import { Container, Paper, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';


const useStyles = makeStyles({
  twentyClassics: {
    background: 'lightgreen',
  },
  headerText: {
    fontSize: '22px',
    fontWeight: '500',
    borderBottom: '7px solid rgb(51, 103, 153)'
  },
});


const tableBuilder = (row, idx) => {
  const regionArray = row.location.split('>');
  const region = `${regionArray[0]} > ${regionArray[1]}`;
  return (
    <TableRow hover key={idx} >
      <TableCell >{idx + 1}.</TableCell>
      <TableCell >{row.name}</TableCell>
      <TableCell >{region}</TableCell>
      <TableCell >
        <Rating
          style={{ color: 'rgb(51, 103, 153)' }}
          readOnly
          value={row.rating}
          size='small'
          max={4}
        />
      </TableCell>
      <TableCell >{row.grade}</TableCell>
    </TableRow>
  );
}

const TwentyClassics = () => {
  const [twentyClassics, setTwentyClassics] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const loadTwenty = async () => {
      const csrfToken = Cookies.get("XSRF-TOKEN");
      const res = await fetch('/api/routes/twenty-classics', {
        method: "get",
        header: {
          "XSRF-TOKEN": csrfToken,
        },
      });
      if (res.ok) {
        res.data = await res.json();
        setTwentyClassics(Object.values(res.data));
      }
    }
    loadTwenty();
  }, []);

  const twentyBest = [{
    name: 'Exum Ridge',
    state: 'Wyoming',
    region: 'Grand Teton NP',
    rating: 4,
    grade: '5.5',
  }, {
    name: 'High Exposure',
    state: 'New York',
    region: 'Gunks',
    rating: 4,
    grade: '5.6',
  }, {
    name: 'East Ridge',
    state: 'Wyoming',
    region: 'Wind River Range',
    rating: 4,
    grade: '5.6',
  }, {
    name: 'Epinephrine',
    state: 'Nevada',
    region: 'Red Rocks',
    rating: 4,
    grade: '5.9',
  }, {
    name: 'Stolen Chimney',
    state: 'Utah',
    region: 'Fisher Towers',
    rating: 4,
    grade: '5.10',
  },
  ];

  return (
    <>
      <Container
        className={classes.twentyClassics}
      >
        <Typography variant='h2' className={classes.headerText} >Top 20 Classic Climbs</Typography>
        <TableContainer component={Paper}>
          <Table size='small' padding='none'>
            <TableBody>
              {twentyClassics.map(tableBuilder)}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default TwentyClassics;
