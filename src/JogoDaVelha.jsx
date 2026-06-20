import { useState } from 'react'
import './Jogo.css'

function Quadrado({quad, nomeDaFuncClica}) {
    return (
        <button className='q' onClick={nomeDaFuncClica}>{quad}</button>
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

    function verificarVencedor() {
        if (quads[0] && quads[0] == quads[1] && quads[1] == quads[2]) {
            console.log('Vencedor')
        }
    }

    function handleClick(posicao) {
        if (quads[posicao] != null) {
            return;
        }

        const novosQuadrados = quads.slice();
        if (vezDoX) {
            novosQuadrados[posicao] = 'X';
            setVezDoX(false)
        } else {
            novosQuadrados[posicao] = 'O';
            setVezDoX(true)
        }
        console.log('clicou em'+posicao);
        setQuads(novosQuadrados);
        verificarVencedor();
    }
    return (
        <>
        <h3>{mensagem} </h3>
        <div className='linha'>
            <Quadrado quad={quads[0]} nomeDaFuncClica={()=>handleClick(0)} />
            <Quadrado quad={quads[1]} nomeDaFuncClica={()=>handleClick(1)} />
            <Quadrado quad={quads[2]} nomeDaFuncClica={()=>handleClick(2)} />
        </div>
        <div className='linha'>
            <Quadrado quad={quads[3]} nomeDaFuncClica={()=>handleClick(3)} />
            <Quadrado quad={quads[4]} nomeDaFuncClica={()=>handleClick(4)} />
            <Quadrado quad={quads[5]} nomeDaFuncClica={()=>handleClick(5)} />
        </div>
        <div className='linha'>
            <Quadrado quad={quads[6]} nomeDaFuncClica={()=>handleClick(6)} />
            <Quadrado quad={quads[7]} nomeDaFuncClica={()=>handleClick(7)} />
            <Quadrado quad={quads[8]} nomeDaFuncClica={()=>handleClick(8)} />
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