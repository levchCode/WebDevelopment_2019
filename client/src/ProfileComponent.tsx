import React from 'react';
import BarComponent from './BarComponent'
import { Theme, createStyles, withStyles } from '@material-ui/core';

const styles = (theme:Theme) => createStyles({
  //Сюда задавать классы и прописывать стили (например, см. VideoComponent)
});

class ProfileComponent extends React.Component<any,any> {

  params: any;
  state: any;

  constructor(props:any){
    super(props);
    this.state = { data: [] };
  } 

  componentDidMount() {
    //Разобраться как получить user_id
    let user_id = "123";
    //Типо запрос прошел
    let u_data = {"username": "leVch", "sum_views":11020, "sum_likes": 130, "videos":[
      {"id":1, "title":"Тест", "username": "leVch", "views":1000, "likes":10, "thumbnail":"https://i.imgur.com/v2zH5xk.jpeg"},
      {"id":2, "title":"Тест2", "username": "leVch2", "views":10020, "likes":120, "thumbnail":"https://i.imgur.com/81qyN1y.jpg"}
    ]};

    this.setState({data: u_data});
  }
  
  render()
  {
    //const { classes } = this.props;
    return (
      <BarComponent title={"Профиль: " + this.state.data.username} />
      // Отобразить суммарно лайки, просмотры и список видео пользователя
    );
  }
}

export default withStyles(styles)(ProfileComponent);