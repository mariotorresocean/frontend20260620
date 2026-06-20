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
    let vencedor = verificarVencedor(quads)
    if (vencedor) {
        mensagem = 'Vencedor é '+vencedor;
    } else {
        if (vezDoX) {
            mensagem = mensagem + 'X'; 
        } else {
            mensagem = mensagem + 'O';
        }
    }

    function verificarVencedor(quads) {
        const combV = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8], // dp
            [2,4,6] // ds
        ]

        for (let i=0;i < combV.length;i++) {
            const [p1,p2,p3] = combV[i];
            if (quads[p1] && quads[p1] == quads[p2] && quads[p2] == quads[p3]) {
                return quads[p1];
            }

        }

        
    }

    function handleClick(posicao) {
        if (quads[posicao] != null) {
            return;
        }

        if (verificarVencedor(quads)) {
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
    }
    function handleReset() {
        setQuads(Array(9).fill(null));
    }

    return (
        <>
        <h3>{mensagem} </h3>
        <button onClick={handleReset}> Reiniciar jogo</button>
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