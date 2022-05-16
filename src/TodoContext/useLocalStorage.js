import React from "react";

function useLocalStorage (itemName,initialValue) {
    const [loading,setLoading] = React.useState(true)
  
    const [item,setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
      setTimeout(() => {
  
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      },1500)
    });
  
    
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
    
    return{
      item,
      saveItem,
      loading,
    }
  
    // return[
    //   item,
    //   saveItem
    // ];
}

export {useLocalStorage} 