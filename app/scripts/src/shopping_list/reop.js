// Todo store
import {ShoppingListItem} from "./item";

class ShoppingListRepository{
  constructor(){
    this.items = [];
  }

  add(item){
    this.items.push(item);
  }

  deleteById(id){
    this.items = this.items.filter( td => td.id !== id);
  }

  getAll(){
    return this.items.map(e => e);
  }
}

export  {ShoppingListRepository};
