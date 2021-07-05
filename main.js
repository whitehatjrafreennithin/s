function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
video.hide();
classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nJ27gMfPF/model.json", modelloaded);
}
function modelloaded(){
    console.log("Model Loaded")
}
function draw(){
image(video, 0, 0, 300, 300);
classify.classify(video, gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error);
    
    }
    if(results){
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}