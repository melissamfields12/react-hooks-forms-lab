import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All" && search === "") return true;
        return (item.category === selectedCategory || item.name.includes(search));
      })

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange}
      onSearchChange={onSearchChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} search={onSearchChange} />
        ))}        
      </ul>
    </div>
  );
}

export default ShoppingList;
