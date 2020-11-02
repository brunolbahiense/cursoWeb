import './Main.css'
import react from 'react'
import Header from './Header'

export default props => 
    <react.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </react.Fragment>