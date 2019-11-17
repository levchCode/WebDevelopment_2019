import React from 'react';
import BarComponent from './BarComponent'
import { useParams } from 'react-router-dom';


export default function ProfileComponent() {
  
    let params: any = useParams();

    //Типо запрос к бекэнду

    // let user_data = {"username": "leVch", "sum_views":11020, "sum_likes": 130, "videos":[
    //   {"id":1, "title":"Тест", "username": "leVch", "views":1000, "likes":10, "thumbnail":"https://i.imgur.com/v2zH5xk.jpeg"},
    //   {"id":2, "title":"Тест2", "username": "leVch2", "views":10020, "likes":120, "thumbnail":"https://i.imgur.com/81qyN1y.jpg"}
    // ]};

    return (
      <BarComponent title={"Профиль: " + params.user} />
      // Отобразить суммарно лайки, просмотры и список видео пользователя
    );
}