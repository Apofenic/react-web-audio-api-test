import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import './App.css';

const styles = theme => ({
  root: {
    justifyContent: 'Center',
    alignItems:'Center',
  },
  item: {
    justifyContent: 'Center',
    alignItems:'Center',
  },
  paper: {},
  button: {
    color: 'white',
  },
  dropzone: {
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  audio:{
    width: '80%'
  }
  
});

class App extends Component {
  state = {
    spacing: '16',
    files: null,
    preview: null,
  };

  onDrop = (files) => {
    const file = files[0]
    console.log(this.state)
    console.log({file})
    this.setState({
      file,
      preview: URL.createObjectURL(file) 
    });
  }

  render() {
    const { classes } = this.props;
    const { preview } = this.state;

    return (
      <CssBaseline>
        <Grid container className={classes.root}>
          <Grid item className={classes.item} xs={12}>
            <Dropzone className={classes.dropzone} onDrop={this.onDrop}>
              <Paper className={classes.paper}>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                  <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="Open drawer">
                      <MenuIcon />
                    </IconButton>
                    {preview && 
                      <audio className={classes.audio} controls="controls">
                        <source src={preview}/>
                      </audio>
                    }
                    <div>
                      <Button className={classes.button}>
                      Upload
                      </Button>
                    </div>
                  </Toolbar>
                </AppBar>
              </Paper>
            </Dropzone>
          </Grid>
        </Grid>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(App);
