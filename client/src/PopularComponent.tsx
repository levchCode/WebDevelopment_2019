import React from 'react';
import Paper from '@material-ui/core/Paper';
import VideoComponent from './VideoComponent';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2, 2),
      marginLeft: 15,
      marginRight: 15,
    },
    root: {
        flexGrow: 1,
    },
  }),
);

export default function PaperSheet() {
  const classes = useStyles();

  let videos = [
      {"id":1, "title":"Тест", "username": "leVch", "views":1000, "likes":10, "thumbnail":"https://i.imgur.com/v2zH5xk.jpeg"},
      {"id":2, "title":"Тест2", "username": "leVch2", "views":10020, "likes":120, "thumbnail":"https://i.imgur.com/81qyN1y.jpg"}
    ];

  return (
    <Paper className={classes.paper}>
        <Grid container className={classes.root} spacing={2}>
            {videos.map((vid: any) => (
                <Grid key={vid.id} item>
                     <VideoComponent {...vid}/> 
                </Grid>
            ))}
        </Grid>
    </Paper>
  );
}