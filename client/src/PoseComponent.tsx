import { createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import PoseFrame from './sketches/PoseFrame';

const styles = (theme:Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  })

class PoseComponent extends React.Component<any,any> {
  
    render()
    {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
        <P5Wrapper sketch={PoseFrame}></P5Wrapper>
        </div>
      );
    }
}

export default withStyles(styles)(PoseComponent);