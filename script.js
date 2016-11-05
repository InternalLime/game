var matrix=""; 
var inspect = "";
var Xscan = 1;
var Yscan = 1;
var score = 0; 
var field_width = 10;
var height_field = 10; 
var coordinates = "0,0";
var a = 0;
var b = 0;
var number_of_coins = 30; 
var number_of_bombs = 15;
var object_picture ="";

var lvl= 1;

function input() 
{  
  makegame();
  matrixArray(field_width,height_field);
  print();
  best_func();
  func();

  }
function makegame()
{
  var box = document.getElementById("box");
  creteDivWithClass(box, "new_line");
  for ( a = 0; a < field_width; a++)
  {
    for ( b = 0; b < height_field; b++)
    {
      var block = creteDivWithClass(box, "block");
    }
    creteDivWithClass(box, "new_line");
  }
}

function creteDivWithClass(parent, className)
{
    var element = document.createElement("div");
    element.className = className;
    if (className== "block")
    {
      element.id = a+","+b;
    }
    parent.appendChild(element);
    return element;
}

function func(evt)
{ 
  if (evt.keyCode == 37)
  {
    left();
  }
  if (evt.keyCode == 38)
  {
    up();
  } 
     if (evt.keyCode == 39)
  {
    right();
  }  
    if (evt.keyCode == 40)
  {
    down();
  }
}
function best_func() 
{
  document.onkeydown = func;
}

function matrixArray(rows,columns)
{
  matrix = new Array();
  for( var x=0;  x<columns; x++)
  {
    matrix[x] = new Array();
    for( var y=0; y<rows; y++)
    {
      matrix[x][y] = 0;
     coordinates= "div#"+x+","+y;
     document.getElementById(coordinates).scr="3.png";
    }
  }
  generate("coun");
  generate("bomb");
}  

function  generate(object)
{
  switch(object)
  {
    case "coun":
    var number_of_object = number_of_coins;
    var object_value =1;
     object_picture = "2.png";
    break; 
    case "bomb":   
    var number_of_object = number_of_bombs;
    var object_value =2;
    object_picture  = "4.png";
    break; 
  }
  for(var already_have_object=0; already_have_object<number_of_object; already_have_object++)
  {
    x = Math.floor((Math.random() *(field_width))+1); 
    y = Math.floor((Math.random() *(field_width))+1); 
    if (matrix[x][y] == 0)
    {
      matrix[x][y] = object_value;  
      coordinates = x+","+y;
      document.getElementById(coordinates).src=object_picture;
    }
    else
    {
      already_have_object=already_have_object-1;
    }
  }
}



function print()
{
  inspect="";
  document.getElementById("Text1").value = ""; 
  for(a = 0; a < field_width; a++)
  {
    for(b = 0; b < height_field; b++)
    {     
      inspect += matrix[a][b]; 
      inspect += " "; 
     } 
    inspect += "\n";
  }
  document.getElementById("Text1").value = inspect; 
  
}




function update()
{
  show_guy();
  if (matrix[Xscan][Yscan] == 2)
  {
    restart() 
  }
  if (matrix[Xscan][Yscan] == 1)
  {
    score = score + 1;
    matrix[Xscan][Yscan] =0;
    chek_win(); 
  }
  if (matrix[Xscan][Yscan] == 0)
  {
    score = score + 0; 
  }
  document.getElementById("textscore").value = score;  
  matrix[Xscan][Yscan] =0;
  print(); 
}

function right()
{
  if ( Yscan < field_width-1)
  {
    hide_guy();
    Yscan = Yscan + 1;
  }
  serialize_guy_position();
  update(); 
}

function left()
{
  if ( Yscan > 1)
  {
    hide_guy();
    Yscan = Yscan -1;
  }
  serialize_guy_position();
  update();
}
function down()
{
  if ( Xscan < field_width-1)
  {
    hide_guy();
    Xscan = Xscan + 1;
  }
  serialize_guy_position();
  update();
}

function up()
{
  if ( Xscan > 1)
  {
    hide_guy();
    Xscan = Xscan - 1;
     }
  serialize_guy_position();
  update();
}

function serialize_guy_position()
{
  document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;  
}

function show_guy()
{
  coordinates = Xscan+","+Yscan;
  document.getElementById(coordinates).src="3.png";
}

function hide_guy()
{
  coordinates = Xscan+","+Yscan;
  document.getElementById(coordinates).src="1.png";
}




function restart() 
{
  hide_guy()
  alert ('Game Over');  
  score = 0;
  lvl=1;
  document.getElementById("level").value = 'level: '+lvl;  
  for(a = 0; a < field_width; a++)
  {
    for(b = 0; b < height_field; b++)
    {     
      matrix[a][b] = 0;
      coordinates = a+","+b;
      document.getElementById(coordinates).src="1.png";
    }
  }  
  Xscan = 1;
  Yscan = 1;
  serialize_guy_position();
  generate("coun");
  generate("bomb");
  print();
}



function  chek_win() 
{
  if (score == number_of_coins*lvl)
  {
  hide_guy()
  alert ('You win');  
  lvl=lvl+1;
  document.getElementById("level").value = 'level: '+lvl;  
  for(a = 0; a < field_width; a++)
  {
    for(b = 0; b < height_field; b++)
    {     
      matrix[a][b] = 0;
      coordinates = a+","+b;
      document.getElementById(coordinates).src="1.png";
    }
  }  
  Xscan = 0;
  Yscan = 0;
  serialize_guy_position();
  generate("coun");
  generate("bomb");
  print();
  } 
}

