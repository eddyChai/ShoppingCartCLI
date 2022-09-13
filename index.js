const yargs = require("yargs");
const funcs = require("./funcs");

let command = yargs.argv._[0];
let item = yargs.argv._[1];
let qty = yargs.argv._[2];

if (command === "add") {
  if (item && qty) {
    funcs.add(item, qty);
  }
} else if (command === "remove") {
  if (item && qty) {
    funcs.remove(item, qty);
  }
} else if (command === "removeAll") {
  if (item) {
    funcs.removeAll(item);
  }
} else if (command === "clearCart") {
    funcs.clearCart();
} else if (command === "print") {
  funcs.print();
}else if (command === "cartTotal") {
  funcs.cartTotal();
} else {
  console.log("nothing");
}
