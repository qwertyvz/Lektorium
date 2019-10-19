let price = 25;//prompt('Введите цену товара:', 20);
let cashReceived = 100;//prompt('Введите полученную купюру:', 100);
let cashStack = [100, 50, 20, 10, 5, 2, 1];

giveChange(cashReceived, price, cashStack);

function giveChange(cashReceived, price, cashStack) {
  let change = cashReceived - price;
  let usedCash = [];


    for (var i = 0; i < cashStack.length; i++) {
      while (change >= cashStack[i]) {
        usedCash.push(cashStack[i]);
        change -= cashStack[i];
      }
      if (change === 0) break;
    }

  console.log(usedCash);
}
