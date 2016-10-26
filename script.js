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
  print(matrix);
}

function matrixArray(rows,columns)
{
   matrix = new Array();
  for( var x=0;  x<columns; x++)
  {
    matrix[x] = new Array();
    for( var y=0; y<rows; y++)
    {
      matrix[x][y] = Math.floor((Math.random() *2)); 
    } 
  }
  return matrix;
}

function print(m)
{

  for(var a = 1; a<field_width; a++)
  {
    for(var b = 1; b<height_field; b++)
    {
      inspect += matrix[a][b]; 
      inspect += " "; 
    } 
    inspect += "\n";
  }

  document.getElementById("Text1").value = inspect;   
}

function scan()
{
  document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Xscan;
  if (matrix[Xscan][Yscan] == 1)
  {
    score = score + 1;
    document.getElementById("textscore").value = score;  
    matrix[Xscan][Yscan] =0;
    document.getElementById("Text1").value = ""; 
    print(matrix);
  }
}




