var inpText=document.getElementById("text");
function getNumber(num){
    inpText.value +=num;
}
function getAlldlt(){
    inpText.value="";
}
function getResult(){
    inpText.value=eval(inpText.value)
}
function getDlt(){
    var a = inpText.value;
    var b=a.slice(0,-1);
    inpText.value=b;
}
function square(){
    var a=+prompt("enter a base");
    var b= a*a;
    inpText.value=b;
}
function cube(){
    var a=+prompt("enter a base");
    var b= a*a*a;
    inpText.value=b;
}
function root(){
    var a=+prompt("enter a base");
    var b= Math.pow(a,1/2)
    inpText.value=b;
}