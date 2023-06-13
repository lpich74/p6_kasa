import '../styles/Collapse.css';
import { useState } from 'react'

function Collapse({title, content, isAboutPage}) {
    const [isOpen, setIsOpen] = useState(true)

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };

    if (isAboutPage) {
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
    } else {
        return (
            <div className="housing-collapse">
            <div className="housing-collapse-header">
                <h2 className='housing-collapse-title'>{title}</h2>
                <div className='housing-collapse-vector' onClick={toggleCollapse} style={!isOpen ? { transform: 'rotate(-180deg)' } : {}}>
                    <i className='fa-solid fa-chevron-up'></i>
                </div>
            </div>
            {!isOpen && (
                <div className="housing-collapse-content">
                    <p className='housing-collapse-text'>{content}</p>
                </div>
            )}
        </div>
        );
    }
}

export default Collapse