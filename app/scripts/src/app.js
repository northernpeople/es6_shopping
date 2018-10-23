import {ShoppingListItem} from "./shopping_list/item";
import {ShoppingListRepository} from "./shopping_list/reop";
import ShoppingListService from "./shopping_list/service";


class App{
  constructor(){
    this.service = new ShoppingListService(new ShoppingListRepository());
  }

  run(){
    this.service.create("milk");
    let items = this.service.getAll();
    console.log(items);
  }
}

export default App;
