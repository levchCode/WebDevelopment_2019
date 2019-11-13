import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(vid:any) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/81qyN1y.jpg"
          title="Видео"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {vid.title}
            </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {vid.username}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {vid.views} просмотров
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {vid.likes} лайков
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>
  );
}


// class VideoComponent extends React.Component {
//     vid: any;

//     constructor(props:any){
//         super(props);
//         this.vid = this.props;
//     } 

//     render() {

//         return (
//             <Card className="card">
//             <CardActionArea>
//                 <CardMedia
//                     className="video"
//                     image={this.vid.thumbnail}
//                     title="Video"
//                 />
//             <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//            {this.vid.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {this.vid.username}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {this.vid.views} просмотров
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {this.vid.likes} лайков
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//         );
//     }
// }

// export default VideoComponent;