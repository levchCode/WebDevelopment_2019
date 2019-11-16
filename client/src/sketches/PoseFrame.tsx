import * as ml5 from "ml5";
import "p5/lib/addons/p5.dom";

export default function sketch(p:any){
    let manage_button: any;
    //let stopper: boolean;
    let poseNet: any;
    let poses: any;
    let video: any;
    let ready: boolean;

    p.setup = () => {
      p.frameRate(30);
      p.createCanvas(640, 480);
      video = p.createCapture(p.VIDEO);
      video.size(640, 480);
      video.hide();

      poseNet = ml5.poseNet(video, ()=>{console.log('Model Loaded'); ready=true;});

      poseNet.on('pose', function (results:any) {
        poses = results;
      });
      
      manage_button = p.createButton("Записать")
      manage_button.mousePressed(manage_recording)
    }

    let manage_recording = () => {
       
    }

    p.draw = () => {
        p.background(128);
        p.image(video, 0, 0, 640, 480);

        if (ready && poses !== undefined)
        {
            // Loop through all the poses detected
            for (let i = 0; i < poses.length; i++) {
                // For each pose detected, loop through all the keypoints
                for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
                    // A keypoint is an object describing a body part (like rightArm or leftShoulder)
                    let keypoint = poses[i].pose.keypoints[j];
                    // Only draw an ellipse is the pose probability is bigger than 0.2
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