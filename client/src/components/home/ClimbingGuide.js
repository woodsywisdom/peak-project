import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Box, Typography, ListItem, ListItemText, List } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  headerText: {
    fontSize: '22px',
    fontWeight: '500',
    borderBottom: '7px solid rgb(51, 103, 153)'
  },
  stateLi: {
    width: '300px',
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  areaLi: {
    width: '100%',
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  linkContainer: {
    height: '300px',
    flexFlow: 'column-wrap',
  }
})

const ClimbingGuide = () => {
  const classes = useStyles();

  const [states, setStates] = useState(null);

  useEffect(() => {
    const loadStates = async () => {
      const csrfToken = Cookies.get("XSRF-TOKEN");
      const res = await fetch('/api/states/all', {
        method: "get",
        headers: {
          "XSRF-TOKEN": csrfToken,
        },
      });
      if (res.ok) {
        res.data = await res.json();
        setStates(res.data.states);
      }
    }
    loadStates();
  }, []);
  if (!states) {
    return (
      <>
        <Typography variant='h2' className={classes.headerText} >Rock Climbing Guide</Typography>
        <Typography >Loading...</Typography>
      </>
    )
  }
  return (
    <Box >
      <Typography variant='h2' className={classes.headerText} >Rock Climbing Guide</Typography>
      <Box
        display='flex'
        flexDirection='column'
        flexWrap='wrap'
        classes={{
          root: classes.linkContainer
        }}
      >
        <List
        >
          <Box
            display='flex'
            flexDirection='column'
            flexWrap='wrap'
          >
            {states.map((state) => {
              return (
                <ListItem key={state.id}
                  classes={{
                    root: classes.stateLi,
                  }}
                >
                  <ListItemText>
                    <Link to={`/states/${state.id}`} >{state.name}</Link>
                    <List >
                      {state.Areas.map(area => {
                        return (
                          <ListItem key={area.id}
                            classes={{
                              root: classes.areaLi,
                            }}
                          >
                            <ListItemText><Link to={`/areas/${area.id}`} >{area.name}</Link></ListItemText>
                          </ListItem>
                        )
                      })}
                    </List>
                  </ListItemText>
                </ListItem>
              );
            })}
          </Box>
        </List>
      </Box>
    </Box >
  );
}

export default ClimbingGuide;
