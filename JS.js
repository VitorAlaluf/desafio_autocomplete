

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        
        document.getElementById('RUA').value=(conteudo.logradouro);
        document.getElementById('BAIRRO').value=(conteudo.bairro);
        document.getElementById('CIDADE').value=(conteudo.localidade);
        document.getElementById('ESTADO').value=(conteudo.uf);

    }
    else {
       
        cleanElements();
        alert("CEP não encontrado.");
        $('#CEP').popover('open');
    }
}


function cleanElements(){
    document.getElementById('RUA').value=("");
    document.getElementById('BAIRRO').value=("");
    document.getElementById('CIDADE').value=("");
    document.getElementById('ESTADO').value=("");
}

function testeCEP(CEP){

    //CEP = document.getElementById('CEP').value;
   

    CEP = CEP.replace(/\D/g, '');

    if (CEP != "")
    {
        var validacep = /^[0-9]{8}$/;
        
        if(validacep.test(CEP)) {

            // /* 
            document.getElementById('RUA').value="...";
            document.getElementById('BAIRRO').value="...";
            document.getElementById('CIDADE').value="...";
            document.getElementById('ESTADO').value="...";
            // */
            
            console.log("CEP informado: " + CEP);

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ CEP + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        }else {
            cleanElements();
            alert("Formato de CEP inválido.");
        }
        
    }  else {
        cleanElements();
    }
}

function toggle(state){
 
    if(state){
        document.getElementById('COMPLEMENTO').disabled = false;
        console.log("complemento SIM");
    }else{
        document.getElementById('COMPLEMENTO').disabled = true;
        document.getElementById('COMPLEMENTO').value=("");
        console.log("complemento NÃO")
    }
}

function bufferCPF(CPF){

    CPF = CPF.replace(/\./g, "");
    CPF = CPF.replace(/\-/g, "");

    console.log("BufferCPF: " + CPF)

    if (!(TestaCPF(CPF))){
        alert('CPF INVÁLIDO!');
        document.getElementById('CPF').value= ("")
    }

}

function TestaCPF(strCPF) {
    console.log("TestaCPF: " + strCPF)
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  console.log("TestaCPF: " + strCPF)
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}