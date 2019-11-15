import { makeStyles, createStyles, Theme} from "@material-ui/core";
import React from "react";

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

export default function Replay(props: any) {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
          {/* Полотно видео, кнопки "Воспроизвести", "Пауза" */}
      </div>
    );
  }