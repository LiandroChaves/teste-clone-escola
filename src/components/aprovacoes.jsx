// src/components/Aprovacoes.jsx
import React from 'react';
import a from '../components/Aprovacoes.module.css';
import the_rock from '../assets/rock.jpg';
import deadpool from '../assets/deadpool.jpeg'
import jonh_wick from '../assets/john wick.webp'
import lara_croft from '../assets/lara croft.jpg'
import soria from '../assets/sória.avif'

const alunos = [
    { nome: 'Liandro Chaves', curso: 'Des. de Sistemas', foto: the_rock },
    { nome: 'Davi Moura', curso: 'Des. de Sistemas', foto: deadpool },
    { nome: 'Patrícia Hellen', curso: 'Administração', foto: soria },
    { nome: 'Ismael Bezerra', curso: 'Edificações', foto: jonh_wick },
    { nome: 'Géssica Paula', curso: 'Massoterapia', foto: lara_croft },
];

function Aprovacoes() {
    return (
        <div className={a.aprovacoes_container}>
            <div className={a.linha_aprov}><h2 className={a.aprovacoes_title}>Aprovações do Bimestre</h2><a href="pag-aprov"><h3>Ver mais</h3></a></div>
            <div className={a.grid_container}>
                {alunos.map((alunos, index) => (
                    <div key={index} className={a.card}>
                        <img src={alunos.foto} alt={`${alunos.nome}`} />
                        <div className={a.card_nome}>{alunos.nome}</div>
                        <div className={a.card_curso}>Curso: {alunos.curso}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aprovacoes;
