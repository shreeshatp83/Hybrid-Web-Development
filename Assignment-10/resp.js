
function f1(){
    alert("The answer is displayed in the webpage");
    var a=document.getElementById("num").value;
    f=1;
    for(i=2;i<=a;i++){
        f=f*i;
    }
    document.getElementById("p").innerHTML=f;
}
function f2(){
    alert("The answer is displayed in the webpage");
    var b=document.getElementById("num").value;
    f=0;
    for(i=2;i<b/2;i++){
        if(b%i==0){
            f=1;
            break;
        }
    }
    if(f==0){
        document.getElementById("p").innerHTML=b+" is a Prime number";
    }
    else{
        document.getElementById("p").innerHTML=b+" is not a Prime number";
    }

}
function f3(){
    alert("The answer is displayed in the webpage");

    var c=document.getElementById("num").value;
    const ar=new Array(0,1);
    for(i=2;i<=c;i++){
        ar[i]=ar[i-1]+ar[i-2];
    }
    document.getElementById("p").innerHTML=ar;

}
function f4(){
    alert("The answer is displayed in the webpage");

    var d=document.getElementById("num").value;
    const ar=new Array();
    for(i=1;i<=d;i++){
        ar[i]=i;
    }
    document.getElementById("p").innerHTML=ar;

}
function fe1(){
    document.getElementById("bp1").innerHTML="Returns factorial of number"
}
function fe2(){
    document.getElementById("bp2").innerHTML="Returns wheather a number or not"
}
function fe3(){
    document.getElementById("bp3").innerHTML="Prints Fibonacci series "
}
function fe4(){
    document.getElementById("bp4").innerHTML="Prints Natural numbers"
}
var mybtn1=document.getElementById('fact');
mybtn1.addEventListener('click',f1);
mybtn1.addEventListener('mouseover',fe1);
var mybtn2=document.getElementById('prime');
mybtn2.addEventListener('click',f2);
mybtn2.addEventListener('mouseover',fe2);
var mybtn3=document.getElementById('fib');
mybtn3.addEventListener('click',f3);
mybtn3.addEventListener('mouseover',fe3);
var mybtn4=document.getElementById('nat');
mybtn4.addEventListener('click',f4);
mybtn4.addEventListener('mouseover',fe4);
