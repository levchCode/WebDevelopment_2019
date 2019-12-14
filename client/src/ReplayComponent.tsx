import { createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import VideoFrame from './sketches/VideoFrame';
import sample from './data.json';

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

    state:any;

    constructor(props:any){
      super(props);
      this.state = {vid: []};
    } 

    componentWillReceiveProps(ps:any) {
      this.setState({vid: ps.vid});
    }

    render()
    {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <P5Wrapper sketch={VideoFrame} anim={this.state.vid}></P5Wrapper>
        </div>
      );
    }
    
  }

export default withStyles(styles)(ReplayComponent);