var dob1=document.querySelector("#dob");
var ln1=document.querySelector("#ln");
var btn1 = document.querySelector("#btn");
var op=document.querySelector("#output");
var form=document.querySelector("#myForm");
var btnReset = document.querySelector("#btn-rst");



function submitHandler(event){
    event.preventDefault();
}
function clickHandler(){
    var digits=[];
    var sumOfDigits=0;
    if(dob1.value===""){
        op.innerText="Please enter valid date of birth";
    }
    else if(ln1.value===""){
        op.innerText="Please enter lucky number";
    }
    else{
        var lnInput=ln1.value;
        var splitDob=dob1.value.split("-");// splitting dob into day, month and year
        splitDob.map((val)=>{
            digits.push(val.split(""))//splitting day,month and year into digits i.e. Array[Array[], Array[], Array[]]
        });
        digits.map((arr)=>{
            arr.map(digi=>{
                sumOfDigits+=Number(digi);
            });
        });
        if(sumOfDigits%Number(lnInput)===0){
            op.innerText="Congratulations! Your birthday is lucky";
        }
        else{
            op.innerText="Sorry! Your birthday is not lucky";
        }
    }
}
function resetHandler(){
    op.innerText="";
    dob1.value="";
    ln1.value="";
}




btnReset.addEventListener('click', resetHandler);
btn1.addEventListener('click',clickHandler);
form.addEventListener('submit',submitHandler)