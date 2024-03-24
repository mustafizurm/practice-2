


// practice-2



// database-
let listProduct = [];


// // navigation show-hide-part-1

// navigation show
const countIcons = document.querySelector(".count-icons");
const navigation = document.querySelector(".navigation");
countIcons.addEventListener("click", () => {
  navigation.classList.add("show");
});

// navigation hide

const crossIcons = document.querySelector(".fa-x");
crossIcons.addEventListener("click", () => {
  navigation.classList.remove("show");
});

// // add to cart part-2

const addToCartBtns = document
  .querySelector(".food-container")
  .querySelectorAll("button");
addToCartBtns.forEach((cardBtn) => {
  cardBtn.addEventListener("click", (e) => {

    const buttonParent = e.target.parentNode;
    const card = buttonParent.parentNode;
    const cardparent = card.parentNode;

    //   create a object from card
    const foodTitle = card.querySelector(".food-title").innerText;
    const foodPrice = card.querySelector(".food-price").innerText;
    const imgs = cardparent.querySelector(".images");
    const img = imgs.getElementsByTagName("img")[0].src;

    const newProductObj = {
      title: foodTitle,
      price: foodPrice,
      img: img,
    };

    /* check if the item already  exist in array or not */
    let isExist = listProduct.find((singleProduct) => singleProduct.title === newProductObj.title);
    if (!isExist) {

      listProduct.push(newProductObj);
      
      const allCart = document.querySelector(".all-cart");
      
      /* clear everything before adding new items */
      /* as our listProduct is a global variable so we should clear it (.all-cart) to reduce */
      /* repetition of same item */
      allCart.innerHTML = ''; 
       
      listProduct.forEach((singleProduct)=>{

        console.log(singleProduct);
  
      allCart.innerHTML += `
      
     <div class="cart">
          <div class="images">
              <img src="${singleProduct.img}">
          </div>
          <div class="cart-details">
              <h4>${singleProduct.title}</h4>
              <p>${singleProduct.price}</p>
          </div>
          <div class="delete">
              <span>${singleProduct.price}</span>
              <i class="fa-solid fa-trash deleteButton"></i>
          </div>
     </div>
      
     `
      })
    }
    else{
      alert("this product is already added!");
      return;
    }


   


  });
});




































// //

// // navigation show-hide-part-1

// // navigation show
// const countIcons = document.querySelector(".count-icons");
// const navigation = document.querySelector(".navigation");
// countIcons.addEventListener("click", () => {
//   navigation.classList.add("show");
// });

// // navigation hide

// const crossIcons = document.querySelector(".fa-x");
// crossIcons.addEventListener("click", () => {
//   navigation.classList.remove("show");
// });

// const arr = [];

// // add to cart part-2

// const addToCartBtns = document
//   .querySelector(".food-container")
//   .querySelectorAll("button");
// addToCartBtns.forEach((cardBtn) => {
//   cardBtn.addEventListener("click", (e) => {
//     const buttonParent = e.target.parentNode;
//     const card = buttonParent.parentNode;
//     const cardparent = card.parentNode;

//     //   create a object from card
//     const foodTitle = card.querySelector(".food-title").innerText;
//     const foodPrice = card.querySelector(".food-price").innerText;
//     const imgs = cardparent.querySelector(".images");
//     const img = imgs.getElementsByTagName("img")[0].src;
//     console.log(img);

//     const newProductObj = {
//       title: foodTitle,
//       price: foodPrice,
//       img: img
//     };

//     arr.push(newProductObj)

//     const count = document.querySelector(".absolute-count");
//     count.innerText = arr.length;

//     const allCartContainer = document.querySelector(".all-cart");

//     allCartContainer.innerHTML += `

//     <div class="cart">
//          <div class="images">
//              <img src="${newProductObj.img}">
//          </div>
//          <div class="cart-details">
//                  <h4>${newProductObj.title}</h4>
//                  <p>${newProductObj.price}</p>
//                  range
//          </div>
//          <div class="delete">
//              <span><p>${newProductObj.price}</p></span>
//              <i class="fa-solid fa-trash deleteButton"></i>
//          </div>
//     </div>

//     `;

//   });
// });

// //   create a array for all products
// const productList = [];
//     //   duplicate data will not select

