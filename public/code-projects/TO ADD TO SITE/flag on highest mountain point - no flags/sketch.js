var terrain = [];

function setup() {
    createCanvas(640, 240);
}

function draw() {
	background(160,190,255);
	calculateAndRenderTerrain();
}


// This obfuscated function generates the terrain:
function calculateAndRenderTerrain() {
  eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};
  if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}
  k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)
  {if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}
  ('c(6);b(4,6,4);9(a 3=0;3<d;3++){8[3]=e(h((3/7.0)+(g()/(7*4))),0,1,5*0.2,5);\
  f(3,8[3],3,5)}',18,18,'|||x|10|height|90|120|terrain|for|var|stroke|\
  noiseSeed|width|map|line|millis|noise'.split('|'),0,{}))
}
