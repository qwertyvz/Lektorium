let price = 25;//prompt('Введите цену товара:', 20);
let cashReceived = 700;//prompt('Введите полученную купюру:', 100);
let cashStack = [1, 10, 20, 50, 100, 2, 5];

console.log(giveChange(cashReceived, price, cashStack));

function giveChange(cashReceived, price, cashStack) {
  if (cashReceived < price)
    return "Not enough money";

  let change = cashReceived - price;
  let usedCash = [];
  cashStack.sort((a,b)=>{return b-a;});

  for (let i = 0; i < cashStack.length; i++) {
    while (change >= cashStack[i]) {
      usedCash.push(cashStack[i]);
      change -= cashStack[i];
    }
    if (change === 0) break;
  }

  return usedCash;
}
