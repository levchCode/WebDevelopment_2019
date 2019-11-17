import { makeStyles, createStyles, Theme, Button } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import DescriptionComponent from "./DescriptionComponent"
import PoseComponent from "./PoseComponent"
import ReplayComponent from "./ReplayComponent"

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
    el: {
      float:"left"
    },
  }),
);

let upload = () =>{
  //let data = localStorage.getItem("anim");
}

export default function Record(props: any) {
    const classes = useStyles();
    localStorage.removeItem("anim")
    return (
      <div className={classes.root}>
        <BarComponent title="Записать анимацию"/>

        <div className={classes.el}>
          <PoseComponent />
        </div>
        <div className={classes.el}>
          <ReplayComponent fromlocal={true}/>
        </div>

        <DescriptionComponent editable={true} />
        <Button variant="contained" color="primary" className={classes.button} onClick={upload}>
        Опубликовать
        </Button>
      </div>
    );
  }