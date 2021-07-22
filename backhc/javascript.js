const items = [
    {
      id: 0,
      nome: " Samsung Galaxy Note 20 Ultra 256GB ",
      valor:"R$ 5.309,09",
      img: "assets/1962216988_1GG.jpg",
      quantidade: 0,
    },

    {
      id: 1,
      nome: " Smartphone Samsung Galaxy S21 Ultra 256GB ",
      valor:"R$ 6.648,57",
      img: "assets/samsung21.jpg",
      quantidade: 0,
    },

    {
      id: 2,
      nome: "Carregador Samsung Original 45W TA845",
      valor:"R$ 142,90",
      img: "assets/carregador.jpg",
      quantidade: 0,
    },

    {
      id: 3,
      nome: "Fone de Ouvido Wireless Samsung Galaxy Buds Pro",
      valor:"R$ 926,90",
      img: "assets/fone.jpg",
      quantidade: 0,
    },

    {
        id: 4,
        nome: "iPhone 11 Apple (128GB) Preto tela 6,1",
        valor:"R$ 926,90",
        img: "assets/iphone11.jpg",
        quantidade: 0,
      },

      {
        id: 5,
        nome: "Carregador Usb e Cabo Apple  12/11/x/xr",
        valor:"R$ 52,12",
        img: "assets/carregadoriphone.jpg",
        quantidade: 0,
      },

      {
        id:6 ,
        nome: "AirPods com Estojo de Recarga Sem Fio - Apple",
        valor:"R$ 1.399,00",
        img: "assets/foneiphone.jpg",
        quantidade: 0,
      },

      {
        id: 7,
        nome: "Apple Watch Series 3 (GPS) 38mm Caixa Cinza ",
        valor:"R$ 2.174,86",
        img: "assets/smart.jpg",
        quantidade: 0,
      },
  ];

  inicializarLoja = () => {
    var containerProdutos = document.getElementById("produtos");
    items.map((val) => {
      containerProdutos.innerHTML +=
        `
           <div class= "produto-single">
            <img src = "`+val.img +`"/>
            <p>`+val.nome +`</p>
            <p>`+val.valor +`</p>
            <a key="`+val.id +`" href="#">Adicionar ao carrinho!<a/>
            </div>
           `;
    });
  };

  inicializarLoja();

  atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    items.map((val) => {
      if (val.quantidade > 0) {
        containerCarrinho.innerHTML +=`
           <div class="info-single-checkout">
           <p style="float:left;">Produto:  `+val.nome+` </p>
           <p style="float:right;">Quantidade:  `+val.quantidade +`</p>
           <div style="clear:both"></div>
         
           </div>
           `;
      }
    });
  };

  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      items[key].quantidade++;
      atualizarCarrinho();
      return false;
    });
  }

  /* cadastro clientes */

  function cadastrar() {

    
    
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
    let cpf = document.querySelector('#cpf').value
    let endereco = document.querySelector('#endereco').value
    let numero = document.querySelector('#numero').value
    let complemento = document.querySelector('#complemento').value
    let bairro = document.querySelector('#bairro').value
    let cep = document.querySelector('#cep').value
    let cidade = document.querySelector('#cidade').value
    let uf = document.querySelector('#estado').value
    
    let data = {
    
        nome,
        email,
        telefone,
        cpf,
        endereco,
        numero,
        complemento,
        bairro,
        cep,
        cidade,
        uf
    }
    
    let convertData = JSON.stringify(data);
    
    
        if (localStorage.idAtual) {
            localStorage.idAtual = Number(localStorage.idAtual) + 1;
            localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
        } else {
            localStorage.idAtual = 1;
            localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
          }
          alert('Cliente cadastrado com sucesso!');
          document.getElementById("formCliente").reset();
    
    }