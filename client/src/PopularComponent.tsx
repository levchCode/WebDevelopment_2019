import React from 'react';
import Paper from '@material-ui/core/Paper';
import VideoComponent from './VideoComponent';
import { Grid, Theme, createStyles, withStyles } from '@material-ui/core';

const styles = (theme:Theme) => createStyles({
    paper: {
      padding: theme.spacing(2, 2),
      marginLeft: 15,
      marginRight: 15,
    },
    root: {
        flexGrow: 1,
    },
});

class PopularComponent extends React.Component<any,any> {
  
  state: any;

  constructor(props:any){
    super(props);
    this.state = { data: [] };
  } 

  componentDidMount() {
    //Типо получили данные
    let videos = [
      {"id":1, "title":"Тест", "username": "leVch", "views":1000, "likes":10, "thumbnail":"https://i.imgur.com/v2zH5xk.jpeg"},
      {"id":2, "title":"Тест2", "username": "leVch2", "views":10020, "likes":120, "thumbnail":"https://i.imgur.com/81qyN1y.jpg"}
    ];

    this.setState({data: videos});
  }

  render()
  {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
          <Grid container className={classes.root} spacing={2}>
              {this.state.data.map((vid: any) => (
                  <Grid key={vid.id} item>
                      <VideoComponent {...vid}/> 
                  </Grid>
              ))}
          </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(PopularComponent);