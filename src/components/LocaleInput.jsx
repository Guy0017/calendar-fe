function LocaleInput({ setLocale }) {
  return (
    <div className="settings-menu">
      <label htmlFor="language-selection"></label>
      <select
        onChange={(e) => setLocale(e.target.value)}
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
  );
}

export default LocaleInput;
