import { useTranslation } from 'react-i18next';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

function LanguageSelect() {
  const { i18n } = useTranslation();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(newAlignment);
  };

  // ^?
  return (
    <ToggleButtonGroup exclusive onChange={handleChange}>
      <ToggleButton value="en" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="nb" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export { LanguageSelect };
