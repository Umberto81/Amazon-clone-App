import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
      name: 'Jeff',
      email: 'Jeff@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'John',
      email: 'John@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,

    }
  ],
  products: [
    {
      name: "Nike Shirt",
      slug: "nike-shirt",
      category: "Shirts",
      image: "../images/nike1.webp",
      price: 120,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
      countInStock: 2,
    },
    {
      name: "Adidas fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "../images/p5.webp",
      price: 120,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "High quality product",
      countInStock: 4,
    },
    {
      name: "Lacoste Shirt",
      slug: "lacoste-shirt",
      category: "Shirts",
      image: "../images/lacoste.jpg",
      price: 300,
      brand: "Lacoste",
      rating: 2.5,
      numReviews: 5,
      description: "High quality product",
      countInStock: 0,
    },
    {
      name: "Pants Adidas",
      slug: "adidas-pants",
      category: "Pants",
      image: "../images/p3.webp",
      price: 80,
      brand: "Adidas",
      rating: 2.5,
      numReviews: 3,
      description: "High quality product",
      countInStock: 20,
    },
    {
      name: "Puma",
      slug: "puma-shirt",
      category: "Pants",
      image: "../images/p4.webp",
      price: 80,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
      countInStock: 5,
    },
    {
      name: "Adidas Shirt",
      slug: "adidas-shirt",
      category: "Shirts",
      image: "../images/p2.jpeg",
      price: 350,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 20,
      description: "High quality product",
      countInStock: 0,
    },
  ],
};

export default data;
