import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = (theme:Theme) => createStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class VideoComponent extends React.Component<any,any> {

  vid: any;
  
  constructor(props:any){
    super(props);
    this.vid = this.props;
  } 

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} onClick={()=>{window.location.href = "/watch/"+ this.vid._id}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.vid.thumbnail}
            title="Видео"
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {this.vid.title}
              </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           {this.vid.username}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {this.vid.views} просмотров
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {this.vid.likes} лайков
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>
  );
  }
}

export default withStyles(styles)(VideoComponent);