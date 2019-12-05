import { createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import VideoFrame from './sketches/VideoFrame';
import vid from './data.json';

const styles = (theme:Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    }
})

class ReplayComponent extends React.Component<any,any> {

    recording:any;

    constructor(props:any){
      super(props);
      this.recording = this.props;
    } 

    render()
    {
      this.recording = vid;
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <P5Wrapper sketch={VideoFrame} anim={this.recording.animation}></P5Wrapper>
        </div>
      );
    }
    
  }

export default withStyles(styles)(ReplayComponent);