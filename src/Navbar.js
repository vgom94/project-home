import Menu from './Menu';
import useFetch from './useFetch';

const Navbar = () => {
    const { data: menus, isPending, error } = useFetch('http://localhost:8000/content-menus');
    return (
        <nav className="navbar">
            <div className="links">
                {error && <div> {error}</div>}
                {isPending && <div> Loading...</div>}
                {menus && <Menu content={menus} title="Menus" />}
            </div>
        </nav>
    );
}

export default Navbar;