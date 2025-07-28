import { useEffect } from 'react';

function Header({ year, setYear }) {
  useEffect(() => {}, [year]);

  const header = `Calender Year ${year}`;

  function changeYear(change) {
    setYear(year + change);
  }

  return (
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
    </div>
  );
}

export default Header;
