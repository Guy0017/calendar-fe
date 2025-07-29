import { useEffect } from 'react';

function Header({ year, setYear, setLocale }) {
  useEffect(() => {}, [year]);

  const header = `Calender Year ${year}`;

  function changeYear(change) {
    setYear(year + change);
  }

  function handleLocale(selectedLanguage) {
    setLocale(selectedLanguage);
  }

  return (
    <>
      <div className="header-container">
        <button onClick={() => changeYear(-1)} className="button-prev">
          Prev
        </button>
        <header>
          <h1>{header}</h1>
        </header>
        <button onClick={() => changeYear(+1)} className="button-next">
          Next
        </button>

        <div className="settings-menu">
          <label htmlFor="language-selection"></label>
          <select
            onChange={(e) => handleLocale(e.target.value)}
            id="language-selection"
            name="language-selection"
          >
            <option value="en-GB">English</option>
            <option value="zh-CN">Mandarin</option>
            <option value="zh-HK">Cantonese</option>
            <option value="es">Spanish</option>
            <option value="ar">Arabic</option>
            <option value="pt-BR">Portuguese</option>
            <option value="fr">French</option>
            <option value="ru">Russian</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Header;
