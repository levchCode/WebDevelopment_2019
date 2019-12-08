import React from 'react';
import Paper from '@material-ui/core/Paper';
import VideoComponent from './VideoComponent';
import { Grid, Theme, createStyles, withStyles } from '@material-ui/core';

const styles = (theme:Theme) => createStyles({
    paper: {
      padding: theme.spacing(2, 2),
      marginLeft: 15,
      marginRight: 15,
    },
    root: {
        flexGrow: 1,
    },
});

class VideoSetComponent extends React.Component<any,any> {
  
  state: any;

  constructor(props: any)
  {
    super(props);
    this.state = {videos:[]};
  }

  componentWillReceiveProps(ps:any) {
    this.setState({videos:ps.vids});
  }

  render()
  {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
          <Grid container className={classes.root} spacing={2}>
              {this.state.videos.map((vid: any) => (
                  <Grid key={vid.id} item>
                      <VideoComponent {...vid}/> 
                  </Grid>
              ))}
          </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(VideoSetComponent);