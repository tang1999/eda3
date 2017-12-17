
var sum1,sum2,sum3,sum4,sum5;
function total()
{
    var stu1=new Array(4);
    stu1[0]=document.getElementById("语文1").value;
    stu1[1]=document.getElementById("数学1").value;
    stu1[2]=document.getElementById("理综1").value;
    stu1[3] =parseFloat(stu1[0])+parseFloat(stu1[1])+parseFloat(stu1[2]);
    sum1=stu1[3];
    document.getElementById("总1").value=stu1[3];

    var stu2=new Array(4);
    stu2[0]=document.getElementById("语文2").value;
    stu2[1]=document.getElementById("数学2").value;
    stu2[2]=document.getElementById("理综2").value;
    stu2[3]=parseFloat(stu2[0])+parseFloat(stu2[1])+parseFloat(stu2[2]);
    sum2=stu2[3];
    document.getElementById("总2").value=stu2[3];


    var stu3=new Array(4);
    stu3[0]=document.getElementById("语文3").value;
    stu3[1]=document.getElementById("数学3").value;
    stu3[2]=document.getElementById("理综3").value;
    stu3[3]=parseFloat(stu3[0])+parseFloat(stu3[1])+parseFloat(stu3[2]);
    sum3=stu3[3];
    document.getElementById("总3").value=stu3[3];


    var stu4=new Array(4);
    stu4[0]=document.getElementById("语文4").value;
    stu4[1]=document.getElementById("数学4").value;
    stu4[2]=document.getElementById("理综4").value;
    stu4[3]=parseFloat(stu4[0])+parseFloat(stu4[1])+parseFloat(stu4[2]);
    sum4=stu4[3];
    document.getElementById("总4").value=stu4[3];

    var stu5=new Array(4);
    stu5[0]=document.getElementById("语文5").value;
    stu5[1]=document.getElementById("数学5").value;
    stu5[2]=document.getElementById("理综5").value;
    stu5[3]=parseFloat(stu5[0])+parseFloat(stu5[1])+parseFloat(stu5[2]);
    sum5=stu5[3];
    document.getElementById("总5").value=stu5[3];

}
function rank() {
   var list = new Array();
    function Persion(name,score){
        this.name=name;
        this.score=score;
    }
    var x1=document.getElementById("name1").value;
    var x2=document.getElementById("name2").value;
    var x3=document.getElementById("name3").value;
    var x4=document.getElementById("name4").value;
    var x5=document.getElementById("name5").value;
    list.push(new Persion(x1,sum1));
    list.push(new Persion(x2,sum2));
    list.push(new Persion(x3,sum3));
    list.push(new Persion(x4,sum4));
    list.push(new Persion(x5,sum5));

list.sort(function(a,b) {return b.score-a.score});

for(var i=0;i<list.length;i++)
    document.write('<b>Rank'+(i+1)+':</b>'+'<br/>'+'<span style="margin-left: 20px">name:'+list[i].name+'   </span>' +'<span style="margin-left: 15px">score:'+list[i].score+'<br/></span>');

    return this;
 }