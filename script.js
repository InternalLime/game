var x=10;
var y=10;
var matrix=""; 
var inspect = ""; var insp = ""; 
var gamer = 2;
var Xscan = 1;
var Yscan = 1;
var score = 0; 
var field_width = 10;
var height_field = 10; 
var limit_of_ones=0; 

function input() 
{
  matrixArray(field_width,height_field);
  document.onkeydown = function(evt) 
  {
    evt = evt || window.event;
    if (evt.ctrlKey && evt.keyCode == 37)
    {
        alert(37);
    }
    if (evt.ctrlKey && evt.keyCode == 38)
    {
        funcup();
    } 
       if (evt.ctrlKey && evt.keyCode == 39)
    {
        funcright();
    }  
      if (evt.ctrlKey && evt.keyCode == 40)
    {
        funcdown();
    }
  }
}

function matrixArray(rows,columns)
{
   matrix = new Array();
  for(x=0; x<columns; x++)
  {
    matrix[x] = new Array();
    for(y=0; y<rows; y++)
    {
      matrix[x][y] = Math.floor((Math.random() *2)); 
    } 

    print(matrix);
  }
  return matrix;
}

function print(m)
{
  for(x=0; x<field_width; x++)
  {
    m[x] = Array();
    for(y=0; y<height_field; y++)
    {
      m[x][y] = Math.floor((Math.random() *2));
      inspect += m[x][y] + ", "; 
    } 
    inspect += "\n";
    document.getElementById("Text1").value = inspect; 
  }
}

 function  funcup()
 {
   document.getElementById("inputValue").value = "38";  
 }

function scan()
{
  document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  x = Xscan;
  y = Yscan;
  if (matrix[x][y] == 1)
  {
    score = score + 1;
    document.getElementById("textscore").value = score;  
    matrix[x][y] =0; //Как это записать???
  }
}