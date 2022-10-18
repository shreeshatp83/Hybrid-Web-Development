let btnAdd=document.querySelector('#add');
let btnCal=document.querySelector('#calculate');
let tab=document.querySelector('table');
let itemInput=document.querySelector('#item');
let quantityInput=document.querySelector('#quantity');
let codeInput=document.querySelector('#code');
let priceInput=document.querySelector('#price');

btnAdd.addEventListener('click', ()=> {
    let item=itemInput.value;
    let q=quantityInput.value;
    let code=codeInput.value;
    let price=priceInput.value;
    let t=q*price;
    let template=`<tr>
    <td>${item}</td>
    <td>${q}</td>
    <td>${code}</td>
    <td>${price}</td>
    <td>${t}</td>
    </tr>
    `;
   
    tab.innerHTML += template;
});

btnCal.addEventListener('click',()=>{
    var mytab=document.getElementById('mytab');
    let sum=0;
    for(i=1;i<mytab.rows.length;i++)
    {
        var obj = mytab.rows.item(i).cells;
        // for(j=0;j<obj.length;j++){
        //     info.innerHTML=info.innerHTML+' '+obj.item(j).innerHTML;
        // }
        sum += parseInt(obj.item(4).innerHTML);
    }
    info.innerHTML="Total sum is "+sum+`<br>`;
});
