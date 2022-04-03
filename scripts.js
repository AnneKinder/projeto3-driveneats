
function selecPrato(pratoClicado) { //pode colocar elemento que nao está no HTML, pois usou o this. só vai usar esse elemento pra add classe no js.
    const pratoselecionado = document.querySelector(".tudo .feed .prato .greenborder");
    if (pratoselecionado !== null) { //se tiver algum já selecionado -> retira .greenborder
      pratoselecionado.classList.remove("greenborder");
    }

    pratoClicado.classList.add("greenborder"); //faz esse primeiro: adicionar a classe no clicado;
  }

  
function selecBebida(bebidaClicada) {
    const bebidas = document.querySelector("tudo .feed .bebida .greenborder");
    if (bebidas !== null) {
      bebidas.classList.toggle("greenborder");
    }

    bebidaClicada.classList.toggle("greenborder");
  }

  
function selecSobre(sobreClicada) {
    const sobremesas = document.querySelector(".tudo .feed .sobremesa .greenborder");
    if (sobremesas !== null) {
      sobremesas.classList.toggle("greenborder");
    }

    sobreClicada.classList.toggle("greenborder");
  }



  function fecharPedido(enviar){
    let opcao1 = document.querySelector(".tudo .feed .prato .greenborder h1").innerHTML;
    let preco1= document.querySelector(".tudo .feed .prato .greenborder h3").innerHTML;

    let opcao2 =  document.querySelector(".tudo .feed .bebida .greenborder h1").innerHTML;
    let preco2 = document.querySelector(".tudo .feed .bebida .greenborder h3").innerHTML;


    let opcao3 = document.querySelector(".tudo .feed .sobremesa .greenborder h1").innerHTML;
    let preco3 = document.querySelector(".tudo .feed .sobremesa .greenborder h3").innerHTML;

    

    }
