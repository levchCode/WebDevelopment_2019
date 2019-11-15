import { makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import ReplayComponent from "./ReplayComponent"
import DescriptionComponent from "./DescriptionComponent"

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
    
    return (
      <div className={classes.root}>
        <BarComponent title="Видео"/>
        <ReplayComponent/>
        <DescriptionComponent editable={false} />
      </div>
    );
  }