function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('RUA').value=(conteudo.logradouro);
        document.getElementById('BAIRRO').value=(conteudo.bairro);
        document.getElementById('CIDADE').value=(conteudo.localidade);
        document.getElementById('ESTADO').value=(conteudo.uf);

    }
    else {
       
        cleanElements();
        alert("CEP não encontrado.");
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
    //console.log("CEP informado: " + CEP);

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

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ CEP + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        }else {
            //cep é inválido.
            cleanElements();
            alert("Formato de CEP inválido.");
        }
        
    }  else {
        //cep sem valor, limpa formulário.
        cleanElements();
    }
}