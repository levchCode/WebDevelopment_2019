import { makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import PoseFrame from './sketches/PoseFrame';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
);

export default function Record(props: any) {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
       <P5Wrapper sketch={PoseFrame}></P5Wrapper>
      </div>
    );
  }