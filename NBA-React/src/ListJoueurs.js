import React from 'react';
import './ListEquipes.css';

function ListJoueurs({ equipe }){
    return(
        <div className="content">
            {equipe && (
                <>
                <h2>Joueurs de {equipe.nom}</h2>
                <ul className="list">
                    {equipe.joueurs.map((joueur) => (
                        <li key={joueur.id} className="item">
                            <span>{joueur.nom}</span>
                        </li>    
                    ))}
                </ul>
                </>        
            )}
        </div>
    );
}

export default ListJoueurs;