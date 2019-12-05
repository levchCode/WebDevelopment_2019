export default function sketch(p:any){
    let anim: any;
    let manage_button: any;
    let stopper: boolean;
    let w = 320;
    let h = 240;
    let i = 0;

    p.setup = () => {
      p.createCanvas(w, h);
      p.noStroke();
      p.frameRate(30);

      manage_button = p.createButton("&#9658;")
      manage_button.mousePressed(manage_video)
    }

    let manage_video = () => {
        stopper = !stopper;

        if (localStorage.getItem("anim") !== null) {
            anim = JSON.parse(localStorage.getItem("anim") || "[]");
        }

        if (!stopper)
        {
            manage_button.html("&#9658;");
        }
        else
        {
            manage_button.html("&#10074 &#10074");
        }
        
    }

    p.draw = () => {

        if (i === anim.length-1) {
            i = 0;
        }

        p.background(128);

        for (let j = 0; j < anim[i].length; j++) {
            if (anim[i][j].score > 0.2) {
                p.fill(255, 255, 255);
                p.noStroke();
                p.ellipse(anim[i][j].position.x, anim[i][j].position.y, 10, 10);
            }
        }
        
        if (stopper){ i++; }
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function(newProps:any){
        if (newProps.anim)
        {
            anim = newProps.anim;
        }
    }

}