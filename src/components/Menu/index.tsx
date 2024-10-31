import { memo } from 'react';
import { FaSearch, FaInfo, FaCog } from 'react-icons/fa';
import * as S from './styles';
import { ModalType } from '../shared/enum/ModalType';

interface IMenu {
  handleSearchModal: (flag: boolean, type: ModalType) => void;
}

const Menu: React.FC<IMenu> = ({ handleSearchModal }) => {
  const handleAction = (type: ModalType) => () => handleSearchModal(true, type);

  const handleKeyDown = (type: ModalType) => (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevê o scroll quando `Space` é pressionado
      handleSearchModal(true, type);
    }
  };

  const menuItems = [
    { icon: <FaInfo className="icon" />, type: ModalType.ABOUT, tooltip: 'Sobre' },
    { icon: <FaSearch className="icon" />, type: ModalType.COUNTRY_SEARCH, tooltip: 'Pesquisar país' },
    { icon: <FaCog className="icon" />, type: ModalType.CONFIG, tooltip: 'Configurações' },
  ];

  return (
    <S.Navbar>
      {menuItems.map(({ icon, type, tooltip }) => (
        <S.NavbarItem key={type}>
          <S.NavbarLink
            href="#"
            role="button"
            tabIndex={0}
            onClick={handleAction(type)}
            onKeyDown={handleKeyDown(type)}
          >
            {icon}
            <S.Tooltip>{tooltip}</S.Tooltip>
          </S.NavbarLink>
        </S.NavbarItem>
      ))}
    </S.Navbar>
  );
};

export default memo(Menu);