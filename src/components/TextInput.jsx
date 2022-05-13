import React, { useState } from 'react';

const TextInput = () => {
    const [name, setName] = useState('');
    const handleName = (event) => { 
        // console.log(event.target.value);
        setName(event.target.value);
    }

    return (
        <input type={'text'} value={name} onChange={handleName} />
    );

}

export default TextInput;