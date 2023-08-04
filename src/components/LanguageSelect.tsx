import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';

function LanguageSelect() {
  const { i18n } = useTranslation();

  const handleChange = async (event: SelectChangeEvent) => {
    await i18n.changeLanguage(event.target.value).then();
  };

  console.log(i18n.language);
  // ^?

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={i18n.language}
      label="Language"
      onChange={handleChange}
      variant="outlined"
    >
      {LANGUAGES.map(({ code, label }) => (
        <MenuItem value={code} key={code}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default LanguageSelect;
