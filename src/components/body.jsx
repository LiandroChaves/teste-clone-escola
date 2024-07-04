// src/components/Body.jsx
import React from 'react';
import b from '../components/Body.module.css';
import img_adm from '../assets/logo_adm.png';
import img_dds from '../assets/logo_dds.png';
import img_edf from '../assets/logo_edf.png';
import img_mas from '../assets/logo_mas.png';
import img_escola from '../assets/Lucia Baltazar.png';
import Aprovacoes from './aprovacoes';

function Body() {
    return (
        <>
            <div className={b.container}>
                <a href="adm"><div className={b.quadrado_curso_container}>
                    <div className={b.quadrado_curso} id={b.adm}>
                        <img className={b.img_cursos} src={img_adm} alt="Imagem_adm" />
                        <hr className={b.linha_quadrado} />
                    </div>
                    <h2>Administração</h2>
                </div></a>
                <a href="dds"><div className={b.quadrado_curso_container}>
                    <div className={b.quadrado_curso} id={b.dds}>
                        <img className={b.img_cursos} src={img_dds} alt="Imagem_dds" />
                        <hr className={b.linha_quadrado} />
                    </div>
                    <h2>Des. de Sistemas</h2>
                </div></a>
                <a href="edf"><div className={b.quadrado_curso_container}>
                    <div className={b.quadrado_curso} id={b.edf}>
                        <img className={b.img_cursos} src={img_edf} alt="Imagem_edf" />
                        <hr className={b.linha_quadrado} />
                    </div>
                    <h2>Edificações</h2>
                </div></a>
                <a href="masso"><div className={b.quadrado_curso_container}>
                    <div className={b.quadrado_curso} id={b.mas}>
                        <img className={b.img_cursos} src={img_mas} alt="Imagem_masso" />
                        <hr className={b.linha_quadrado} />
                    </div>
                    <h2>Massoterapia</h2>
                </div></a>
            </div>
            <div className={b.container2}>
                <a href="infor-escola"><div className={b.img_info_escola}>
                    <img className={b.img_escola} src={img_escola} alt="img_escola" />
                    <div className={b.texto_hover}>
                        <a href="#">Conheça um pouco da história da EEEP Lúcia Baltazar Costa - Limoeiro do Norte - CE</a>
                    </div>
                </div></a>
                <div className={b.texto_infor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, minima vero ea similique nesciunt omnis quos quis modi sint vitae esse? Illum veniam explicabo soluta tempore, beatae inventore blanditiis? Inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aspernatur dolorem voluptatem laborum quisquam deleniti eligendi quod facilis, placeat sunt nesciunt ea temporibus iusto neque error. Consequuntur nulla quia temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, odio distinctio cum minima sed soluta dolores odit praesentium impedit nobis quos blanditiis ratione, illum nulla temporibus ad vel unde voluptates? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi incidunt ex nam beatae porro?
                </div>
            </div>
            <Aprovacoes />
        </>
    );
}

export default Body;
