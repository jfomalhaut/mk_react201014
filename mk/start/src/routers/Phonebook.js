import React, { useState } from 'react';

const Phonebook = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [list, setList] = useState([]);

    const onChangeName = (event) => {
        const { target: { value } } = event;
        setName(value);
    };

    const onChangeAge = (event) => {
        const { target: { value } } = event;
        setAge(value);
    };

    const onChangephoneNum = (event) => {
        const { target: { value } } = event;
        setPhoneNum(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name,
            age,
            phoneNum,
            vote: 0,
        };

        const newList = [...list, payload];
        const newList2 = list.concat(payload);
        setList(newList2);
        setName("");
        setAge("");
        setPhoneNum("");
    }

    const vote = (index) => {
        const newList = list.map((item, idx) => {
            if (index == idx) {
                return ({...item, vote: item.vote + 1});
            }
            else {
                return item;
            }
        });
        setList(newList);

    };

    return (
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <input value={name} onChange={onChangeName} placeholder="이름을 입력하세요." />
                </div>
                <h1>{name}</h1>
                <div>
                    <input value={age} onChange={onChangeAge} placeholder="나이 입력하세요." />
                    <h1>{age}</h1>
                </div>
                <div>
                    <input value={phoneNum} onChange={onChangephoneNum} placeholder="전화번호를 입력하세요." />
                </div>
                <h1>{phoneNum}</h1>
                <button>입력</button>
            </form>
            {list.map((item, index) => (
                <li>{}{item.name} {item.age} {item.phoneNum} 득표수: {item.vote} <button onClick={() => vote(index)}>추첨</button></li>
            ))}
        </section>
    );
}

export default Phonebook;