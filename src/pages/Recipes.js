import React, {useState} from 'react'
import Card from "../components/Card"
import items from '../allData';
import Button from '../components/Button'
import Chatbot from '../components/Chatbot'


const allCategories = ['All', ...new Set(items.map(item => item.category))];


function Recipes() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) => {
        if(button === 'All'){
        setMenuItem(items);
        return;
    }

        const filteredData = items.filter(item => item.category ===  button);
        setMenuItem(filteredData);
  }
    return (
        <div className="pb-16">
            <Chatbot className="-translate-y-10" />
            <Button button={buttons} filter={filter}/>
            <Card menuItem={menuItem}/>
        </div>
        
    )
}

export default Recipes;