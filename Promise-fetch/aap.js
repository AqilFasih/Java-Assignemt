
// login(getUserData);

let productsArr = [];
function getProductsFromApi(callBack) {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((products) => {
      console.log("products==>", products);
      callBack(products);
    });
}
// let productsArr = [];
// function getProductsFromApi(callBack) {
//   fetch("https://api.escuelajs.co/api/v1/products")
//     .then((res) => res.json())
//     .then((products) => {
//       console.log("products==>", products);
//       callBack(products);
//     });
// }

// function displayProducts(products) {
//   console.log("See all products", products);
// }
// function displayProducts(products) {
//   console.log("See all products", products);
// }

// getProductsFromApi(displayProducts);

// let token = "";

// function login(callback) {
//   setTimeout(() => {
//     console.log("User is Logged In");
//     token = "ABCD";
//     callback();
//   }, 300);
// }

// getProductsFromApi(displayProducts);
// function getUserData() {
//   setTimeout(() => {
//     console.log("token=>", token);
//     if (token) {
//       const user = {
//         fullName: "Bilal Raza",
//       };
//       return user;
//     }
//   }, 1000);
// }

// login(getUserData);
// getUserData();

// let isValid = false;

// const p = new Promise((resolve, reject) => {
//   if (isValid) {
//     resolve("kaam hogya");
//   } else {
//     reject("Kaam aapka nahn hosaka");
//   }
// });

// p.then((data) => console.log(data))
// .catch((err) => console.log("error=>", err));

// let isValid = false;

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isValid) {
//         resolve("ABCD");
//       } else {
//         reject("Server is down");
//       }
//     }, 500);
//   });
// }

// login()
//   .then((token) => {
//     console.log("User is logged In");
//     getUserData(token);
//   })
//   .catch((err) => console.error(err));

// function getUserData() {
//   setTimeout(() => {
//     const user = {
//       fullName: "Bilal Raza",
//     };
//     console.log(user)
//     return user;
//   }, 1000);
// }
// let products = [];

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     products = data;
//     displayProducts();
//   });

// function displayProducts() {
//   let list = document.getElementById("list");
//   products.forEach((data) => {
//     let li = `<li>${data.title} ($${data.price})</li>`;
//     list.innerHTML += li;
//   });
// }

//A = ARRAY WITH PRODUCTS
//B = EMPTY ARRAY