import React from 'react'

export default props => // o nome props é uma convenção
    <React.Fragment>
        <h1>Bom dia {props.nome}</h1> 
        <h2>Até breve</h2>
    </React.Fragment>

    
/*     export default props => 
    <div>
        <h1>Bom dia {props.nome}</h1> 
        <h2>Até breve</h2>
    </div> */