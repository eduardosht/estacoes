import { useCallback, memo } from 'react';

import { ModalType } from '../shared/enum/ModalType';

import ModalCountrySearch from './CountrySearch';
import ModalAbout from './About';
import ModalConfigApp from './ConfigApp';
import ModalWeather from './Weather';

import { useTheme } from '../../store/themeStore';

import * as S from './styles';

interface IModalCountrySearch {
  onClose: (flag: boolean, type: ModalType) => void
  type: ModalType | null,
}

const Modal = ({ onClose, type }: IModalCountrySearch) => {
  const { theme } = useTheme();

  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevê o scroll quando `Space` é pressionado
      closeModal();
    }
  };

  const closeModal = useCallback(() => {
    if (!type) return;
    onClose(false, type);
  }, [onClose, type]);

  const renderModal = useCallback((modalType: ModalType) => {
    switch (modalType) {
      case ModalType.ABOUT:
        return <ModalAbout />

      case ModalType.COUNTRY_SEARCH:
        return <ModalCountrySearch onClose={onClose} />

      case ModalType.WEATHER:
        return <ModalWeather />

      case ModalType.CONFIG:
        return <ModalConfigApp />

      default:
        return null
    }
  }, [onClose]);


  if (!type) return null;

  return (
    <S.ModalOverlay onClick={closeModal}>
      <S.ModalContent onClick={(e) => e.stopPropagation()} isDark={theme === 'dark'}>
        <S.CloseIcon onClick={closeModal} role="button" tabIndex={0} onKeyDown={handleKeyDown} />
        {renderModal(type)}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default memo(Modal);
