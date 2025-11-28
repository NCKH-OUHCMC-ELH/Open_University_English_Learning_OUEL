import React,{useState} from 'react';
import Quiz from "./Quiz";
import Passage from './Passage';
import './Reading.css';

function Reading() {
    const [passage, setPassage] = useState(null);
    return (
        <div className="reading">
            <div className="left">
                <Passage  onLoaded={setPassage}/>
            </div>

            <div className="right">
                 {passage ? (
                    <Quiz passage={passage} key={passage?.id} />
                ) : ( <div>Đang tải...</div>)}
            </div>
            
        </div>
    );
}

export default Reading;
