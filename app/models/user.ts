import { ICartItem } from './cartItem';
import { ILocation } from './location';

export interface IUser {
  isLoggedIn: boolean;
  isNewUser: boolean;
  uid: string;
  anonymousId?: string;
  isAnonymous: boolean;
  providerId?: string;
  email?: string;
  emailVerified?: string;
  fullName?: string;
  phoneNumber?: string;
  deliveryAddress?: any;
  location: {
    long: number | null;
    lat: number | null;
  };
  cart: {
    cart: ICartItem[];
    cost: ICart;
  };
}

export interface IAnonymousUser {
  isNewUser: true;
  isLoggedIn: false;
  location: ILocation;
  cart: {
    cart: ICartItem[];
    cost: ICart;
  };
}

export interface ICart {
  subTotal: number;
  estimatedTax: number;
  deliveryFee: number;
  serviceFee: number;
  estimatedTotal: number;
}
