
function selecPrato(pratoClicado) { //pode colocar elemento que nao está no HTML, pois usou o this. só vai usar esse elemento pra add classe no js.
    const selecao = document.querySelector(".greenborder");
    if (selecao !== null) { //se tiver algum já selecionado -> retira .greenborder
      selecao.classList.toggle("greenborder");
    }

    pratoClicado.classList.toggle("greenborder"); //faz esse primeiro: adicionar a classe no clicado;
  }

  
function selecBebida(bebidaClicada) {
    const selecao = document.querySelector(".greenborder");
    if (selecao !== null) {
      selecao.classList.toggle("greenborder");
    }

    bebidaClicada.classList.toggle("greenborder");
  }

  
function selecSobre(sobreClicada) {
    const selecao = document.querySelector(".greenborder");
    if (selecao !== null) {
      selecao.classList.toggle("greenborder");
    }

    sobreClicada.classList.toggle("greenborder");
  }
