import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      color:'white',
      backgroundColor:'white',
      boxShadow: '0 0 10px black',
      borderRadius: '5px',
    },
  //   '& .MuiInputBase-input': {
  //     color: 'white',
  //     height:'fit-content'
  // },
  '& .MuiFormControl-root':{
    width:'100%'
  },
  },

}));

export default function MultilineTextFields({textValue, setTextValue}) {
  const classes = useStyles();
  return (
    <form className={classes.root} style={{width:'100%', marginRight:'14px'}} noValidate autoComplete="off">
      <div>
        <TextField
          floatingLabelFocusStyle={classes.floatingLabelFocusStyle}
          id="filled-multiline-static"
          label="Message"
          multiline={true}
          fullWidth={true}
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={textValue}
          onChange={(e)=>{setTextValue(e.target.value)}}
        />
      </div>
      
    </form>
  );
}
