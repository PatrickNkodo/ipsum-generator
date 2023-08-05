import React, { useState,useRef,useEffect } from 'react';
import './index.css';
import data from './data';
const Ipsum = () => {
	const [ count, setCount ] = useState(0);
	const [ text, setText ] = useState([]);
    const input=useRef();
    //After rendering, set focus
    useEffect(()=>{
        input.current.focus()
    })

	const submit = (e) => {
		e.preventDefault();
        let limit=parseInt(count);
        if(count<=0){
            limit=1
        }
        if(count>10){
            limit=10
        }
        setText(data.slice(0, limit)); //Return the string elements of the array from index 0  to count (count not included)
            console.log(count,limit);
	};
	return (
		<section className="section-center">
			<div className="container">
				<h2>Tired of Typing Lorem Ipsum?</h2>
				<form onSubmit={submit}>
					<label htmlFor="amount">Paragraphs:</label>
					<input
						max='11'
						min='0'
						type="number"
						name="amount"
                        ref={input}
						value={count}
						onChange={(e) => setCount(e.target.value)}
					/>
					<button className="btn-dark mx-2 rounded shadow-none">Generate</button>
				</form>
				<article>
                    {/* Output each element of the text as a paragraph */}
                    {text.map((element,index)=>{
                        return <p key={index}>{element}</p>
                    })}
                </article>
			</div>
		</section>
	);
};

export default Ipsum;
