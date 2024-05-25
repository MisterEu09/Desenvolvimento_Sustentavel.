var radio = document.querySelector('.manual-btn');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    proximoSlide()
}, 5000);

function proximoSlide()
{
    cont++

    if(cont>4)
        {
            cont = 1;
        }
        document.getElementById('radio'+cont).checked = true;
}

var radioProbl = document.querySelector('.manual-btn-p');
var contProbl = 1;

document.getElementById('radio-p1').checked = true;

setInterval(() => {
    proximoSlideProbl()
}, 5000);

function proximoSlideProbl()
{
    contProbl++

    if(contProbl>6)
        {
            contProbl = 1;
        }
        document.getElementById('radio-p'+contProbl).checked = true;
}
var radioTec = document.querySelector('.manual-btn-tec');
var contTec = 1;

document.getElementById('radio-tec2').checked = true;

setInterval(() => {
    proximoSlideTec()
}, 15000);

function proximoSlideTec()
{
    contTec++

    if(contTec>6)
        {
            contTec = 1;
        }
        document.getElementById('radio-tec'+contTec).checked = true;
}