import React, { useState, useEffect } from 'react'
import "./Quiz.css"
import { getPassageRandom } from '../api.js';

const Passage = ({ onLoaded }) => {

    let [passage, setPassages] = useState(null);

   useEffect(() => {
    if (passage) return; 
    const fetchPassages = async () => {
        try {
            const data = await getPassageRandom();
            setPassages(data);
            onLoaded(data); 
        } catch (error) {
            console.error('không thể fetch passage:', error);
        }
    };
    fetchPassages();
}, [passage]);
    if (!passage) {
        return <div className="passage-box">Đang tải đoạn văn...</div>;
    }

    return (
        <div className='container'>
            <h1>{passage.name}</h1>
            <hr />
            <h2>{passage.content}</h2>
        </div>
    )
}

export default Passage
