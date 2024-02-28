// In notionIntegration.js

// Import des Notion-Client-Pakets
const { Client } = require('@notionhq/client');

// Konfiguration des Notion-Clients mit deinem Zugriffstoken
const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

// Funktion zum Abrufen der Daten aus der Inline-Datenbank
async function fetchNotionData() {
  try {
    // Definiere die Datenbank-ID deiner Inline-Datenbank
    const databaseId = '668d797c-76fa-4934-9b05-ad288df2d136';

    // Mache eine Anfrage an die Notion API, um Daten aus der Datenbank abzurufen
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    // Gib die abgerufenen Daten zurück
    return response.results;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten aus Notion:', error);
    return [];
  }
}

module.exports = { fetchNotionData };
