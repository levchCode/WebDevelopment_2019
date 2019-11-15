import { makeStyles, createStyles, Theme, Button } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import DescriptionComponent from "./DescriptionComponent"
import PoseComponent from "./PoseComponent"

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
        <BarComponent title="Записать анимацию"/>
        <PoseComponent/>
        <DescriptionComponent editable={true} />
        <Button variant="contained" color="primary" className={classes.button}>
        Опубликовать
        </Button>
      </div>
    );
  }