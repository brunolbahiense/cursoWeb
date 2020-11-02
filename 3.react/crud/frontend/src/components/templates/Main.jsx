import './Main.css'
import react from 'react'
import Header from './Header'

export default props => 
    <react.Fragment>
        <Header {...props}/>
        <main className="content">
            Conteudo
        </main>
    </react.Fragment>