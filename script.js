var matrix=""; 
var inspect = "";
var Xscan = 1;
var Yscan = 1;
var score = 0; 
var field_width = 11;
var height_field = 11; 
var coordinates = "1,1";
var a =0;
var b = 0;

function input() 
{
  matrixArray(field_width,height_field);
  print(matrix);
  document.onkeydown = function(evt) 
  {
     if (evt.keyCode == 37)
    {
        func37();
    }
    if (evt.keyCode == 38)
    {
        func38();
    } 
       if (evt.keyCode == 39)
    {
        func39();
    }  
      if (evt.keyCode == 40)
    {
        func40();
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
  for( var u=0; u<41; u++)
  {
    i = Math.floor((Math.random() *11)); 
    p = Math.floor((Math.random() *11)); 
    if (matrix[i][p] == 0)
    {
      matrix[i][p] = 1;
    }
    else
    {
      if(u==0)
      {
      }
      else
      {
        u= u-1;
      }
    }
  }
  return matrix;
}

function print(m)
{
  inspect="";
  document.getElementById("Text1").value = ""; 
  for(a = 1; a<field_width; a++)
  {
    for(b = 1; b<height_field; b++)
    {     
      inspect += matrix[a][b]; 
      inspect += " "; 
      money();
    } 
    inspect += "\n";
  }
  document.getElementById("Text1").value = inspect;  
}

function scan()
{
  guy();
  if (matrix[Xscan][Yscan] == 1)
  {
    score = score + 1;
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

 function func39()
{
  if ( Yscan == 10)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
  }
   else
   {
        del_guy();
    Yscan = Yscan + 1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
   }
}

 function func37()
{

  if ( Yscan == 1)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
  }
   else
   {
    del_guy();
    Yscan = Yscan -1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
   }
}
 function func40()
{

  if ( Xscan == 10)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
  }
   else
   {
        del_guy();
    Xscan = Xscan + 1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
   }
}
 function func38()
{
;
  if ( Xscan == 1)
  {
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
  }
   else
   {
    del_guy();
    Xscan = Xscan - 1;
    document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;
    scan();
   }
}
 function money()
{
  if (matrix[a][b] == 1)
  {
    coordinates = a+","+b;
    document.getElementById(coordinates).src="2.png";
    coordinates = 0;
  }
}

 function guy()
{
  coordinates = Xscan+","+Yscan;
  document.getElementById(coordinates).src="3.png";
  coordinates = 0;
}

  function del_guy()
  {
  coordinates = Xscan+","+Yscan;
  document.getElementById(coordinates).src="1.png";
  coordinates = 0;
}