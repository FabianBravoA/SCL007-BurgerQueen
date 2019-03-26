export interface CommandInterface{
  id?: string;
  user?: string;
  nameClient?: string;
  tableNumber?: number;
  timeProcess?: number;
  state?: boolean;
  products?: [{
    name?: string,
    price?: number,
    idproducts?: string
  }];
  userUid?:string;
}