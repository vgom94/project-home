const Desplegable = ({ content, required, setter }) => {
    console.log(content);
    return (

        <select
            required={required}
            onChange={(e) => setter(e.target.value)}
        >
            {content.map((op) => (
                <option key={op.id} value={op.nom}>{op.nom}</option>
            ))}
        </select>
    );
}

export default Desplegable;