//Get all the countries with a population of less than 2 lakhs using Filter function


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    
    var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name)


    console.log(res);
}