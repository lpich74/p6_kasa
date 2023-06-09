import '../styles/Collapse.css';
import { useState } from 'react'

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2 className='collapse-title'>{title}</h2>
                <button>{isOpen ? '⌄' : '^'}</button>
            </div>
            {!isOpen && (
                <div className="collapse-content">
                    <p className='collapse-text'>{content}</p>
                </div>
            )}
        </div>
        );
}

export default Collapse