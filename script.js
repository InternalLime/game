var x='';
var y='';
var matrix=""; 
var inspect = ""; 

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
