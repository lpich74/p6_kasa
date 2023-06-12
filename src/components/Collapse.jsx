import '../styles/Collapse.css';
import { useState } from 'react'

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(true)

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="collapse">
            <div className="collapse-header">
                <h2 className='collapse-title'>{title}</h2>
                <div className='collapse-vector' onClick={toggleCollapse} style={!isOpen ? { transform: 'rotate(-180deg)' } : {}}>
                    <i className='fa-solid fa-chevron-up'></i>
                </div>
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