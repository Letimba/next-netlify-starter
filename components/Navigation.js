// components/Navigation.js
import React from 'react';

const Navigation = () => {
  // Definieren der Seitenstruktur
  const seitenStruktur = {
    "Home": ["Templates", "Resources", "About us", "Blog", "ALL TEMPLATES"],
    "Templates": {
      "Free Personal Notion Templates": [
        "Notion Habit Tracker template",
        "Notion Goal Tracker template",
        "Notion Personal CRM template",
        "Notion Daily Journal template",
        // Weitere Template-Links hier einfügen
      ],
      // Weitere Kategorien hinzufügen
    }
  };

  // Funktion zum Erstellen der Navigationsleiste
  const erstelleNavigation = () => {
    const navigation = (
      <ul>
        {Object.keys(seitenStruktur).map((seite, index) => (
          <li key={index}>
            {seite}
            {Array.isArray(seitenStruktur[seite]) && (
              <ul>
                {seitenStruktur[seite].map((unterseite, index) => (
                  <li key={index}>{unterseite}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );

    return navigation;
  };

  return (
    <div>
      {erstelleNavigation()}
    </div>
  );
};

export default Navigation;
