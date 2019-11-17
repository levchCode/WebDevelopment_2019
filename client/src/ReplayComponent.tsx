import { makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import VideoFrame from './sketches/VideoFrame';
import vid from './data.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    }
  }),
);

export default function Replay(props: any) {
    const classes = useStyles();
    let recording = vid;

    return (
      <div className={classes.root}>
          <P5Wrapper sketch={VideoFrame} anim={recording.animation}></P5Wrapper>
      </div>
    );
    
  }