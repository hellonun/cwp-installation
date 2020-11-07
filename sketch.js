let WIDTH = 650;
let HEIGHT = 450;
// let CAMERA_IP = "108.34.179.41";
let CAMERA_URL = "";
let imageStream = null;



let ips = ["104.229.28.155:8080","108.182.52.35:8000","141.126.186.114:84","202.39.75.186:80","71.87.215.100:8000","23.25.52.58","98.29.13.143:81","216.16.162.74:8080","24.38.140.93:82","12.119.11.106","108.173.7.155:8084","70.77.218.145:8000","194.251.16.163:80","118.210.44.172:80","118.210.44.172:80","118.163.187.90:8082","96.38.214.81:80","60.250.8.101:80"];

let urls = [];
let num = 0; 
    
let pminute;

function setup() {
  for (i=0; i<ips.length; i++) {
    url = "https://cors-anywhere.herokuapp.com/http://" + ips[i] + "/mjpg/video.mjpg";
    urls.push(url);
  }
 
  // CAMERA_URL = "https://cors-anywhere.herokuapp.com/http://" + CAMERA_IP + "/mjpg/video.mjpg";
  createCanvas(WIDTH, HEIGHT);
  imageStream = createImg(urls[num]);
  imageStream.elt.crossOrigin = "Anonymous";
  imageStream.hide();

}

function imgLoaded() {
  console.log(imageStream);
}

function draw() {
  background(220);
  image(imageStream, 0, 0, 650, 450);
}

function mousePressed() {
  num++;
  imageStream = createImg(urls[num]);
  imageStream.elt.crossOrigin = "Anonymous";
  imageStream.hide();
}