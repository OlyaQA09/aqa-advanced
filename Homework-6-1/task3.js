function checkOrder (available, ordered){
const check1 = ordered > available ? "Your order is too large, we don’t have enough goods." : "Your order is accepted";
const check2 = ordered == 0 ? "Your order is empty" : check1;
return check2;
}

console.log(checkOrder (2, 2));
