function UserInputSettings({ setLocale, setDateForm }) {
  function handleInput(e) {
    if (e === 'long' || e === 'short') {
      return setDateForm(e);
    }
    setLocale(e);
  }

  return (
    <div className="settings-menu">
      <label htmlFor="settings-selection"></label>
      <select
        onChange={(e) => handleInput(e.target.value)}
        id="settings-selection"
        name="settings-selection"
      >
        <option selected disabled hidden value="">Settings</option>
          <hr/>
        <optgroup label="Language">
          <option value="en-GB">English</option>
          <option value="zh-CN">Mandarin</option>
          <option value="zh-HK">Cantonese</option>
          <option value="es">Spanish</option>
          <option value="ar">Arabic</option>
          <option value="pt-BR">Portuguese</option>
          <option value="fr">French</option>
          <option value="ru">Russian</option>
          <option value="hi">Hindi</option>
        </optgroup>
          <hr/>
        <optgroup label="Format">
          <option value="long">Long</option>
          <option value="short">Short</option>
        </optgroup>
      </select>
    </div>
  );
}

export default UserInputSettings;
