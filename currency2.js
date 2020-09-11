function convert(){

    var convertTo = document.getElementById("convertTo").value;
    var convertFrom= document.getElementById("convertFrom").value;
    var amount = document.getElementById("amount").value;
    
    if (convertFrom == convertTo){
        document.getElementById("demo").innerHTML="change your currency";
    }else if(isNaN(amount) || amount<1){
        window.alert("invalid amount");

    
    }else{
        if(convertFrom == "dollar" && convertTo=="euros"){
        var output = amount*0.93;
        document.getElementById("demo").innerHTML=output;

        }else if(convertFrom=="euros" && convertTo=="dollars"){
            var output = amount*1.08;
            document.getElementById("demo").innerHTML=output;

        }else if(convertFrom == "dollar" && convertTo == "naira"){
            var output = amount*360;
            document.getElementById("demo").innerHTML=output;

        }else if(convertFrom == "naira" && convertTo=="dollar"){
                var output = amount/360;
                document.getElementById("demo").innerHTML=output;
             
        }else if(convertFrom == "euros" && convertTo =="naira"){
        var output = amount*397.797;
        document.getElementById("demo").innerHTML=output;

        }else if(convertFrom == "naira" && convertTo =="euros"){
        var output = amount*0.0025;
          document.getElementById("demo").innerHTML=output;
        
        }  
    }

}