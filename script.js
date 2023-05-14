function insert(num){
    var num_insert =document.getElementById('result').innerHTML 
    document.getElementById('result').innerHTML = num_insert + num
}

function clean(){
    document.getElementById('result').innerHTML = ""
}

function back(){
    var resultado = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = resultado.substring( 0, resultado.length - 1)
     
}

function calculate(){
    var resultado = document.getElementById('result').innerHTML
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado)
    }
    else{
        var total = document.getElementById('result').innerHTML
        document.getElementById('result').innerText = 'Nada para calcular'
        total.style.font = Arial, Helvetica, sans-serif;
    }
}