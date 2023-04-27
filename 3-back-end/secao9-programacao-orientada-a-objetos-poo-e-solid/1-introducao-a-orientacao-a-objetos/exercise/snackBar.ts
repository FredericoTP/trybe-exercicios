class Customer {
  private _name: string;

  constructor(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class menuItem {
  private _name: string;
  private _price: number;

  constructor(n: string, p: number) {
    this._name = n;
    this._price = p;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

class Order {
  private _customer: Customer;
  private _consumption: menuItem[] = [];
  private _paymentMethod: string;
  private _discount: number;

  constructor(cus: Customer, con: menuItem[], p: string, d: number) {
    this._customer = cus;
    this._consumption = con;
    this._paymentMethod = p;
    this._discount = d;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get consumption(): menuItem[] {
    return this._consumption;
  }

  set consumption(value: menuItem[]) {
    this._consumption = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }

  totalPrice(): number {
    return this._consumption.reduce((prev, acc) => { return prev + acc.price }, 0);
  }

  totalWithDiscount(): number {
    const total = this.totalPrice();

    return Math.round(total * (1 - this._discount));
  }
}