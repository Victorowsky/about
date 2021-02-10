import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Loading from './Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      color:'white',
      backgroundColor:'white',
      boxShadow: '0 0 10px black',
      borderRadius: '5px',
    },
  '& .MuiFormControl-root':{
    width:'100%'
  },
  },

}));

export default function MultilineTextFields({textValue, setTextValue, isLoading}) {
  const classes = useStyles();
  return (
    <form className={classes.root} style={{width:'100%'}} noValidate autoComplete="off">
        <TextField
          floatingLabelFocusStyle={classes.floatingLabelFocusStyle}
          id="filled-multiline-static"
          label="Message"
          multiline={true}
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={textValue}
          onChange={(e)=>{setTextValue(e.target.value)}}
        />
        <div style={{position:'relative', top:'-4px'}}>
        {isLoading && <Loading /> }
        </div>      
    </form>
  );
}
