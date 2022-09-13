const fs = require("fs");
const file = "cart.json"

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
    // print();
    // console.log("success");
  } catch (e) {
    console.log(e);
  }
};
const checkPrice = (item) => {
   let price =0;
   if(item.toLowerCase() === "apple"){
      price =4.95;
   } else{
      price =3.99;
   }
   return price;
};
const add = (item, qty) => {
   if(item.toLowerCase() === "apple" || item.toLowerCase() === "orange"){
     let cart = readFile(file);
     var totalPrice = parseFloat((qty*checkPrice(item)).toFixed(2));
     let index = cart.findIndex(x => x.item === item);
     if (index === -1) {
       cart.push({ item, qty , totalPrice});
     } else {
       cart[index].totalPrice += totalPrice;
       cart[index].qty += qty;
     }
     writeFile(file, cart);}
   else{
      console.log("Sorry, we don't have that in stock");
   }
};
const remove = (item, qty) => {
   let cart = readFile(file);
   var totalPrice = parseFloat((qty*checkPrice(item)).toFixed(2));
   let index = cart.findIndex(x => x.item === item);
   if (index === -1) {
      console.log("You don't have that item in your cart");
   }
   else {
      //if user tries to remove more than or equals to what is in the cart just remove all.
      if(cart[index].qty-qty<=0){
         removeAll(item);
      }
      else{
         cart[index].totalPrice = Math.round((cart[index].totalPrice-totalPrice)*1000)/1000;
         cart[index].qty -= qty;
      }
   }
   writeFile(file, cart);
};

const removeAll = item => {
  let cart = readFile(file);

  const filteredList = cart.filter(x => x.item !== item);

  writeFile(file, filteredList);
};

const clearCart = () => {
  let cart = readFile(file);

  fs.unlink(file, (err) => {
	console.log('Cart Cleared...');
   });
};
const cartTotal = () => {
  let cart = readFile(file);
  if(cart.length<2){
     return(cart[0]?.totalPrice);
 } else{
    return(cart[0]?.totalPrice+cart[1]?.totalPrice);
   }
};

const print = () => {
  let cart = readFile(file);

  console.log(cart);
  console.log(cartTotal());
};

module.exports = {
  add,
  remove,
  removeAll,
  clearCart,
  cartTotal,
  print
};
