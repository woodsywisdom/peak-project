import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Typography, FormControl, FormLabel, InputLabel, Input, Box, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, Select, TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { getArea } from '../../store/area';

const NewRoutePage = (props) => {
  const dispatch = useDispatch();

  const currentAreaId = props.match.params.id;
  useEffect(() => {
    dispatch(getArea(currentAreaId));
  }, []);
  const currentArea = useSelector(state => state.area);

  const currentUser = useSelector(state => state.auth);

  const [name, setName] = useState('');
  const [firstAscent, setFirstAscent] = useState('');
  const [length, setLength] = useState(0);
  const [pitches, setPitches] = useState(0);
  const [type, setType] = useState('');
  const [isTopRope, setIsTopRope] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [grade, setGrade] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [approach, setApproach] = useState('');

  const changeName = (e) => setName(e.currentTarget.value);
  const changeFirstAscent = (e) => setFirstAscent(e.currentTarget.value);
  const changeLength = (e) => setLength(e.currentTarget.value);
  const changePitches = (e) => setPitches(e.currentTarget.value);
  const changeType = (e) => setType(e.currentTarget.value);
  const changeIsTopRope = (e) => setIsTopRope(!isTopRope);
  const changeIsNew = (e) => setIsNew(!isNew);
  const changeGrade = (e) => setGrade(e.currentTarget.value);
  const changeRating = (e) => setRating(e.currentTarget.value);
  const changeDescription = (e) => setDescription(e.currentTarget.value);
  const changeApproach = (e) => setApproach(e.currentTarget.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const newLocation = currentArea.location + ">" + currentArea.name;
    const locationIds = currentArea.locationIds + ',' + currentArea.id.toString();

    const newRoute = {
      name,
      areaId: currentAreaId,
      location: newLocation,
      locationIds,
      grade,
      rating,
      type,
      length,
      pitches,
      creatorId: currentUser.id,
      firstAscent,
      isTopRope,
      approach,
      description,
    }
    try {
      const res = await fetch('/api/routes/', {
        method: "post",
        headers: {
          "XSRF-TOKEN": csrfToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoute),
      });
      if (res.ok) {
        res.data = await res.json();
        window.location = `/routes/${res.data.id}`;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const grades = ['3rd', '4th', 'Easy 5th',
    '5.0', '5.1', '5.2', '5.3', '5.4', '5.5',
    '5.6', '5.7+', '5.8-', '5.8', '5.8+', '5.9-', '5.9', '5.9+',
    '5.10a', '5.10b', '5.10c', '5.10d', '5.10+',
    '5.11a', '5.11b', '5.11c', '5.11d', '5.11+',
    '5.12a', '5.12b', '5.12c', '5.12d', '5.12+',
    '5.13a', '5.13b', '5.13c', '5.13d', '5.13+',
    '5.14a', '5.14b', '5.14c', '5.14d', '5.14+',
    '5.15a', '5.15b', '5.15c', '5.15d', '5.15+'];

  return (
    <Box >
      <Typography variant='h3' >New Route</Typography>
      <form>
        <FormGroup
          column
        >
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
          <FormControl>
            <FormControlLabel
              control={<Checkbox checked={isNew} onChange={changeIsNew} name='is-new' color='primary' />}
              label='This is a new first ascent!'
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='grade' >Grade</InputLabel>
            <Select
              id='grade'
              value={grade}
              onChange={changeGrade}
            >
              {grades.map(grade => <option value={grade}>{grade}</option>)}
            </Select>
          </FormControl>
          <FormControl>
            <Typography>Your Star Rating</Typography>
            <Rating max={4} value={rating} onChange={changeRating} />
          </FormControl>
          <FormControl>
            <Typography>Description</Typography>
            <TextField
              placeholder="Where's the crux? What's good / bad? Details, opinions, and deep thoughts."
              multiline
              variant='outlined'
              rows={6}
              value={description}
              onChange={changeDescription}
            />
          </FormControl>
          <FormControl>
            <Typography>Approach</Typography>
            <TextField
              placeholder="How do you find the start? Obvious landmarks? AVOID relative directions such as 'Left of (route next to it)'! Optional but can be critical!"
              multiline
              variant='outlined'
              rows={6}
              value={approach}
              onChange={changeApproach}
            />
          </FormControl>
        </FormGroup>
        <Button
          onClick={handleSubmit}
          color='primary'
        >
          Save Route
        </Button>
      </form>
    </Box>
  );
}

export default NewRoutePage;
