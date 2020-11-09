import React, { useState } from 'react';

const REGEX = /^[0-9\b -]{0,13}$/;

const Page1 = ({ match: { params: { lolname }} }) => {

    const [number, setNumber] = useState(0);
    const [addnum, setAddNum ] = useState("");


    const increase = () => {
        setNumber(number + 1);
    };

    const decrease = () => {
        setNumber(number - 1);
    };



    const onChangeAddNumber = (ev) => {
        const { target: { value} } = ev;
        if (REGEX.test(value)) {
            setAddNum(value);
        }

    };

    const add = () => {
        setNumber(number+(addnum * 1));
    };

    const onKeyPress = (e) => {
        if(e.key=='Enter') {
            add();
        }
    }

    return (
        <div>
            <h1>Page1 Component value: {lolname}</h1>
            <h1>Number is {number}</h1>
            <div>
                <input value={addnum} onKeyPress={onKeyPress} onChange={onChangeAddNumber} />
                <button onClick={add}>add</button>
            </div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    );
}

export default Page1;