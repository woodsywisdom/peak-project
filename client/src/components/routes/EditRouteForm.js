import React, { useState } from 'react';
import { DialogContent, Typography, FormGroup, FormControl, InputLabel, Input, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { removeRoute } from '../../store/routes';


const EditRouteForm = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.auth);
  const currentRoute = useSelector(state => state.routes);

  const [name, setName] = useState(currentRoute.name);
  const [firstAscent, setFirstAscent] = useState(currentRoute.firstAscent);
  const [length, setLength] = useState(currentRoute.length);
  const [pitches, setPitches] = useState(currentRoute.pitches);
  const [type, setType] = useState(currentRoute.type);
  const [isTopRope, setIsTopRope] = useState(currentRoute.isTopRope);


  const changeName = (e) => setName(e.currentTarget.value);
  const changeFirstAscent = (e) => setFirstAscent(e.currentTarget.value);
  const changeLength = (e) => setLength(e.currentTarget.value);
  const changePitches = (e) => setPitches(e.currentTarget.value);
  const changeType = (e) => setType(e.currentTarget.value);
  const changeIsTopRope = () => setIsTopRope(!isTopRope);

  const changeRoute = (e) => {
    e.preventDefault();
    // dispatch(editRoute());
  }

  const deleteRoute = (e) => {
    e.preventDefault();
    dispatch(removeRoute(currentRoute.id));
  }

  return (
    <DialogContent>
      <Typography variant='h3' >Make Changes to {currentRoute.name}</Typography>
      <Typography >{currentUser.username}, thanks for improving data for all climbers! Please focus on factual changes based on your experience with {currentRoute.name}.</Typography>
      <form>
        <FormGroup>
        <FormControl>
            <InputLabel htmlFor='route-name'>Route Name</InputLabel>
            <Input
              id='route-name'
              value={name}
              onChange={changeName}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='first-ascent' >First Ascent</InputLabel>
            <Input
              id='first-ascent'
              value={firstAscent}
              onChange={changeFirstAscent}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='length' >Length in Feet</InputLabel>
            <Input
              id='length'
              value={length}
              onChange={changeLength}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='pitches' >Pitches</InputLabel>
            <Input
              id='pitches'
              value={pitches}
              onChange={changePitches}
            />
          </FormControl>
          <FormControl >
            <FormLabel >Route Type</FormLabel>
            <RadioGroup onChange={changeType}>
              <FormControlLabel
                value="Sport"
                control={<Radio color='primary' />}
                label="Sport - most people lead with just quickdraws"
              />
              <FormControlLabel
                value="Trad"
                control={<Radio color='primary' />}
                label="Trad - most people use some trad gear. There may also be bolts."
              />
              <FormControlLabel
                value="Other"
                control={<Radio color='primary' />}
                label="Other - boulder problem, TR (but not trad or sport), snow route, etc"
              />
            </RadioGroup>

          </FormControl>
          <FormControl>
            <FormControlLabel
              control={<Checkbox checked={isTopRope} onChange={changeIsTopRope} name='top-rope' color='primary' />}
              label='Toprope - you can set up a TR without leading the route.'
            />
          </FormControl>
        </FormGroup>
      </form>
      <Button color='primary' onClick={changeRoute} >Edit Route</Button>
      { currentUser.id === currentRoute.creatorId ?
        <Button color='primary' onClick={deleteRoute} >Delete Route</Button>
        : null }
    </DialogContent>
  );
}

export default EditRouteForm;
