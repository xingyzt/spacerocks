var url = [ //directory of links
  '/',
  'about',
  'robot',
  'blog',
  'stuff',
  'https://twitter.com/SpaceRocksFTC/',
  'https://github.com/15303/ftc_app/',
  'https://majorstemacademy.org/',
  'https://www.collinsaerospace.com/',
  'https://xyzt.design/',
  'https://www.fontdiner.com/',
  'https://daltonmaag.com/',
  'https://mckltype.com/',
  'https://pages.github.com/'
  ];
//create stars, the navbar, and fade-in screens
var doc = document;
var script = doc.scripts[0];
function insertLast(el){ //inserts before script
  script.parentElement.insertBefore(el,script);
}
function setAttributes(el,attrs) {
  for(var key in attrs) {
    el.setAttribute(key,attrs[key]);
  }
}
if(doc.title!=='15303 Space Rocks'){ //excludes main page
  var navBar = doc.createElement('div');
  navBar.id='navbar';
  insertLast(navBar);
  var navLogo = doc.createElement('img');
  setAttributes(navLogo,{"id":"nav-logo","src":"logo.svg"});
  navBar.appendChild(navLogo);
  var navLink = doc.createElement('a');
  navLink.href = 'https://xyzt.design/spacerocks/'; // change when there's a custom domain
  navBar.appendChild(navLink);
  var navChunk = doc.createElement('div');
  navChunk.id = 'nav-chunk';
  navChunk.title ='back to home';
  navLink.appendChild(navChunk);
  var canvasL = doc.createElement('canvas');
  canvasL.id='canvas-left';
  canvasL.width='2000';
  canvasL.height='2000';
  insertLast(canvasL);
  var canvasR = doc.createElement('canvas');
  canvasR.width='2000';
  canvasR.height='2000';
  canvasR.id='canvas-right';
  insertLast(canvasR);
  document.getElementById('credits').innerHTML="Written by Ella &middot; Designed & programmed by <strike>StackOverflow</strike> <a class='link' href='javascript:open(9)'>Shawn</a><br>Fonts by <a class='link' href='javascript:open(10)'>Neapolitan</a>, <a class='link' href='javascript:open(11)'>Dalton Mag</a>, & <a class='link' href='javascript:open(12)'>MCKL</a> &middot; Hosted by <a class='link' href='javascript:open(13)'>Github Pages</a>";
}
var blank = doc.createElement('div'); //black fade-in screen
blank.id='blank';
blank.classList='clear';
insertLast(blank);
var blanca = doc.createElement('div'); //white fade-in screen
blanca.id='blanca';
blanca.classList='clear';
insertLast(blanca);
//stars
function bigBang(a,x,y,z){ //sprinkles white dots a.k.a 'stars' on the canvas
  a.beginPath();
  a.arc(x,y,z,0,2*Math.PI);
  a.fill();
}
canvasL = canvasL.getContext('2d');
canvasL.fillStyle = '#fff';
canvasR = canvasR.getContext('2d');
canvasR.fillStyle = '#fff';
for(var i=0;i<2000;i++){ //for every x value on the canvas
for(var j=0;j<2;j++){ //controls number of stars
  var y = Math.random()*screen.height*2;
  var z = Math.random()*screen.width*0.001;
  var r = Math.random();
  if(r>0.75){ //randomly picks between the left and right canvases
    if(i>1600){ //if it's getting close to the content
      r = Math.random();
      if(r<((1675-i)/100)){ //don't do it if it's on the content
        bigBang(canvasL,i,y,z); //otherwise, do it less
      } //same goes for the part below
    }else{
      bigBang(canvasL,i,y,z);
    }
  }else if(r<0.25){
    if(i<500){
      r = Math.random();
      if(r<((i-325)/100)){
        bigBang(canvasR,i,y,z);
      }
    }else{
      bigBang(canvasR,i,y,z);
    }
  }
}
}
//url
function to(index){ //black screen (internal pages)
  doc.getElementById('blank').classList='opaque';
  var d = new Date();
  d = d.getTime();
  var i = setInterval(
    function(){
      var v = new Date();
      v.getTime();
      if((v-d)>500){
        clearInterval(i);
        window.location=url[index];
      }
    },10);
}
function open(index){ //white screen (external pages)
  doc.getElementById('blanca').classList='opaque';
  doc.getElementById('blanca').style.backgroundColor='#fff'; //removes flashing at moment of pageload
  var d = new Date();
  d = d.getTime();
  var i = setInterval(
    function(){
      var v = new Date();
      v.getTime();
      if((v-d)>500){
        clearInterval(i);
        window.location=url[index];
      }
    },10);
}
function home(){ //goes to home page
  doc.getElementById('blank').classList='opaque';
  var d = new Date();
  d = d.getTime();
  var i = setInterval(
    function(){
      var v = new Date();
      v.getTime();
      if((v-d)>500){
        clearInterval(i);
        window.location='https://xyzt.design/spacerocks';
        // window.location=url[0]; (future)
      }
    },10);
}