//        if (productList.find((el) => el.title == newProductObj.title)) {
//         alert("Product already has been added");
//         return;
//       } else {
//         productList.push(newProductObj);
//       }

//     //   count shoping cart
//     const count = document.querySelector(".absolute-count");
//     count.innerText = productList.length;

// next

// const navigationCrossBtn = document.querySelector(".fa-x");
// const navigation = document.querySelector(".navigation");

// const countIcons = document.querySelector(".count-icons");

// navigationCrossBtn.addEventListener("click", () => {
//   navigation.classList.remove("show");
// });

// countIcons.addEventListener("click", () => {
//   navigation.classList.add("show");
// });

// //

// const addToCartBtn = document
//   .querySelector(".food-container")
//   .querySelectorAll("button");

// const itemList = [];

// const getItem = (item) => {
//   const name = item.querySelector(".food-title").innerText;
//   const price = item.querySelector(".food-price").innerText;

//   const newProduct = {
//     name: name,
//     price: price,
//   };

//   if (itemList.find((el) => el.name == newProduct.name)) {
//     alert("Product already has been added");
//     return;
//   } else {
//     itemList.push(newProduct);
//   }

//   const allCart = document.querySelector(".all-cart");
//   allCart.innerHTML += `

//    <div class="cart">
//         <div class="images">
//             <img src="">
//         </div>
//         <div class="cart-details">
//                 <h4>${newProduct.name}</h4>
//                 <p>${newProduct.price}</p>
//                 range
//         </div>
//         <div class="delete">
//             <span><p>${newProduct.price}</p></span>
//             <i class="fa-solid fa-trash deleteButton"></i>
//         </div>
//    </div>

//    `;

//   //    remove

//   //    count

//   const count = document.querySelector(".absolute-count");
//   const realCounts = itemList.length;
//   count.innerHTML = realCounts;
// };

// addToCartBtn.forEach((singleBtn) => {
//   singleBtn.addEventListener("click", (e) => {
//     const btnParent = e.target.parentNode;
//     const item = btnParent.parentNode;
//     getItem(item);
//   });
// });

// // // remove btn
// // const removeBtn = document.querySelectorAll(".deleteButton");
// // removeBtn.forEach((rBtn) => {
// //   rBtn.addEventListener("click", (e) => {
// //     const currentBtn = e.target.parentNode;
// //     const parentItem = currentBtn.parentNode;
// //     parentItem.remove();
// //     console.log(parentItem.querySelector(".food-title"));
// //   });
// // });











// // practice- 1


// // // navigation show-hide-part-1

// // navigation show
// const countIcons = document.querySelector(".count-icons");
// const navigation = document.querySelector(".navigation");
// countIcons.addEventListener("click", () => {
//   navigation.classList.add("show");
// });

// // navigation hide

// const crossIcons = document.querySelector(".fa-x");
// crossIcons.addEventListener("click", () => {
//   navigation.classList.remove("show");
// });

// // // add to cart part-2

// const addToCartBtns = document
//   .querySelector(".food-container")
//   .querySelectorAll("button");
// addToCartBtns.forEach((cardBtn) => {
//   cardBtn.addEventListener("click", (e) => {
//     const buttonParent = e.target.parentNode;
//     const card = buttonParent.parentNode;
//     const cardparent = card.parentNode;

//     //   create a object from card
//     const foodTitle = card.querySelector(".food-title").innerText;
//     const foodPrice = card.querySelector(".food-price").innerText;
//     const imgs = cardparent.querySelector(".images");
//     const img = imgs.getElementsByTagName("img")[0].src;
//     console.log(img);

//     const newProductObj = {
//       title: foodTitle,
//       price: foodPrice,
//       img: img,
//     };

//     console.log(newProductObj);

//     const allCart = document.querySelector(".all-cart");
//     allCart.innerHTML += `
    
//    <div class="cart">
//         <div class="images">
//             <img src="${img}">
//         </div>
//         <div class="cart-details">
//             <h4>${newProductObj.title}</h4>
//             <p>${newProductObj.price}</p>
//         </div>
//         <div class="delete">
//             <span>${newProductObj.price}</span>
//             <i class="fa-solid fa-trash deleteButton"></i>
//         </div>
//    </div>
    
//     `

//   });
// });












