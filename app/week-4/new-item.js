"use client";
import {React, useState} from 'react';
function Button(){
    const [quantity, setQ]=useState(0);
    
const SetQuantity=(event)=> {
    if (event.target.value==='+')
        if(count > 20)
            alert('You have reached the maximum quantity of 20');
        else
        setQ(quantity+1);
    else if(event.target.value==='-')
        if (count<0)
            alert('You have reached the minimum quantity of 0');
        else
        setQ(quantity-1);
    else
    setQ(0);  
    
}
return <div>
    <Button onClick={SetQuantity} value='+'>+</Button>
    <Button onClick={SetQuantity} value='-'>-</Button>
    <Button onClick={SetQuantity} value='clear'>Clear</Button>
</div>
}