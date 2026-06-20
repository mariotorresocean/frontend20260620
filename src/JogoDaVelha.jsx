import './Jogo.css'

function Tabuleiro() {
    return (
        <>
        <div>
            <button className='q'></button>
            <button className='q'></button>
            <button className='q'></button>
        </div>
        <div>
            <button className='q'></button>
            <button className='q'></button>
            <button className='q'></button>
        </div>
        <div>
            <button className='q'></button>
            <button className='q'></button>
            <button className='q'></button>
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