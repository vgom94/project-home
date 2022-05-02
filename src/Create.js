import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Desplegable from "./Desplegable";
import useFetch from "./useFetch";

const Create = () => {
    const [titol, setTitol] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quantitat, setQuantitat] = useState('');
    const [data, setData] = useState('');
    const [pagador, setPagador] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const { data: categories, estaPendent, error } = useFetch('http://localhost:8000/categories');



    const handleSubmit = e => {
        e.preventDefault();
        const mov = { titol, categoria, quantitat, data, pagador };

        setIsPending(true);

        fetch('http://localhost:8000/moviments', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mov)
        }).then(() => {
            console.log('New moviment added');
            setIsPending(false);
            history.go(-1);
            //history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Afegir nou moviment</h2>
            <form onSubmit={handleSubmit}>
                <label>Títol:</label>
                <input
                    type="text"
                    required
                    value={titol}
                    onChange={(e) => setTitol(e.target.value)}
                />
                <label>Categoria:</label>

                {categories && <Desplegable content={categories} required={true} setter={setCategoria} />}

                <label>Quantitat:</label>
                <input
                    type="number"
                    required
                    value={quantitat}
                    onChange={(e) => setQuantitat(e.target.value)}
                ></input>
                <label>Data:</label>
                <input
                    type="date"
                    required
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                ></input>
                <label>Pagador:</label>
                <select
                    required
                    value={pagador}
                    onChange={(e) => setPagador(e.target.value)}
                >
                    <option value=""></option>
                    <option value="pato">Pato</option>
                    <option value="girafa">Girafa</option>
                </select>
                {!isPending && <button>Afegir</button>}
                {isPending && <button disabled>Afegint gastu...</button>}
            </form>
        </div>
    );
}

export default Create;