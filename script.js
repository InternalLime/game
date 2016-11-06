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
  show('block');
  clicking_test();
}

function make_program()
{
  makegame();
  matrixArray(field_width,height_field);
  print();
}

function plan_a()
{
  show('none');
  field_width = 7;
  height_field = 7; 
  number_of_coins = 20; 
  number_of_bombs = 12;
  make_program();
}

function plan_b()
{
  show('none');
  field_width = 10;
  height_field = 10; 
  number_of_coins = 30; 
  number_of_bombs = 17;
  make_program();
}

function plan_c()
{
  show('none');
  field_width = 14;
  height_field = 14; 
  number_of_coins = 70; 
  number_of_bombs = 50;
  make_program();
}

function makegame()
{
  var box = document.getElementById("box");
  creteDivWithClass(box, "new_line");

  var field_width2 = 82 * field_width;
  var field_height2 = 82 * field_width + 80 ;

  box.style.height = field_height2;
  box.style.width = field_width2;

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
    var element = document.createElement("img");
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
function clicking_test() 
{
  document.onkeydown = func;
}

function matrixArray(rows,columns)
{
  matrix = new Array();
  for( a=0;  a<columns; a++)
  {
    matrix[a] = new Array();
    for( b=0; b<rows; b++)
    {
      matrix[a][b] = 0;
      update_image("leerer_block");
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
    break; 
    case "bomb":   
    var number_of_object = number_of_bombs;
    var object_value =2;
    break; 
  }
  for(var already_have_object=0; already_have_object<number_of_object; already_have_object++)
  {
    a = Math.floor((Math.random() *(field_width))); 
    b = Math.floor((Math.random() *(field_width))); 
    if (matrix[a][b] == 0)
    {
      matrix[a][b] = object_value;  
      if (object_value == 1)
      {
        update_image("place_a_coin");
      }
      else
      {
        update_image("place_a_bomb");
      }
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



function update_image(subject)
{
  switch(subject)
  {
    case "leerer_block":
    coordinates = a+","+b;
    document.getElementById(coordinates).src="1.png";
    break; 

    case "place_a_coin":
    coordinates = a+","+b;
    document.getElementById(coordinates).src="2.png";
    break; 

    case "place_a_bomb":   
    coordinates = a+","+b;
    document.getElementById(coordinates).src="4.png";
    break;  

    case "show_guy":   
    coordinates = Xscan+","+Yscan;
    document.getElementById(coordinates).src="3.png";
    break; 

    case "hide_guy":   
    coordinates = Xscan+","+Yscan;
    document.getElementById(coordinates).src="1.png";
    break; 
  }
}

function update()
{
  update_image("show_guy");
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
  document.getElementById("textscore").value = score;  
  matrix[Xscan][Yscan] =0;
  print(); 
}

function right()
{
  if ( Yscan < field_width-1)
  {
    update_image("hide_guy");
    Yscan = Yscan + 1;
  }
  serialize_guy_position();
  update(); 
}

function left()
{
  if ( Yscan > 0)
  {
    update_image("hide_guy");
    Yscan = Yscan -1;
  }
  serialize_guy_position();
  update();
}
function down()
{
  if ( Xscan < field_width-1)
  {
    update_image("hide_guy");
    Xscan = Xscan + 1;
  }
  serialize_guy_position();
  update();
}

function up()
{
  if ( Xscan > 0)
  {
    update_image("hide_guy");
    Xscan = Xscan - 1;
  }
  serialize_guy_position();
  update();
}

function serialize_guy_position()
{
  document.getElementById("inputValue").value = "X="+ Xscan + "Y=" + Yscan;  
}

function restart() 
{
  update_image("hide_guy");
  alert ('Game Over');  
  score = 0;
  lvl=1;
  document.getElementById("level").value = 'level: '+lvl;  
  for(a = 0; a < field_width; a++)
  {
    for(b = 0; b < height_field; b++)
    {     
      matrix[a][b] = 0;
      update_image("leerer_block");
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
  update_image("hide_guy");
  alert ('You win');  
  lvl=lvl+1;
  document.getElementById("level").value = 'level: '+lvl;  
  for(a = 0; a < field_width; a++)
  {
    for(b = 0; b < height_field; b++)
    {     
      matrix[a][b] = 0;
      update_image("leerer_block");
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

      function show(state){

          document.getElementById('window').style.display = state;      
          document.getElementById('wrap').style.display = state;      
      }
      
