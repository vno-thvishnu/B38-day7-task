//Print the following details name, capital, flag using forEach function


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
var ans=result.forEach((ele) => {

    console.log("country :"+ele.name+" "+"capital: "+ele.capital+" "+"Flag: "+ele.flag)
});


}