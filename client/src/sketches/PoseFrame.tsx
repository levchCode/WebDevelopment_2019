import * as ml5 from "ml5";

export default function sketch(p:any){
    let start_button:any, stop_button: any;
    let stopper: boolean = true;
    let poseNet: any;
    let poses: any;
    let video: any;
    let ready: boolean;
    let recording: any = [];
    let w = 320;
    let h = 240;
    let timeout: any;

    p.setup = () => {
      p.frameRate(30);
      p.createCanvas(w, h);
      video = p.createCapture(p.VIDEO);
      video.size(w, h);
      video.hide();

      poseNet = ml5.poseNet(video, ()=>{ 
          console.log('Model Loaded'); 
          ready=true;
      });

      poseNet.on('pose', function (results:any) {
        poses = results;
      });
      
      start_button = p.createButton("Записать")
      stop_button = p.createButton("Стоп")
      start_button.mousePressed(start_recording)
      stop_button.mousePressed(stop_recording)
      stop_button.attribute('disabled', '');
    }

    let start_recording = () => {
       stopper = false;
       start_button.attribute('disabled', '');
       stop_button.removeAttribute('disabled')
       timeout = setTimeout(stop_recording, 6000);
    }

    let stop_recording = () => {
        stopper = true;
        stop_button.attribute('disabled', '');
        start_button.removeAttribute('disabled')
        console.log(recording)
        clearInterval(timeout);
        localStorage.setItem('anim', JSON.stringify(recording));
    }


    p.draw = () => {
        p.background(128);
        p.image(video, 0, 0, w, h);

        if (ready && poses !== undefined){

            if (!stopper){
                recording.push(poses[0].pose.keypoints)
            }

            // Пройтись по всем обнаруженным позам
            for (let i = 0; i < poses.length; i++) {
                // Для каждой позы, пройтись по точкам
                for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
                    let keypoint = poses[i].pose.keypoints[j];
                    if (keypoint.score > 0.2) {
                        p.fill(255, 0, 0);
                        p.noStroke();
                        p.ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
                    }
                }
            }
        }
    }
}