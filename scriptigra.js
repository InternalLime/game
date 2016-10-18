var c="";
var x=0;
var y=0;
var a=3;
var b=3;
var arr="";

function  randomaiz(t)
{
  for (var i;i<a; i++)
  {
    x = rand(0,1);
    y = rand(0,1);
  }
}
function matrixArray(a,b)
{
   arr = new Array();
  for( y=0; x<a; i++)
  {
    arr[y] = new Array();
    for( x=0; x<b; j++)
    {
      arr[y][x] = 0;
      pichat (arr[y][x]);
    }
  }
  return arr;
  randomaiz(arr);
  pichat(arr)
}

function pichat(p)
{
var entered_number = arr[y][x];
document.getElementById("Text1").value = entered_number;
}