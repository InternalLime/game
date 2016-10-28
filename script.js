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
var number_of_coins = 40; 
var number_of_bombs = 10;

function input() 
{
  matrixArray(field_width,height_field);
  print(matrix);
  document.onkeydown = function(evt) 
  {
     if (evt.keyCode == 37)
    {
        function_left();
    }
    if (evt.keyCode == 38)
    {
        function_up();
    } 
       if (evt.keyCode == 39)
    {
        function_right();
    }  
      if (evt.keyCode == 40)
    {
        function_down();
    }
  }
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
    } 
  }
  coins();
  bombs();
  return matrix;
}  

function coins()
{
  for( var already_have_coins=0; already_have_coins<number_of_coins; already_have_coins++)
  {
    x = Math.floor((Math.random() *(field_width-1))+1); 
    y = Math.floor((Math.random() *(field_width-1))+1); 
    if (matrix[x][y] == 0)
    {
      matrix[x][y] = 1;
    }
    else
    {
      if(already_have_coins==0)
      {
      }
      else
      {
        already_have_coins= already_have_coins-1;
      }
    }
  }
}  

function bombs()
{
  for( var already_have_bomb= 0 ; already_have_bomb<number_of_bombs; already_have_bomb++)
  {
    x = Math.floor((Math.random() *(field_width-1))+1); 
    y = Math.floor((Math.random() *(field_width-1))+1); 
    if (matrix[x][y] == 0)
    {
      matrix[x][y] = 2;
    }
    else
    {
      if(already_have_bomb==0)
      {
      }
      else
      {
        already_have_bomb= already_have_bomb-1;
      }
    }
  }
}  

function print(m)
{
  inspect="";
  document.getElementById("Text1").value = ""; 
  for(a = 1; a < field_width; a++)
  {
    for(b = 1; b < height_field; b++)
    {     
      inspect += matrix[a][b]; 
      inspect += " "; 
      money();
      add_bomb();
    } 
    inspect += "\n";
  }
  document.getElementById("Text1").value = inspect;  
}

function update()
{
  guy();
  chek_bombs();
  if (matrix[Xscan][Yscan] == 1)
  {
    score = score + 1;
    chek_win();
    document.getElementById("textscore").value = score;  
    matrix[Xscan][Yscan] =0;
    print(matrix);
  }
  else
  {
    score = score + 0; 
    document.getElementById("textscore").value = score;  
  }
}

function function_right()
{
  if ( Yscan == 10)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  else
  {
    del_guy();
    Yscan = Yscan + 1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  update();  
}

function function_left()
{
  if ( Yscan == 1)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  else
  {
    del_guy();
    Yscan = Yscan -1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  update();
}
function function_down()
{
  if ( Xscan == 10)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  else
  {
    del_guy();
    Xscan = Xscan + 1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  update();
}

function function_up()
{
  if ( Xscan == 1)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  else
  {
    del_guy();
    Xscan = Xscan - 1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  }
  update();
}

function money()
{
  if (matrix[a][b] == 1)
  {
    coordinates = a+","+b;
    document.getElementById(coordinates).src="2.png";
  }
}

function guy()
{
  coordinates = Xscan+","+Yscan;
  document.getElementById(coordinates).src="3.png";
}

function del_guy()
{
  coordinates = Xscan+","+Yscan;
  document.getElementById(coordinates).src="1.png";
}

function add_bomb()
{
  if (matrix[a][b] == 2)
  {
    coordinates = a+","+b;
    document.getElementById(coordinates).src="4.png";
  }
}
function chek_bombs()
{
  if (matrix[Xscan][Yscan] == 2)
  {
    document.getElementById("level").value = "Game over";  
    matrix[Xscan][Yscan] =0;
    score = score - 1000;
    document.getElementById("textscore").value = score;  
    print(matrix); 
  }
}

function chek_win()
{
  if (score == 40)
  {
    document.getElementById("textscore").value = score;  
    matrix[Xscan][Yscan] =0;
    print(matrix);
    document.getElementById("level").value = "Win"; 
  }
}