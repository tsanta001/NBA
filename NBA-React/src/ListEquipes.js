import React, {useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
import ListJoueurs from './ListJoueurs';
import './ListEquipes.css';

function ListEquipes(){
    const[equipes, setEquipes] = useState([]);
    const[equipeSelectionnee, setEquipeSelectionnee] = useState(null);

    useEffect(() => {
        const data = require('./data.json');
        setEquipes(data.equipes);
    }, []);

    const joueurs = (equipe) => {
        setEquipeSelectionnee(equipe);
    } 
    //Link to={'/equipe/${equipe.id}'}

    return(
        <div className="content">
            <h1>Liste des équipes</h1>
            <ul className="list">
                {equipes.map((equipe) => (
                    <li key={equipe.id} className="item" onClick={() => joueurs(equipe)}>
                        <span>{equipe.nom}</span>
                    </li>    
                ))}
            </ul>

            <ListJoueurs equipe={equipeSelectionnee} /> 
        </div>
    );
}

export default ListEquipes;