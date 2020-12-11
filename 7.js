var hod = 0;
var flag = false;
var allblock = document.getElementsByClassName('block');

document.getElementById('main').onclick = function (Event)
{
    if (Event.target.className == 'block' && flag == false)
    {
        if (hod % 2 == 0 && Event.target.innerHTML == '')
        {
            Event.target.innerHTML = '0';
            hod++;
        }
        /*else 
        {
            comp();
            hod++;
        }*/
        check();
    }
}
function comp()
{
    if (hod % 2 == 1 && flag == false)
    {
        while (true)
        {
            var rand = Math.round(Math.random() * (8 - 0) + 0);
            if (allblock[rand].innerHTML == '')
            {
                allblock[rand].innerHTML = 'x';
                hod++;
                check();
                break;
            } 
        }
    }
    
}
function check()
{
    if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    else if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    else if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    
    else if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    else if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    else if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    
    else if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    else if (allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x')
        {
            alert ('Победили крестики');
            flag = true;
        }
    
    
    else if (allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    else if (allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    else if (allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    
    else if (allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    else if (allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    else if (allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    
    else if (allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    else if (allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0')
        {
            alert ('Победили нолики');
            flag = true;
        }
    
    
    else if ((allblock[0].innerHTML == '0'|| allblock[0].innerHTML == 'x') && (allblock[1].innerHTML == '0'|| allblock[1].innerHTML == 'x') && (allblock[2].innerHTML == '0'|| allblock[2].innerHTML == 'x') && (allblock[3].innerHTML == '0'|| allblock[3].innerHTML == 'x') && (allblock[4].innerHTML == '0'|| allblock[4].innerHTML == 'x') && (allblock[5].innerHTML == '0'|| allblock[5].innerHTML == 'x') && (allblock[6].innerHTML == '0'|| allblock[6].innerHTML == 'x') && (allblock[7].innerHTML == '0'|| allblock[7].innerHTML == 'x') && (allblock[8].innerHTML == '0'|| allblock[8].innerHTML == 'x'))
        {
            alert ('Ничья!');
            flag = true;
        }
}
function erase()
{
    for (var i=0; i<9; i++)
    {
        allblock[i].innerHTML = ''; 
        flag = false;
        hod = 0;
    }
}