import React, { useEffect, useRef, useState } from 'react'



const person = {
    name: 'Rajesh sharma',
    job: 'Software Enginner',
    imageUrl:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    theme: {
        background: 'gray',
        border: '1px solid black',
        color: 'white',
    },

};

const Hook = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count => count + 1);
    }
    function handleDecrement() {
        setCount(count => count - 1);
    }


    useEffect(() => {
        console.log('value is updated')
    }, [count])

    const [down, setDown] = useState(50);
    useEffect(() => {
        setTimeout(() => {
            if (down > 0) {
                setDown(down => down - 1);
            }
        }, 2000)
    }, [down])



    //useRef
    const inputElement = useRef();

    const handleClick = () => {
        console.log(inputElement.current);
        inputElement.current.classList.add('bg-blue-200')
    }

    const [number, setNumber] = useState('');

    function cube(num) {
        return Math.pow(num, 3)
    }
    const result = cube(number)

    return (
        <>
            <button className="border p-2 ml-4 text-3xl font-bold" onClick={handleIncrement}>+</button>
            <button className="border p-2 ml-4 text-3xl font-bold" onClick={handleDecrement}>-</button>
            <p className='mb-6 text-3xl font-bold'>The number count is: {count}</p>


            <div className='border mb-6'>
                <p className="text-3xl">Your count down is start: {down}</p>
            </div>

            <div className="border mb-6">
                <input type='text' ref={inputElement} placeholder='Enter something' />
                <button onClick={handleClick}>Click</button>
            </div>

            <div className="border mb-6">
                <input className="border" type="number" value={number} onChange={(e) => {
                    setNumber(e.target.value)
                }} />
                <p>Text is here: {result}</p>
            </div>

            <div style={person.theme}>
                <h1>{person.name}</h1>
                <p>{person.job}</p>
                <img
                    className="rounded-full"
                    src={person.imageUrl}
                    width={100}

                />
            </div>

        </>
    )
}

export default Hook
