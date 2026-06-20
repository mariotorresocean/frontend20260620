import { useState } from 'react'
import './Jogo.css'

function Quadrado({ quad, nomeDaFuncClica }) {
    // Adiciona classes dinâmicas dependendo se é X ou O para cores diferentes
    const classeValor = quad === 'X' ? 'texto-x' : quad === 'O' ? 'texto-o' : '';

    return (
        <button className={`q ${classeValor}`} onClick={nomeDaFuncClica}>
            {quad}
        </button>
    )
}

function Tabuleiro() {
    const [quads, setQuads] = useState(Array(9).fill(null))
    const [vezDoX, setVezDoX] = useState(true)
    
    let vencedor = verificarVencedor(quads)
    let mensagem = 'Turno do Operador: ';
    
    if (vencedor) {
        mensagem = 'VITÓRIA DO SETOR: ' + vencedor;
    } else {
        mensagem = mensagem + (vezDoX ? 'X' : 'O');
    }

    function verificarVencedor(quads) {
        const combV = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]

        for (let i = 0; i < combV.length; i++) {
            const [p1, p2, p3] = combV[i];
            if (quads[p1] && quads[p1] === quads[p2] && quads[p2] === quads[p3]) {
                return quads[p1];
            }
        }
        return null;
    }

    function handleClick(posicao) {
        if (quads[posicao] != null) return;
        if (verificarVencedor(quads)) return;

        const novosQuadrados = quads.slice();
        if (vezDoX) {
            novosQuadrados[posicao] = 'X';
            setVezDoX(false)
        } else {
            novosQuadrados[posicao] = 'O';
            setVezDoX(true)
        }
        setQuads(novosQuadrados);
    }

    function handleReset() {
        setQuads(Array(9).fill(null));
        setVezDoX(true); // Reseta para o X começar novamente
    }

    return (
        <div className="tabuleiro-container">
            <h3 className={`mensagem ${vencedor ? 'vencedor-destaque' : ''}`}>{mensagem}</h3>
            
            <div className="grade">
                <div className='linha'>
                    <Quadrado quad={quads[0]} nomeDaFuncClica={() => handleClick(0)} />
                    <Quadrado quad={quads[1]} nomeDaFuncClica={() => handleClick(1)} />
                    <Quadrado quad={quads[2]} nomeDaFuncClica={() => handleClick(2)} />
                </div>
                <div className='linha'>
                    <Quadrado quad={quads[3]} nomeDaFuncClica={() => handleClick(3)} />
                    <Quadrado quad={quads[4]} nomeDaFuncClica={() => handleClick(4)} />
                    <Quadrado quad={quads[5]} nomeDaFuncClica={() => handleClick(5)} />
                </div>
                <div className='linha'>
                    <Quadrado quad={quads[6]} nomeDaFuncClica={() => handleClick(6)} />
                    <Quadrado quad={quads[7]} nomeDaFuncClica={() => handleClick(7)} />
                    <Quadrado quad={quads[8]} nomeDaFuncClica={() => handleClick(8)} />
                </div>
            </div>

            <button className="btn-reset" onClick={handleReset}>Reiniciar Sistema</button>
        </div>
    )
}

export default function JogoDaVelha() {
    return (
        <div className="jogo-wrapper">
            <h1 className="titulo-neon">JOGO DA VELHA v.2077</h1>
            <Tabuleiro />
        </div>
    )
}