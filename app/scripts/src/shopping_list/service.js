import {ShoppingListItem} from "./item"; // imports someText in addition to default.
import {ShoppingListRepository} from "./reop"; // imports someText in addition to default.

export default class ShoppingListService{
  constructor(repository){
    this.repo = repository;
  }

  create(taskDescription){
    let item = new ShoppingListItem(taskDescription);
    this.repo.add(item);
  }

  deleteById(id){
    this.repo.deleteById(id);
  }

  getAll(){
    return this.repo.getAll();
  }
}
