export interface CommandInterface{
  id?: string;
  user?: string;
  nameClient?: string;
  tableNumber?: number;
  timeProcess?: number;
  state?: boolean;
  products?: [{
    product?: string,
    price?: number,
    idproducts?: string,
    quantity?: number
  }];
  userUid?:string;
}