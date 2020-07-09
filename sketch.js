function setup() {
  createCanvas(800, 600);
  
  //noLoop()
  background('yellow')
  sign=1
  ang=0
  A=100
  minTerms=1;maxTerms=10;defaultValue=2;step=1
  slider = createSlider(minTerms,maxTerms,defaultValue,step);
  slider.position(150, 400);
  slider.style('width', '80px');
  slider.changed(myRefresh)
}// end of built-in setup() function

function myRefresh(){

  background('yellow')
  ang=0
  //draw()
  //works with draw also but at other places calling draw() causes stack overflow
}




function fact(n) {
  if (n==0) {return 1}else{return n*fact(n-1)} 
}// end of my fact() function

function mySin(x,terms){
  k=-1
  sum=0
  for(i=1;i<(2*terms);i=i+2){
    k=k+1
    sign=((-1)**(k))
    num=x**i
    den=fact(i)
    sum=sum+((sign)*(num/den))
    }// end of for loop
  return sum
}// end of mySin() function

function draw() {
  //background(220);
  
  textSize(18)
 
  translate(width/2,height/2)
  let nTerms = slider.value();
  text("           Tayor Series ",-350,180)
  text("sin(x)=x-(x^3)/3!+(x^5)/5!-(x^7)/7!+...",-360,230)
  
  
  text("No. of terms in Taylor Series  =  "+nTerms,-350,140)
  //circle(0,0,5)
  offset=-10
  line(-width/2,-offset,width/2,-offset)
  ang=ang+(PI/180)
  x=-width/2+ang*100
  //nTerms=5
  y=offset+A*mySin(ang,nTerms)
  y1=offset+A*sin(ang)
  //fill('black')
  circle(x,-y,20)
  push()
  stroke('red')
  circle(x,-y1,10)
  pop()
  //text(ang,100,-100)
  if (ang>2*PI) {ang=0;background('yellow');draw()}
  
} // end of draw()