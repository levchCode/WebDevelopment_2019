import { createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import ReplayComponent from "./ReplayComponent"
import DescriptionComponent from "./DescriptionComponent"
import video_ex from './data.json';

const styles = (theme:Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
});

class PlayComponent extends React.Component<any,any> {

    vid: any;
    state: any;
  
    constructor(props:any){
      super(props);
      this.state = {video: video_ex}
    } 

    componentDidMount()
    {
      fetch("/api/viewlike",
      {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({action: "view", video_id: this.props.match.params.id})
      }).then(() => {

      fetch("/api/watch",
      {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({video_id: this.props.match.params.id})
      })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({video: data[0]});
        console.log(data[0])
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
    });
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <BarComponent title={this.state.video.title}/>
          <ReplayComponent vid={this.state.video.anim}/>
          <p>{this.state.video.views} просмотров</p>
          <p>{this.state.video.likes} лайков</p>
          <DescriptionComponent editable={false} vid_title={this.state.video.title} vid_desc={this.state.video.desc} />
        </div>
      );
    }
}

export default withStyles(styles)(PlayComponent);