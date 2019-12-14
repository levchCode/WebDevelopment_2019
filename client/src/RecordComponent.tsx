import { createStyles, Theme, Button, withStyles } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import DescriptionComponent from "./DescriptionComponent"
import PoseComponent from "./PoseComponent"
import ReplayComponent from "./ReplayComponent"

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
    el: {
      float:"left"
    },
})


class RecordComponent extends React.Component<any,any> {

  constructor(props:any){
    super(props);
    localStorage.removeItem("anim");
  } 

  upload()
  {
    
    let vid = JSON.parse(localStorage.getItem("anim")||"{}");

    //Как-то получить заголовок, описание  из DescriptionComponent 
    let video = {
      title: "Видео9",
      desc: "Описание",
      user_id: "5ddad08b1c9d4400003a67b6",
      thumbnail: "https://i.imgur.com/zoZUV38.png",
      anim: vid
     }

    fetch('/api/upload', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      window.location.href = "/watch/" + data.video_id
    })
    .catch((error) => {
      console.log('Request failed', error);
    });

  }

  render()
  {
    const { classes } = this.props;
    
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
        <Button variant="contained" color="primary" className={classes.button} onClick={this.upload}>
        Опубликовать
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(RecordComponent);