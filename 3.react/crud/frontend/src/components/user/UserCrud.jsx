import React, { Component } from 'react'
import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: incluir, listar, alterar, excluir'
}

export default class UserCrud extends Component{
    render () {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}