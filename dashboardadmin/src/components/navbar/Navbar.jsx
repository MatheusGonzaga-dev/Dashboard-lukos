import './Navbar.css'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Resumo do Caixa</a>
                <a href="#">Todas Unidades</a>
                <a href="#" className="active_link">Filtrar</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i class="far fa-clock"></i>
                </a>
                <a href="#">
                    <i class="fas fa-user-tie"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;