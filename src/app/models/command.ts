export interface CommandInterface{
  id?: string;
  user?: string;
  nameClient?: string;
  tableNumber?: number;
  timeProcess?: any;
  state?: boolean;
  products?: [{
    product?: string,
    price?: number,
    quantity?: number
  }];
  userUid?: string;
}