// TODOS OS COMPONENTES TEM QUE COMEÇAR COM LETRA MAIUSCULA
import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './components/BomDia'

import {BoaTarde, BoaNoite} from './components/Multiplos'


ReactDOM.render(
    <div>
        <BoaTarde nome="Bluis" />
        <BoaNoite nome="Nitão" />
    </div>
, document.getElementById('root'))// componente personalizado