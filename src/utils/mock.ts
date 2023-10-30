const produtos = [
 
  {
    categoria: 'Comida',
    items: [
      {
        id: 2,
        titulo: 'X-salada',
        preco: '30,00R$',
        imageUrl: 'https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp',
        rating: 4.0,
        promotion: '5% OFF'
      },
      {
        id: 3,
        titulo: 'Cherry Healthy',
        preco: '25,00R$',
        imageUrl:  'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-corona-330ml_1_1627697666.jpg',
        rating: 4.5,
        promotion: '10% OFF'
      },
      {
        id: 4,
        titulo: 'Produto',
        preco: '30,00R$',
        imageUrl: 'https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp',
        rating: 4.0,
        promotion: '5% OFF'
      },
      // ... outros produtos de comida
    ]
  } ,
  {
    categoria: 'Cerveja',
    items: [
      {
        id: 1,
        titulo: 'Cherry Healthy',
        preco: '25,00R$',
        imageUrl:  'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-corona-330ml_1_1627697666.jpg',
        rating: 4.5,
        promotion: '10% OFF'
      },
      {
        id: 2,
        titulo: 'Cherry Healthy',
        preco: '25,00R$',
        imageUrl:  'https://teravirt.s3-accelerate.amazonaws.com/uploads/sites/95/2021/08/bebfesta-cerveja-heineken-600ml-1.jpeg',
        rating: 4.5,
        promotion: '10% OFF'
      },
      {
        id: 3,
        titulo: 'Cherry Healthy',
        preco: '25,00R$',
        imageUrl:  'https://cdn.awsli.com.br/300x300/292/292155/produto/20389543/c582ba4b92.jpg',
        rating: 4.5,
        promotion: '10% OFF'
      },
      {
        id: 4,
        titulo: 'Cherry Healthy',
        preco: '25,00R$',
        imageUrl:  'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-corona-330ml_1_1627697666.jpg',
        rating: 4.5,
        promotion: '10% OFF'
      },
    ]
  },
   {
    categoria: 'Sobremessa',
    items: [
      {
        id: 3,
        titulo: 'Produto SP',
        preco: '35,00R$',
        imageUrl: 'https://www.socialbauru.com.br/wp-content/uploads/2019/09/sobremesa-premio-impera-bauru-1240x540.png',
        rating: 4.3,
        promotion: '15% OFF',
        quantidade:4
      },
      {
        id: 4,
        titulo: 'Produto SP',
        preco: '35,00R$',
        imageUrl: 'https://www.socialbauru.com.br/wp-content/uploads/2019/09/sobremesa-premio-impera-bauru-1240x540.png',
        rating: 4.3,
        promotion: '15% OFF'
      },
      {
        id: 5,
        titulo: 'Produto SP',
        preco: '35,00R$',
        imageUrl: 'https://www.socialbauru.com.br/wp-content/uploads/2019/09/sobremesa-premio-impera-bauru-1240x540.png',
        rating: 4.3,
        promotion: '15% OFF'
      },
      
    ]
  }
  ,
]

const carrinhoMock = [
  {
    id:1,
    nome: 'Produto 1',
    preco: 30.00,
    quantidade: 2,
  },
  {
    id:2,
    nome: 'Produto 2',
    preco: 25.00,
    quantidade: 1,
  },
];


export { produtos ,carrinhoMock};
