import React, { Component } from 'react';


export default class ProfileComponent extends Component {
  
  render() {
    return (
      <div id="home">
        This is the profile page.
      </div>
    );
  }
}


// class PopularComponent extends React.Component {
//     videos: any;

//     constructor(props:any){
//         super(props);
//         this.videos = [
//             {"id":1, "title":"Тест", "username": "leVch", "views":1000, "likes":10, "thumbnail":"image_URL"},
//             {"id":2, "title":"Тест2", "username": "leVch2", "views":10020, "likes":120, "thumbnail":"image_URL"}
//         ];
//     }

    

//     render() {
//         return (
//         <Paper className="popular">
//             <Grid container className="rot" spacing={2}>
//                 <Grid item xs={12}></Grid>
                    
//                     {this.videos.map((vid: any) => (
//                     <Grid key={vid.id} item>
//                     <VideoComponent {...vid}/> 
//                     </Grid>
//                     ))}

//              </Grid>
//         </Paper>
//         );
//     }
// }

// export default PopularComponent;