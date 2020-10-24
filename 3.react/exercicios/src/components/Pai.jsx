import React from 'react'

import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.Nome} {props.Sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho Nome="Luna" Sobrenome={props.Sobrenome} />
            <Filho {...props} />
            <Filho {...props} Nome="Arthur"/>
        </ul>
    </div>