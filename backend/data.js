import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "igor",
      email: "admin@ntwali.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "son",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "nike slim shirt",
      slug: "nike-slim-shirt",
      category: "shirts",
      image: "/images/nike-shirts.webp",
      price: 123,
      countInStock: 12,
      brand: "nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirts ",
    },
    {
      name: "adiddas slim shirt",
      slug: "adiddas-slim-shirt",
      category: "shirts",
      image: "/images/p2.jpg",
      price: 124,
      countInStock: 0,
      brand: "adiddas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirts ",
    },
    {
      name: "puma slim pants",
      slug: "puma-slim-pants",
      category: "pants",
      image: "/images/p3.jpg",
      price: 120,
      countInStock: 10,
      brand: "puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality puma pants ",
    },
    {
      name: "lacoste slim pants",
      slug: "lacoste slim pants",
      category: "shirts",
      image: "/images/p4.jpg",
      price: 120,
      countInStock: 10,
      brand: "lacoste",
      rating: 4.5,
      numReviews: 10,
      description: "high quality lacoste pants",
    },
  ],
};

export default data;
