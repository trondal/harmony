import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';

function LanguageSelect() {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    void i18n.changeLanguage(event.target.value);
  };

  console.log(i18n.language);
  // ^?

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={i18n.language}
      label="Language"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
