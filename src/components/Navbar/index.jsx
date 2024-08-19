import logo from '../../assets/descarga.jpeg'

const Navbar = () => {
    <header className="header">
        <nav className="navbar">
            <figure className="navbar__logo">
                <img src="{../../assets/descarga.jpeg}" alt="" />
            </figure>
            <menu className="navbar__menu">
                    <li className="navbar__link"></li>
                    <a href="shop"></a>
                    <li className="navbar__link"></li>
                    <a href="contacto"></a>
                    <li className="navbar__link"></li>
                    <a href="login"></a>
                    <li className="navbar__link"></li>
                    <a href="carrito"></a>
                </menu>
        </nav>

    </header>
}