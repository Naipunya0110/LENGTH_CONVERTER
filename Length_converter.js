var num1=document.getElementById('output1');
var num2=document.getElementById('output2');
var num3=document.getElementById('output3');
var num4=document.getElementById('output4');
var form=document.getElementById('number');
form.addEventListener('input' , convertion);
function convertion(e)
{
    e.preventDefault();
    var newitem=e.target.value;
    var in_meters=newitem/100;
    var in_feets=newitem*(0.0328084);
    var in_inches=newitem*(0.393701);
    var in_yards=newitem*(0.010936133);
    num1.innerHTML=in_meters;
    num2.innerHTML=in_feets;
    num3.innerHTML=in_inches;
    num4.innerHTML=in_yards;
}
