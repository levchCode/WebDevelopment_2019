import { createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";
import BarComponent from "./BarComponent"
import ReplayComponent from "./ReplayComponent"
import DescriptionComponent from "./DescriptionComponent"
import video from './data.json';

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

    //let params: any = useParams();
    vid: any;
    state: any;
  
    constructor(props:any){
      super(props);
      this.vid = this.props;
      //Временно
      this.vid = video;
    } 

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <BarComponent title={this.vid.title}/>
          <ReplayComponent vid={this.vid.animation}/>
          <DescriptionComponent editable={false} vid_title={this.vid.title} vid_desc={this.vid.desc} />
        </div>
      );
    }
}

export default withStyles(styles)(PlayComponent);