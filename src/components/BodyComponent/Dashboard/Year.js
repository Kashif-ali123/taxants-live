import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        marginLeft: "180px",
        minWidth: 100,
        marginTop: "30px"
        
      },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
    marginLeft: "100px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
 
}));

export default function Year() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
        <div>
             <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
        </Select>
        
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Let's Get Started
      </Button>
        </div>
    )
}
