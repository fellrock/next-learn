import {useState} from 'react';

function Home() {
    return (
        <div>
            <h1>Home CONTANDO</h1>
            <Contador />
            <div>TESTANDO A BRANCH</div>
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