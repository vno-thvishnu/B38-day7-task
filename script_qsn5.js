//Print the country which uses US Dollars as currency.


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
var curr=result.filter((ele)=>{for (var i=0;i<ele.currencies.length;i++){
if(ele.currencies[i].code==='USD')
{
    return true
}
}
});
var ans=curr.map((ele=>ele.name))
console.log(ans)
}