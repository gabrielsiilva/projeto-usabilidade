import React from 'react';
import './styles.css';

// import { Container } from './styles';

function entregaAtividadePage() {
    return (
    <div class="container">
        <div id="main-title">
            <h1>CRIAÇÃO E ENTREGA DE ATIVIDADES</h1>
        </div>

        <div class="main-table">
            <h2>Fevereiro - Atividade 03</h2>
        </div>

        <div class="descricao-table">
            <h2>Descrição</h2>
        </div>

        <div class="prazo-table">
            <h2>Prazo</h2>
        </div>

        <div class="status-table">
            <h2>Status</h2>
        </div>
        
        {/* Primeira Coluna abaixo da Descrição */}
        <div class="first-column-table-one">
            <h3></h3>
        </div>

        <div class="first-column-table-two">
            <h3></h3>
        </div>

        <div class="first-column-table-three">
            <h3></h3>
        </div>

        {/* Segunda Coluna abaixo do Prazo */}
        <div class="second-column-table-one">
            <h3></h3>
        </div>

        <div class="second-column-table-two">
            <h3></h3>
        </div>

        <div class="second-column-table-three">
            <h3></h3>
        </div>

        {/* Terceira Coluna abaixo do Status */}
        <div class="thid-column-table-one">
            <h3></h3>
        </div>

        <div class="third-column-table-two">
            <h3></h3>
        </div>

        <div class="third-column-table-three">
            <h3></h3>
        </div>
    </div>
    );
}

export default entregaAtividadePage;
