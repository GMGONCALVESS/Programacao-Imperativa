// Ol�, voc� foi contratado para executar este projeto. � importante que voc� analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 op��es de comida com seus respectivos tempos pr�-definidos. 

//       1 - Pipoca ? 10 segundos (padr�o);
//       2 - Macarr�o ? 8 segundos (padr�o);
//       3 - Carne ? 15 segundos (padr�o);
//       4 - Feij�o ? 12 segundos (padr�o);
//       5 - Brigadeiro ? 8 segundos (padr�o); 

// - O usu�rio poder� alterar o tempo padr�o, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necess�rio, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padr�o, exibir a mensagem: "tempo insuficiente"; 
// - Op��es n�o listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necess�rio para o prato, o microondas deve exibir a mensagem: ?kabumm?;
// - No final de cada tarefa, o microondas dever� exibir a mensagem: "Prato pronto, bom apetite!!!".

function microondas(opcao, tempo){
        console.log("Este � o nosso menu:")
        console.log("1 - Pipoca ? 10 segundos")
        console.log("2 - Macarr�o ? 8 segundos")
        console.log("3 - Carne ? 15 segundos")
        console.log("4 - Feij�o ? 12 segundos")
        console.log("5 - Brigadeiro ? 8 segundos")
        console.log("\n")

    switch(opcao){
        case 1: //Pipoca-10s
            if(tempo > 20){
                console.log("A comida queimou!!!")
            }else if(tempo < 10){
                console.log("Tempo insuficiente")
            }else if(tempo > 30){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 2: //Macarrao-8s
            if(tempo > 16){
                console.log("A comida queimou!!!")
            }else if(tempo < 8){
                console.log("Tempo insuficiente")
            }else if(tempo > 24){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 3: //Carne-3s
            if(tempo > 6){
                console.log("A comida queimou!!!")
            }else if(tempo < 3){
                console.log("Tempo insuficiente")
            }else if(tempo > 9){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 4: //Feijao-12s
            if(tempo > 24){
                console.log("A comida queimou!!!")
            }else if(tempo < 12){
                console.log("Tempo insuficiente")
            }else if(tempo > 36){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 5: //Brigadeiro-8s
            if(tempo > 16){
                console.log("A comida queimou!!!")
            }else if(tempo < 8){
                console.log("Tempo insuficiente")
            }else if(tempo > 24){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        default: //Nenhuma das op��es
            console.log("Op��o inv�lida!!!")
            break;
    }
}

microondas(20,17)