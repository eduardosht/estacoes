import { useState, useMemo, useCallback, memo } from 'react';

import COUNSTRIES_SEASON_DATA from '../../../scripts/country_seasons.json';
import { useCountryStore } from '../../../store/countryStore';
import { ModalType } from '../../shared/enum/ModalType';

import * as S from './styles';

interface IModalCountrySearch {
  onClose: (flag: boolean, type: ModalType) => void
}

const ModalCountrySearch = ({ onClose }: IModalCountrySearch) => {
  const { setSelectedCountry } = useCountryStore();
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const countryList = useMemo(() => COUNSTRIES_SEASON_DATA.map((country) => country.country), [])

  const handleSearchChange = (e: any) => {
    const query = e.target.value;
    setSearch(query);
    if (query.length > 0) {
      const filteredCountries = countryList.filter((country) =>
        country.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredCountries);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (country: string) => {
    setSearch(country);
    setSuggestions([]);
  };

  const handleConfirm = () => {
    if (search) {
      setSelectedCountry(search);
      closeModal();
    }
  };

  const closeModal = useCallback(() => {
    onClose(false, ModalType.COUNTRY_SEARCH);
  }, [onClose]);

  return (
    <>
      <S.Title>Procure um país</S.Title>
      <S.SearchInput
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Digite o nome de um país"
      />
      {
        suggestions.length > 0 && (
          <S.SuggestionsList>
            {suggestions.map((country) => (
              <S.SuggestionItem
                key={country}
                onClick={() => handleSuggestionClick(country)}
              >
                {country}
              </S.SuggestionItem>
            ))}
          </S.SuggestionsList>
        )
      }
      <S.Footer>
        <S.ConfirmButton onClick={handleConfirm} disabled={!search}>Confirmar</S.ConfirmButton>
      </S.Footer>
    </>
  );
};

export default memo(ModalCountrySearch);
