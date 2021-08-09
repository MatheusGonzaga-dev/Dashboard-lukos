import './Sidebar.css'
import logo from '../../assets/pp.jpg'

const Sidebar = ({  sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo"/>
                    <h1>Matheus</h1>
                </div>

                <i
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                
                <h2>LUKOS</h2>
                <div className="sidebar__link">
                    <i class="fas fa-box"></i>
                    <a href="#">Resumo do Caixa</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-calendar-minus"></i>
                    <a href="#">Comparativo Vendas</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-flag"></i>
                    <a href="#">Metas</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-users"></i>
                    <a href="#">Top 10- Funcionários</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-gas-pump"></i>
                    <a href="#">Combustivel</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-coins"></i>
                    <a href="#">Financeiro</a>
                </div>
                <div className="sidebar__link">
                    <i class="fas fa-store"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar__logout">
                    <i class="fas fa-sign-out-alt"></i>
                    <a href="#">Logout</a>
                </div>

        </div>
    </div>
    )
}

export default Sidebar;