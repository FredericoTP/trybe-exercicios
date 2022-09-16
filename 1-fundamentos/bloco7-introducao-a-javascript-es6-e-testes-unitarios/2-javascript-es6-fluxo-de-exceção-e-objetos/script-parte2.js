// Parte II
// 1- Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”. 
// 2- Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.” 
// Modifique o nome da pessoa compradora. 
// Modifique o valor total da compra para R$ 50,00. 

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const keys = Object.keys(order.order.pizza);
  const value1 = Object.values(order.order.drinks.coke);
  const value2 = Object.values(order.payment);
  return `Olá ${order.name}, o total so seu pedido de ${keys[0]}, ${keys[1]} e ${value1[0]} é R$ ${value2[0]},00.`;
};

console.log(orderModifier(order));