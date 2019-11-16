import { makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import ReplayComponent from "./ReplayComponent"
import DescriptionComponent from "./DescriptionComponent"
import vid from './data.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Record(props: any) {
    const classes = useStyles();

    let video = vid;
    
    return (
      <div className={classes.root}>
        <BarComponent title={video.title}/>
        <ReplayComponent vid={video.animation}/>
        <DescriptionComponent editable={false} vid_title={video.title} vid_desc={video.desc} />
      </div>
    );
  }