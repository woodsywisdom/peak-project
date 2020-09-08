import React, { useState, useEffect } from 'react';
import { Container, Paper, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';


const useStyles = makeStyles({
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

  return (
    <>
      <Container >
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
