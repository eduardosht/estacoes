import { useState } from 'react';
import * as S from './styles';
import { useTheme } from '../../store/themeStore';

interface IToggle {
  handleAction: (flag: boolean) => void;
}

const Toggle: React.FC<IToggle> = ({ handleAction }) => {
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState(theme === 'dark' ? true : false);

  const toggleSwitch = () => {
    handleAction(!isActive);
    setIsActive((prev) => !prev);
  };


  return (
    <S.ToggleContainer active={isActive} onClick={toggleSwitch}>
      <S.ToggleCircle active={isActive} />
    </S.ToggleContainer>
  );
};

export default Toggle;
