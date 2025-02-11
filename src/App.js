import Logo from "./components/Logo.js";
import Form from "./components/Form.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";

import "./index.css";

import { useState } from "react";


export default function App(){
  const [items, setItems] = useState([]);

    function handleAddItems(item){
      setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id){
      setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id){
      setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
    }

    function handleClear(){
      const confirmed = window.confirm("Are you sure you want to delete all items?")
      if(confirmed) setItems([]);
    }

  return <div className="app">
      <Logo />
      <Form onAddList={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClear}/>
      <Stats items={items} />
  </div>
}