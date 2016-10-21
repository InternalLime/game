var x=10;
var y=10;
var matrix=""; 
var inspect = ""; 
var gamer = 2;
var Xscan = 1;
var Yscan = 1;
var score = 0; 

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
   m = new Array();
  for(x=0; x<10; x++)
  {
    m[x] = new Array();
    for(y=0; y<10; y++)
    {
      m[x][y] = Math.floor((Math.random() *2)); 
      inspect += m[x][y] + ", "; 
    } 
    inspect += "\n";
    document.getElementById("Text1").value = inspect; 
  }
  return matrix;
}

 function  funcleft()
 {
   document.getElementById("inputValue").value = "37";  
 }

function scan()
{
  document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
  if (matrix[Xscan][Yscan] == 1) //как это записать??
  {
    score = score + 1;
    document.getElementById("textscore").value = score; 
    matrix[x][y] =0; //Как это записать???
  }

}