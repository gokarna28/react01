import React, { useState } from 'react';

const Navbar = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const [name, setName] = useState('gokarna');
    const handleName = () => {
        setName('Bishesh');
    }

    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value)
    }

    const [liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }


    //here is the handling of form(two variables)
    const [formName, setFormName] = useState('gokarna');
    const [age, setAge] = useState(20);

    return (
        <>
            <div className='border mb-6'>
                <button className="bg-slate-400 text-white p-4" onClick={handleClick}>Counter</button>
                <p>{count}</p>
            </div>
            <div className='border mb-6'>
                <button className="bg-slate-400 text-white p-4" onClick={handleName}>Name Change</button>
                <p>{name}</p>
            </div>
            <div className='border mb-6'>
                <input type='text' className='border border-black w-1/2' placeholder='Enter some text' value={text} onChange={handleChange} />
                <p>You tyoed: {text}</p>
                <button className='bg-red-200 p-2' onClick={() => setText('')}>Reset</button>
            </div>
            <div className='border mb-6'>
                <label>
                    <input type='checkbox' checked={liked} onChange={handleChange} />
                    I liked this
                </label>
                <p>You {liked ? 'liked' : 'did not like'} this.</p>
            </div>
            <div className='border mb-6'>
                <input className="border border-black" type='text' value={formName} onChange={e=>setFormName(e.target.value)}/>
                <button className="bg-green-300" onClick={e=> setAge(age+1)}>incrent age</button>
                <p>Hello, {formName}. You are {age}.</p>
                <button className='bg-red-300 p-2' onClick={()=>{setFormName('gokarna'); setAge(20);}}>Reset</button>
            </div>
        </>
    );
};

export default Navbar;
