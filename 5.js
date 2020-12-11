function zero()
{
    var ever = document.getElementById('display_result');
    if (ever.value!='')
    {
        ever.value+="0";
    }
}
function one()
{
    var ever = document.getElementById('display_result');
    ever.value+="1";
}
function two()
{
    var ever = document.getElementById('display_result');
    ever.value+="2";
}
function three()
{
    var ever = document.getElementById('display_result');
    ever.value+="3";
}
function four()
{
    var ever = document.getElementById('display_result');
    ever.value+="4";
}
function five()
{
    var ever = document.getElementById('display_result');
    ever.value+="5";
}
function six()
{
    var ever = document.getElementById('display_result');
    ever.value+="6";
}
function seven()
{
    var ever = document.getElementById('display_result');
    ever.value+="7";
}
function eight()
{
    var ever = document.getElementById('display_result');
    ever.value+="8";
}
function nine()
{
    var ever = document.getElementById('display_result');
    ever.value+="9";
}
function reset()
{
    var ever = document.getElementById('display_result');
    ever.value="";
}
function plus()
{
    var ever = document.getElementById('display_result');
    if (ever.value!='')
    {
		if (ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='*' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='/' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='+' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='-') 
        {

        } 
        else
        {
	       ever.value=ever.value + " + ";
        }
    }
}
function minus()
{
    var ever = document.getElementById('display_result');
    if (ever.value!='')
    {
		if (ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='*' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='/' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='+' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='-') 
        {

        } 
        else
        {
	       ever.value=ever.value + " - ";
        }
    }
}
function mult()
{
    var ever = document.getElementById('display_result');
    if (ever.value!='')
    {
		if (ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='*' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='/' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='+' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='-') 
        {

        } 
        else
        {
	       ever.value=ever.value + " * ";
        }
    }
}
function divide()
{
    var ever = document.getElementById('display_result');
    if (ever.value!='')
    {
		if (ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='*' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='/' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='+' || ever.value.slice(ever.value.indexOf(' ')+1,ever.value.indexOf(' ')+2)=='-') 
        {

        } 
        else
        {
	       ever.value=ever.value + " / ";
        }
    }
}
function result()
{
    var ever = document.getElementById('display_result'),
        val = 0,
        el1 = ever.value.slice(0 , ever.value.indexOf(' ')),
        el2 = ever.value.slice(ever.value.indexOf(' ') + 2, ever.value.length ),
        mark = ever.value.slice(ever.value.indexOf(' ') + 1, ever.value.indexOf(' ') + 2);
    if (mark == '*')
    {
        val = Number(el1) * Number(el2);
        ever.value = val;
    }
    else if (mark == '/')
    {
        if (Number(el2) == '0')
        {
            alert('Why?');
            reset();
        }
        else 
        {
            val = Number(el1) / Number(el2);
            ever.value = val;
        }
    }
    else if (mark == '+')
    {
        val = Number(el1) + Number(el2);
        ever.value = val;
    }
    else if (mark == '-')
    {
        val = Number(el1) - Number(el2);
        ever.value = val;
    }
    
}