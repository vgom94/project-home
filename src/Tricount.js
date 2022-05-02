import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Tricount = () => {
    const { data: moviments, isPending, error } = useFetch('http://localhost:8000/moviments');
    const [pagador, setPagador] = useState('');
    const [categoria, setCategoria] = useState('');
    const [dataInici, setDataInici] = useState('');
    const [dataFi, setDataFi] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setPagador("");
        setCategoria("");
        setDataFi("");
        setDataInici("");
    }

    return (
        <div className="moviment-list">
            <h2>Filters</h2>
            <form onSubmit={handleSubmit}>
                <label>Pagador:</label>
                <select
                    value={pagador}
                    onChange={(e) => setPagador(e.target.value)}
                >
                    <option value=""></option>
                    <option value="pato">Pato</option>
                    <option value="girafa">Girafa</option>
                </select>
                <label>Categoria:</label>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value=""></option>
                    <option value="menjar">Menjar</option>
                    <option value="entreteniment">Entreteniment</option>
                    <option value="lloguer">Lloguer/Factures</option>
                </select>
                <label>Data inici</label>
                <input type="date" value={dataInici} onChange={(e) => setDataInici(e.target.value)} />
                <label>Data Fi</label>
                <input type="date" value={dataFi} onChange={(e) => setDataFi(e.target.value)} />
                <br />
                <button>Netejar</button>
            </form>
            <h2>Moviments</h2>
            <Link to="/create">Afegir moviment</Link>
            {error && <div> {error}</div>}
            {isPending && <div> Loading...</div>}

            {moviments && moviments
                .filter((mov) =>
                    (pagador === "" || mov.pagador === pagador)
                    && (categoria === "" || mov.categoria === categoria)
                    && ((dataInici <= mov.data && dataFi >= mov.data)
                        || (dataInici === "" && dataFi >= mov.data)
                        || (dataFi === "" && dataInici <= mov.data))
                )
                .map((mov) => (
                    <div className="mov-preview" key={mov.id}>
                        <Link to={`/moviments/${mov.id}`}>
                            <p><strong>{mov.titol}</strong></p>
                            <p>{mov.categoria}</p>
                            <p>{mov.quantitat}€</p>
                            <p>{new Date(mov.data).toLocaleDateString("en-GB")}</p>
                        </Link>
                    </div>
                ))}
        </div>
    );
}

export default Tricount;