import '../styles/Collapse.css';
import { useState } from 'react'

function Collapse({isFiabilite, isRespect, isService, isSecurite}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };

    if (isFiabilite) {
        return (
            <div className="collapse">
                <div className="collapse-header" onClick={toggleCollapse}>
                    <h2 className='collapse-title'>Fiabilité</h2>
                    <button>{isOpen ? '⌄' : '^'}</button>
                </div>
                {!isOpen && (
                    <div className="collapse-content">
                    <p className='collapse-text'>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                    </div>
                )}
            </div>
        );
    } else if (isRespect) {
        return (
            <div className="collapse">
                <div className="collapse-header" onClick={toggleCollapse}>
                    <h2 className='collapse-title'>Respect</h2>
                    <button>{isOpen ? '⌄' : '^'}</button>
                </div>
                {!isOpen && (
                    <div className="collapse-content">
                    <p className='collapse-text'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinnage entraînera une exclusion de notre plateforme.
                    </p>
                    </div>
                )}
            </div>
        );
    } else if (isService) {
        return (
            <div className="collapse">
                <div className="collapse-header" onClick={toggleCollapse}>
                    <h2 className='collapse-title'>Service</h2>
                    <button>{isOpen ? '⌄' : '^'}</button>
                </div>
                {!isOpen && (
                    <div className="collapse-content">
                    <p className='collapse-text'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinnage entraînera une exclusion de notre plateforme.
                    </p>
                    </div>
                )}
            </div>
        );
    } else if (isSecurite) {
        return (
            <div className="collapse">
                <div className="collapse-header" onClick={toggleCollapse}>
                    <h2 className='collapse-title'>Sécurité</h2>
                    <button>{isOpen ? '⌄' : '^'}</button>
                </div>
                {!isOpen && (
                    <div className="collapse-content">
                    <p className='collapse-text'>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque critère correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Collapse