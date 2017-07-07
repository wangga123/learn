
var datu =document.getElementById("datu1")
var logo =document.getElementById("logo1")
var btn =document.getElementById("btn")
var xwq =document.getElementById("xwq")
var huadon1 =document.getElementById("huandon1")
var lis1 =huadon1.children
var uls =xwq.children;
var lis =btn.children;
logo.onmouseover=function () {
    datu.style.display ="block"
}
logo.onmouseout=function () {
    datu.style.display ="none"
}
for(var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onmouseover=function () {
        for(var j=0;j<uls.length;j++){
            uls[j].style.display= "none"
//               uls[j].className ="xinwen";
        }
        var index=this.index;
        uls[index].style.display = "block";
        uls[index].className ="xinwen";
    }
}
for(var i=0;i<lis1.length;i++){
    lis1[i].index = i;
    lis1[i].onclick=function () {
        for(var i=0;i<lis1.length;i++){
            lis1[i].style.backgroundColor="pink";
        }
        for(var j=0;j<uls.length;j++){
            uls[j].style.display= "none"
        }
        this.style.backgroundColor="#fff";
        var index=this.index;
        uls[index].style.display = "block";
        uls[index].className ="xinwen";
    }
}

  