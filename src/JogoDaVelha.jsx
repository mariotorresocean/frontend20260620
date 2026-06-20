import { useState } from 'react'
import './Jogo.css'

function Quadrado({quad, handleClick}) {
    return (
        <button className='q' onClick={handleClick}>{quad}</button>
    )
}

function Tabuleiro() {
    const [quads,setQuads] = useState(Array(9).fill(null))

    const [vezDoX,setVezDoX] = useState(true)
    let mensagem = 'Vez do ';
    if (vezDoX) {
        mensagem = mensagem + 'X'; 
    } else {
        mensagem = mensagem + 'O';
    }

    function handleClick(posicao) {
        const novosQuadrados = quads.slice();
        novosQuadrados[posicao] = 'O';
        console.log('clicou em'+posicao);
        setQuads(novosQuadrados);
    }
    return (
        <>
        <h3>{mensagem} </h3>
        <div className='linha'>
            <Quadrado quad={quads[0]} onClick={()=>handleClick(0)} />
            <Quadrado quad={quads[1]} onClick={()=>handleClick(1)} />
            <Quadrado quad={quads[2]} onClick={()=>handleClick(2)} />
        </div>
        <div className='linha'>
            <Quadrado />
            <Quadrado />
            <Quadrado />
        </div>
        <div className='linha'>
            <Quadrado />
            <Quadrado />
            <Quadrado />
        </div>
        </>
    )
}

export default function JogoDaVelha() {
    return (
        <>
            <h1>Jogo da velha</h1>
            <Tabuleiro/>
        </>
    )
}