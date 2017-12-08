function isnum(){
    var reg =document.getElementById("pre").value;
    var reg1=document.getElementById("next").value;
    if (isNaN(reg)||isNaN(reg1)) {
        alert("请输入数字");
    }
}

function calculator(){
    var pre=document.getElementById("pre").value;
    var next=document.getElementById("next").value;
    var opra=document.getElementById("operator").value;

    var result=0;
    switch(opra) {
        case "+":
            result=parseInt(pre)+parseInt(next);
            break;
        case "-":
            result=parseInt(pre)-parseInt(next);
            break;
        case "*":
            result=parseInt(pre)*parseInt(next);
            break;
        case "/":
            if(parseInt(next)!=0){
                result=parseInt(pre)/parseInt(next);
            }
            else{
                alert("除数不能为0");
                return;
            }
            break;
        default:
            break;
    }
    document.getElementById("result").value=result;
}