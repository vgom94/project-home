import { Link } from "react-router-dom";

const Menu = ({ content, title }) => {
    return (
        <div className="content-list">
            {/* <h2>{title}</h2> */}
            {content.map((menu) => (
                <div className="menu-preview" key={menu.id}>
                    <Link to={`/${menu.ruta}`}>
                        <h2>{menu.nom}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Menu;