import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import api from '../services/api';

import './styles.css';


export default function HomePage() {
    const [food, setFood] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [busc, setBusc] = useState(false);

    async function randomFood(){
        const response = await api.get('randomSelection');
        setBusc(true)
        setFood(response.data[0]);
        setIngredientes(response.data[0].ingredientes.split(","))
    }

    return (
        <div className="container">
            <div className="box-randomFood">
                <div className="randomFood">
                    <h1>Com fome?</h1>
                    <p>Faça uma refeição aleatória clicando no botão abaixo</p>
                    <Button onClick={randomFood} variant="primary" size="lg">Pegar Refeição</Button>
                </div>
            </div>
            
            <div className="imagemFood" style = {{display: busc ? 'flex' : 'none'}} >
                <div className="imgFood">
                    <img src={food.img} alt="hello world" />
                </div>
                <div className="textFood">
                <h2>{food.name}</h2>
                    <spam>{food.descricao}</spam>
                </div>
            </div>
            

            <div className="ingredientes" style = {{display: busc ? 'block' : 'none'}}>
                <h3>Ingredientes</h3>
                <ul>
                    {ingredientes.map(s => (<li>{s}</li>))}
                    
                </ul>
            </div>
            <div className="videoReceita" style = {{display: busc ? 'block' : 'none'}}>
                <h3>Video de Receita</h3>
                <div className="videoWrapper">
                    <Iframe url={food.video}
                        width="960px"
                        height="565px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
                    </div>
                </div>
        </div>
    )
}