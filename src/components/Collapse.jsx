import '../styles/Collapse.css';
import { useState } from 'react'

function Collapse({title, content, page }) {
    const [isOpen, setIsOpen] = useState(true)

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={"collapse collapse-" + page }>
            <div className={"collapse-header collapse-header-" + page}>
                <h2 className={"collapse-title collapse-title-" + page}>{title}</h2>
                <div className="collapse-vector" onClick={toggleCollapse}>
                    <i className={(!isOpen ? ' rotate180' : ' rotate0') +' fa-solid fa-chevron-up'}></i>
                </div>
            </div>
            {!isOpen && (
                <div className={"collapse-content collapse-content-" + page}>
                    <div className={"collapse-text collapse-text-" + page}>{content}</div>
                </div>
            )}
        </div>
    );
}

export default Collapse