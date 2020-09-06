import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useSelector } from 'react-redux';

const RouteStats = () => {
  const currentRoute = useSelector(state => state.routes);

  return (

    <Table size="small" padding="none" >
      <TableBody dense>
        <TableRow >
          <TableCell >Type:</TableCell>
          <TableCell >{currentRoute.type}, {currentRoute.length | '?'} ft, {currentRoute.pitches | '?'} pitches</TableCell>
        </TableRow>
        <TableRow>
          <TableCell >FA:</TableCell>
          <TableCell >Unknown</TableCell>
        </TableRow>
        <TableRow >
          <TableCell>Page Views:</TableCell>
          <TableCell>A lot, probably</TableCell>
        </TableRow>
        <TableRow >
          <TableCell >Shared By:</TableCell>
          <TableCell >{currentRoute.User.username}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

  );
}

export default RouteStats;
