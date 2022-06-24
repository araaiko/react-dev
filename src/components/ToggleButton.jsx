import React, { useState, useEffect } from "react";

const ToggleButton = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(prevState => !prevState);        
    }

    useEffect(() => {
        console.log(open);
    });
    
    return (
        <button onClick={toggle}>
            {open ? 'OPEN' : 'CLOSE'}
        </button>
    );
}

export default ToggleButton;