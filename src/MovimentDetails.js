import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const MovimentDetails = () => {
    const { id } = useParams();
    const { data: mov, error, isPending } = useFetch('http://localhost:8000/moviments/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/moviments/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/moviments');
        })
    }

    return (
        <div className="moviment-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {mov && (
                <article>
                    <h2>{mov.titol}</h2>
                    <p>Categoria: {mov.categoria}</p>
                    <p>Preu: {mov.quantitat}</p>
                    <p>Data: {new Date(mov.data).toLocaleDateString("en-GB")}</p>
                    <p>Ha pagat: {mov.pagador}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default MovimentDetails;