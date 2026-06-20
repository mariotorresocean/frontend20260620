import { useState } from 'react'
import './Jogo.css'

function Quadrado() {
    const [quad, setQuad] = useState('')
    return (
        <button className='q' onClick={(quad)=>setQuad('X')}>{quad}</button>
    )
}

function Tabuleiro() {
    const [vezDoX,setVezDoX] = useState(true)
    let mensagem = 'Vez do ';
    if (vezDoX) {
        mensagem = mensagem + 'X'; 
    } else {
        mensagem = mensagem + 'O';
    }
    return (
        <>
        <h3>{mensagem} </h3>
        <div>
            <Quadrado />
            <Quadrado />
            <Quadrado />
        </div>
        <div>
            <Quadrado />
            <Quadrado />
            <Quadrado />
        </div>
        <div>
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