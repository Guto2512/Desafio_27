function limpa_formulario(){
    document.getElementById("i_rua").value = "";
    document.getElementById("i_bairro").value = "";
    document.getElementById("i_cidade").value = "";
    document.getElementById("i_estado").value = "";
}

function atualiza_formulario(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("i_rua").value = conteudo.logradouro;
        document.getElementById("i_bairro").value = conteudo.bairro;
        document.getElementById("i_cidade").value = conteudo.localidade;
        document.getElementById("i_estado").value = conteudo.uf;
    }else{
        limpa_formulario();
        alert("CEP não encontrado!");
    }
}

function pesquisa_cep(valor){
    var cep = valor.replace(/\D/g, "");

    if(cep != ""){

        var valida_cep = /^[0-9]{8}$/;

        if(valida_cep.test(cep)){

            //Mostra os 3 pontos nos campos em caso de demora na devolutiva do CEP
            document.getElementById("i_rua").valor = "...";
            document.getElementById("i_bairro").valor = "...";
            document.getElementById("i_cidade").valor = "...";
            document.getElementById("i_estado").valor = "...";

            var script = document.createElement("script");

            //Link do viacep/ws/o cep digitado no formulario/json/?retorna o resultado = coloca na função "atualiza_formulario"
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=atualiza_formulario`;

            //cria o elemento script e o coloca no html, pois ele é "filho" do body
            document.body.appendChild(script);

        }else{
            limpa_formulario();
            alert("Formato de CEP inválido!");
        }

    }else{
        limpa_formulario();
    }
}