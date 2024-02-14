import { FaCloudUploadAlt, FaFolder } from 'react-icons/fa';
import '../css/App.css';
import Logo from '../images/google-drive.png';

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="logo">
                 
                {/* Aplicando estilos diretamente na tag img */}
                <img src={Logo} style={{ maxWidth: '20%', height: 'auto' }} />
            </div>
            <div className="menu">
                <MenuItem icon={<FaCloudUploadAlt />} text="Novo Upload" />
                <MenuItem icon={<FaFolder />} text="Meus Arquivos" />
            </div>
        </div>
    );
};

const MenuItem = ({ icon, text }: { icon: JSX.Element; text: string }) => {
    return (
        <div className="menuItem">
            <div className="icon">{icon}</div>
            <div className="text">{text}</div>
        </div>
    );
};

export default SideBar;
