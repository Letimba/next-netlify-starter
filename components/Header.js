import React from 'react';

const Header = () => {
  // Beispielhafte Hauptkategorien und Unterkategorien
  const kategorien = [
    { name: 'Home', subkategorien: [] },
    {
      name: 'Templates',
      subkategorien: [
        'Free Personal Notion Templates',
        'Free Notion Templates for Business',
        'Free Notion Templates for Students',
        // Weitere Unterkategorien hier einfügen
      ],
    },
    // Weitere Hauptkategorien hinzufügen
  ];

  return (
    <header>
      <div className="logo">NotionX</div>
      <nav>
        <ul className="hauptkategorien">
          {kategorien.map((kategorie, index) => (
            <li key={index}>
              {kategorie.name}
              {kategorie.subkategorien.length > 0 && (
                <ul className="submenü">
                  {kategorie.subkategorien.map((subkategorie, index) => (
                    <li key={index}>{subkategorie}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
