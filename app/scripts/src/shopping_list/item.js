class ShoppingListItem{
  constructor(description){

    this.id = Math.random() + "_id";
    this.description = description;
    this.created = new Date();

    console.log("Creating ", this);
  }
}


export {ShoppingListItem};
