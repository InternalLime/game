var x='';
var y='';
var matrix=""; 
var inspect = ""; 
var gamer =2;

function matrixArray(rows,columns)
{
   matrix = new Array();
  for(x=0; x<columns; x++)
  {
    matrix[x] = new Array();
    for(y=0; y<rows; y++)
    {
      matrix[x][y] = Math.floor((Math.random() *2)); 
      inspect += matrix[x][y] + ", "; 
    } 
    document.getElementById("Text1").value = inspect; 
  }
  return matrix;
}

function abcd()
{
      document.getElementById("Text2").value = gamer; 
}