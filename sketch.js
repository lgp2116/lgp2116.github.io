var win_size1 = 500;
var win_size2 = win_size1;

function setup() {
  createCanvas(win_size1, win_size2);
}

function draw() {
  
  // set background
  background(220);
  
  // get hr, min, sec vals
  var h = hour();
  var m = minute();
  var s = second();
  
  // set size of hr, min, sec circles
  h_size = 0.75*win_size1;
  m_size = 0.5*win_size1;
  s_size = 0.25*win_size1;
  
  // map time vals to 
  
  h_angle1 = map(h, 0, 24, PI/2 ,-PI/2);
  h_angle2 = PI - h_angle1;
  
  m_angle1 = map(m, 0, 60, PI/2, -PI/2);
  m_angle2 = PI - m_angle1;
  
  s_angle1 = map(s, 0, 60, PI/2, -PI/2);
  s_angle2 = PI - s_angle1;
    
  fill(255);
  circle(win_size1/2, win_size2/2, h_size);
  fill(0);  
  arc(win_size1/2, win_size2/2, h_size, h_size, h_angle1, h_angle2, OPEN);
  
  fill(255);
  circle(win_size1/2, win_size2/2, m_size);
  fill(100);
  arc(win_size1/2, win_size2/2, m_size, m_size, m_angle1, m_angle2, OPEN);
  
  fill(255);
  circle(win_size1/2, win_size2/2, s_size);
  fill(200);
  arc(win_size1/2, win_size2/2, s_size, s_size, s_angle1, s_angle2, OPEN);
  
  
  
}
