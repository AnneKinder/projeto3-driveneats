let pratoselecionado;
let bebidas;
let sobremesas;
let opcao1;
let opcao2;
let opcao3;


function selecPrato(pratoClicado) { //pode colocar elemento que nao está no HTML, pois usou o this. só vai usar esse elemento pra add classe no js.
     pratoselecionado = document.querySelector(".tudo .feed .prato .greenborder");
    if (pratoselecionado !== null) { //se tiver algum já selecionado -> retira .greenborder
      pratoselecionado.classList.remove("greenborder");
    }

    pratoClicado.classList.add("greenborder"); //faz esse primeiro: adicionar a classe no clicado;
    mudaBotao()
  }

  
function selecBebida(bebidaClicada) {
      bebidas = document.querySelector(".tudo .feed .bebida .greenborder");
    if (bebidas !== null) {
      bebidas.classList.toggle("greenborder");
    }

    bebidaClicada.classList.toggle("greenborder");
    mudaBotao()
  }

  
function selecSobre(sobreClicada) {
     sobremesas = document.querySelector(".tudo .feed .sobremesa .greenborder");
    if (sobremesas !== null) {
      sobremesas.classList.toggle("greenborder");
    }

    sobreClicada.classList.toggle("greenborder");
    mudaBotao()
    
  }


  //pop up finalizar pedido (bônus) (não finalizado)
  function podePedir(){
   opcao1 = document.querySelector(".tudo .feed .prato .greenborder h1").innerHTML;
   preco1= document.querySelector(".tudo .feed .prato .greenborder h3").innerHTML;

   opcao2 =  document.querySelector(".tudo .feed .bebida .greenborder h1").innerHTML;
   preco2 = document.querySelector(".tudo .feed .bebida .greenborder h3").innerHTML;
 

    opcao3 = document.querySelector(".tudo .feed .sobremesa .greenborder h1").innerHTML;
    preco3 = document.querySelector(".tudo .feed .sobremesa .greenborder h3").innerHTML;

    document.querySelector(".h1-1")
    document.querySelector(".h3-1").innerHTML=opcao1;

    document.querySelector(".h1-2").innerHTML
    document.querySelector(".h3-2").innerHTML

    document.querySelector(".h1-3").innerHTML
    document.querySelector(".h3-3").innerHTML
    } 
    //pop up finalizar pedido (bônus) (não finalizado) 

    
    
    
    function mudaBotao(){
      let botao = document.getElementsByClassName("fecharfinal");
      const qtselecionados = document.getElementsByClassName("greenborder").length;

      if ( qtselecionados == 3){ {
        botao[0].classList.remove("escondido");
        }
    }

    //OPCÕES TESTADAS:
    //if(pratoselecionado == 1 && bebidas == 1 && sobremesas == 1)
    // document.getElementsByClassName("fecharfinal").classList.remove("escondido");
    //etc etc...
    }

    
    
     function fecharPedido(){
      let precocomida = document.querySelector(".precocomida").innerHTML;
      let precobebida = document.querySelector(".precobebida").innerHTML;
      let precosobrem = document.querySelector(".precosobrem").innerHTML;

     let opcao1 = document.querySelector(".tudo .feed .prato .greenborder h1").innerHTML;
     let opcao2 =  document.querySelector(".tudo .feed .bebida .greenborder h1").innerHTML;
     let opcao3 = document.querySelector(".tudo .feed .sobremesa .greenborder h1").innerHTML;
   
      
        let precototal= Number(precocomida) + Number(precobebida) + Number(precosobrem);
      const mensagem = "Olá, gostaria de fazer o pedido:" + "\n"+
      "- Prato: " + opcao1 + "\n" +
      "- Bebida: " + opcao2 + "\n" +
      "- Sobremesa: "+ opcao3 + "\n" +
      "Total: R$" + precototal + ",00";
      const mensagemEncoded = encodeURIComponent(mensagem);
      const url = "https://wa.me/5511993325057?text=" + mensagemEncoded
      window.open(url, "_blank");
     }
    
    
  
