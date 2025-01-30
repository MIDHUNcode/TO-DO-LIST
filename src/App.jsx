import AddItem from './Additem';
import './App.css'
import Content from './Content';
import Footer from './footer';
import Header from './Header';
import { useState } from 'react';
import SearchItem from './Searchitem';

function App() {
      const [items,setItems]=useState
      (JSON.parse(localStorage.getItem("todo-list")));

      const [newItem, setNewItem] = useState('');
      const [search,setSearch]=useState('')

      const addItem=(item)=>{
        const id = items.length ? items[items.length - 1].id + 1 : 0; 
        const addNewItem={id,checked:false,item}
        const listItems=[...items,addNewItem]
        setItems(listItems)
        localStorage.setItem("todo-list",JSON.stringify(listItems))
      }
      const handleCheck=(key)=>
      {
        const check=items.map((item)=>
        item.id===key?{...item, checked:!item.checked}:item)
        setItems(check)
        localStorage.setItem("todo-list",JSON.stringify(check))
      }
      const handleDelete=(key)=>
      {
        const check=items.filter((item)=>
        item.id!==key)
        setItems(check)
        localStorage.setItem("todo-list",JSON.stringify(check))
      }
      const handleSubmit=(e)=>{
        e.preventDefault()
        if (!newItem) return;
        addItem(newItem)
        setNewItem('')
      }
  return (
    <div className='APP'>
      <Header title="TO DO LIST"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit= {handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App