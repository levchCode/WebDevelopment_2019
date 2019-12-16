import React from 'react';
import BarComponent from './BarComponent'
import { Theme, createStyles, withStyles } from '@material-ui/core';
import VideoSetComponent from './VideoSetComponent';

const styles = (theme:Theme) => createStyles({
  //Сюда задавать классы и прописывать стили (например, см. VideoComponent)
});

class ProfileComponent extends React.Component<any,any> {

  params: any;
  state: any;

  constructor(props:any){
    super(props);
    this.state = { data: { total_views: 0, total_likes: 0, videos: [], username:{username:""}} };
  } 

  componentDidMount() {
    fetch("/api/profile",
      {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id: this.props.match.params.user_id})
      })
      .then((resp) => resp.json())
      .then((d) => {
        this.setState({data: d});
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  }
  
  render()
  {
    //const { classes } = this.props;
    return (
      <div>
        <BarComponent title={"Профиль: " + this.state.data.username.username} />
        <p>Всего просмотров: {this.state.data.total_views}</p>
        <p>Всего лайков: {this.state.data.total_likes}</p>
        <h1>Видео пользователя</h1>
        <VideoSetComponent vids={this.state.data.videos}/>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileComponent);