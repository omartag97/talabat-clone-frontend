import { Injectable } from '@angular/core';

const CART_KEY = 'cart';
const REST_KEY = 'restName';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }


  public setRest(restName:string, deliveryFee:number):void{
    const temp = {'restName':restName,'deiveryFee':deliveryFee};
    window.sessionStorage.setItem(REST_KEY,JSON.stringify(temp));

  }

  public getRest():any{
  let temp = window.sessionStorage.getItem(REST_KEY);
  console.log(temp);
  if(temp)
    return JSON.parse(temp);
  return null;
  }

  public getCart(): [] {
    const cart =  window.sessionStorage.getItem(CART_KEY);
    if(cart)
      return JSON.parse(cart);
    return [];
  }
  public updateCart(id:any, count:number):void{

    let temp = window.sessionStorage.getItem(CART_KEY);
    let arr = [];
    if(temp)
    {
      arr = JSON.parse(temp);

    }
    arr.forEach((element: { id: any; count: number; }) => {
      if(element.id == id){
        element.count = count;
      }
    });
    window.sessionStorage.setItem(CART_KEY, JSON.stringify(arr));

  }

  deleteCart(id:any):void{
    let temp = window.sessionStorage.getItem(CART_KEY);
    let arr:{}[] = [];
    if(temp)
    {
      arr = JSON.parse(temp);

    }
    let idx = arr.indexOf({'id':id});
    arr.splice(idx, 1);

    window.sessionStorage.setItem(CART_KEY, JSON.stringify(arr));
  }

  public addToCart(id: any, price:number): void {
    const item = {'id' : id, 'count' : 1, 'price' : price};
    let found = false;
    let temp = window.sessionStorage.getItem(CART_KEY);
    let arr = [];
    if(temp)
    {
      arr = JSON.parse(temp);

    }
    arr.forEach((element: { id: any; count: number; }) => {
      if(element.id == item.id){
        element.count ++;
        found = true;
      }
    });
    if(!found)
      arr.push(item);
    window.sessionStorage.setItem(CART_KEY, JSON.stringify(arr));
  }

  public deleteAll():void{
      window.sessionStorage.removeItem(CART_KEY);
  }

}
