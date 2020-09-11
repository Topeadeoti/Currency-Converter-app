function convert(){

    var currency = document.getElementById("currency").value;
    var amount = document.getElementById("amount").value;
    
    if (isNaN(amount) || amount<1){
        window.alert("invalid amount");

    }else if(currency == "dollar"){
        var output = amount/360;
        document.getElementById("demo").innerHTML=output;
    

    }else if(currency== "pounds"){
        var output = amount*427;
        document.getElementById("demo").innerHTML=output;

    

    }else if(currency== "euros"){
        var output = amount*397.797;
        document.getElementById("demo").innerHTML=output;
    

    }else if(currency== "yuan"){
        var output = amount*52.3;
        document.getElementById("demo").innerHTML=output;
    

    }else if(currency=="rupees"){
        var output = amount*5;
        document.getElementById("demo").innerHTML=output;

    }else{
        var output = amount*2000000;
        document.getElementById("demo").innerHTML=output;
        }   


}