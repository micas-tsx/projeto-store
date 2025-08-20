export const data = {
  banners: [
    { img: '/assets/banners/banner-1.png', link : '' },
    { img: '/assets/banners/banner-2.png', link : '' },
    { img: '/assets/banners/banner-3.png', link : '' },
    { img: '/assets/banners/banner-4.png', link : '' },
  ],
  products: [
    { id: 1, label: 'Camisa PHP', price: 49.90, image: '/assets/products/camiseta-php.png', liked: false },
    { id: 2, label: 'Camisa Laravel', price: 50.90, image: '/assets/products/camiseta-laravel-branca.png', liked: false },
    { id: 3, label: 'Camisa Node', price: 60.80, image: '/assets/products/camiseta-node.png', liked: false },
    { id: 4, label: 'Camisa React', price: 51.70, image: '/assets/products/camiseta-react-preta.png', liked: false },
  ],
  product: {
    id: 1,
    label: 'Camisa PHP',
    images: [
     '/assets/products/camiseta-php.png',
     '/assets/products/camiseta-php-grafite.png'
    ],
    price: 49.90,
    liked: false,
    description: 'Alguma description muito foda para produto omg'
  },
  addresses: [
    {id: 1, zipcode: '12345', street: 'Rua teste 1', number: '123', city: 'cidade 1', state: 'estado 1', country: 'pais 1'},
    {id: 2, zipcode: '67891', street: 'Rua teste 2', number: '456', city: 'cidade 2', state: 'estado 2', country: 'pais 2'},
    {id: 3, zipcode: '98765', street: 'Rua teste 3', number: '789', city: 'cidade 3', state: 'estado 3', country: 'pais 3'}
  ]
}