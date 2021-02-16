import {useState} from 'react';
import Link from 'next/link';

function Contador() {
    return (
        <div>
            
            <Link href="/">
                <a>Acessar página Home</a>
            </Link>

            <p></p>
            <Contadora />
        </div>
    )
}


function Contadora() {
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

export default Contador;