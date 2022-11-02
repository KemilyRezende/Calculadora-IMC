function MudaMargem(imc){
    let out = document.getElementById("Resultado");
    if (imc <= 29){
        out.style.marginLeft = "33.1%";
    }
    else {
        out.style.marginLeft = "27%";
    }
}
function CalculaIMC(){
    var Catch = document.getElementById('Peso');
    let peso = Catch.value;
    Catch = document.getElementById('Altura');
    let altura = Catch.value;
    altura = altura/100;
    altura = altura*altura;
    let imc = peso/altura;
    Catch = document.getElementById('Sexo');
    let sexo = Catch.value;
    if (sexo == 'F'){
        if (imc < 19){
            MudaMargem(imc);
            var msg = 'Abaixo do peso.';
        }
        else if(imc >= 19 && imc < 24){
            MudaMargem(imc);
            var msg = 'Peso saudável.';
        }
        else if(imc >= 24 && imc < 29){
            MudaMargem(imc);
            var msg = 'Acima do peso.';
        }
        else if(imc >= 29 && imc < 39){
            MudaMargem(imc);
            var msg = 'Obesidade moderada.';
        }
        else if (imc >=39){
            MudaMargem(imc);
            var msg ='Obesidade mórbida.';
        }
        var R = document.getElementById('Resultado');
        R.value = msg;
        console.log(R.value);
    }
    else if (sexo == 'M'){
        if (imc < 20){
            MudaMargem(imc);
            var msg = 'Abaixo do peso.';
        }
        else if(imc >= 20 && imc < 25){
            MudaMargem(imc);
            var msg = 'Peso saudável.';
        }
        else if(imc >= 25 && imc < 30){
            MudaMargem(imc);
            var msg = 'Acima do peso.';
        }
        else if(imc >= 30 && imc < 40){
            MudaMargem(imc);
            var msg = 'Obesidade moderada.';
        }
        else if (imc>= 40){
            MudaMargem(imc);
            var msg ='Obesidade mórbida.';
        }
        var R = document.getElementById('Resultado');
        R.value = msg;
        console.log(R.value);
    }
}