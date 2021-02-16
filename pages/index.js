import {useState} from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            
            <Link href="/contador">
                <a>Contador</a>
            </Link>

            <p></p>

            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>

        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;