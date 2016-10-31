var matrix=""; 
var inspect = "";
var Xscan = 1;
var Yscan = 1;
var score = 0; 
var field_width = 11;
var height_field = 11; 
var coordinates = "1,1";
var a = 0;
var b = 0;
var number_of_coins = 15; 
var number_of_bombs = 20;

var lvl= 1;

function input() 
{
  matrixArray(field_width,height_field);
  print();
  best_func();
  func()
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
              document.getElementById(coordinates).src="1.png";
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
    for( var already_have_coins=0; already_have_coins<number_of_coins; already_have_coins++)
    {
      x = Math.floor((Math.random() *(field_width-1))+1); 
      y = Math.floor((Math.random() *(field_width-1))+1); 
      if (matrix[x][y] == 0)
      {
        matrix[x][y] = 1;  
        coordinates = x+","+y;
        document.getElementById(coordinates).src="2.png";
      }
      else
      {
        already_have_coins= already_have_coins-1;
      }
    }

    break; 
    case "bomb":   
    for( var already_have_bomb= 0 ; already_have_bomb<number_of_bombs; already_have_bomb++)
    {
      x = Math.floor((Math.random() *(field_width-1))+1); 
      y = Math.floor((Math.random() *(field_width-1))+1); 
      if (matrix[x][y] == 0)
      {
        matrix[x][y] = 2;  
        coordinates = x+","+y;
        document.getElementById(coordinates).src="4.png";
      }
      else
      {
        already_have_bomb= already_have_bomb-1;
      }
    }  
    break; 
  }
}




function print()
{
  inspect="";
  document.getElementById("Text1").value = ""; 
  for(a = 1; a < field_width; a++)
  {
    for(b = 1; b < height_field; b++)
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
    win_game(); 
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
  if ( Yscan == 10)
  {
  }
  else
  {
    hide_guy();
    Yscan = Yscan + 1;
  }
  serialize_guy_position();
  update(); 
}

function left()
{
  if ( Yscan == 1)
  {
  }
  else
  {
    hide_guy();
    Yscan = Yscan -1;
  }
  serialize_guy_position();
  update();
}
function down()
{
  if ( Xscan == 10)
  {
  }
  else
  {
    hide_guy();
    Xscan = Xscan + 1;
  }
  serialize_guy_position();
  update();
}

function up()
{
  if ( Xscan == 1)
  {
  }
  else
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
  for(a = 1; a < field_width; a++)
  {
    for(b = 1; b < height_field; b++)
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



function  win_game() 
{
  if (score == number_of_coins*lvl)
  {
  hide_guy()
  alert ('You win');  
  lvl=lvl+1;
  document.getElementById("level").value = 'level: '+lvl;  
  for(a = 1; a < field_width; a++)
  {
    for(b = 1; b < height_field; b++)
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
}

