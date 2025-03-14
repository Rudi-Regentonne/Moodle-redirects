# Moodle-Redirects
Moodle-Redirects für die DHBW Karlsruhe als Browser-Extension

## 🚀 Features:
- Der Login wird beschleunigt, indem man direkt zur Passwortseite geleitet wird und sich mit aktiviertem Autofill automatisch anmeldet.
- Die Moodle-Startseite wird zur Kursseite umgeleitet.
- Die Suchfunktion wird automatisch fokussiert, und durch Drücken der Enter-Taste wird der erste Kurs geöffnet.

---

## 🛠 Installation

### **1. Firefox-Extension installieren**

#### **Automatische Installation**
Die Extension kann über [diesen Link](https://addons.mozilla.org/firefox/downloads/file/4454273/59dd0869e20f43a1b0d4-1.0.xpi) installiert werden.

#### **Manuelle Installation über das Debugging-Panel**
1. **Firefox öffnen** und `about:debugging` in die Adresszeile eingeben.
2. Auf **"Diese Firefox-Version laden"** klicken.
3. Zum Ordner navigieren, der die Firefox-Version der Extension enthält.
4. Den Ordner auswählen, der die `manifest.json` Datei enthält.
5. Die Extension wird nun in Firefox installiert und aktiviert.

---

### **2. Chrome-Extension installieren**

#### **Automatische Installation**
Die Extension kann mit der [.crx-Datei](chrome/chrome.crx) installiert werden.  

#### **Manuelle Installation im Entwicklermodus**
1. **Chrome öffnen** und `chrome://extensions/` in die Adresszeile eingeben.
2. Entwicklermodus oben rechts aktivieren.
3. **"Entpackte Erweiterung laden"** anklicken.
4. Zum Ordner navigieren, der die Chrome-Version der Extension enthält.
5. Den Ordner mit der `manifest.json` Datei auswählen.
6. Die Extension wird nun in Chrome installiert und aktiviert.

**⚠️ Hinweis:**  
Falls die `.crx`-Datei verwendet wird, muss sie per **Drag & Drop in die Erweiterungen-Seite** (`chrome://extensions/`) gezogen werden.

---

## 📌 Nutzung

- Die Extension wird automatisch aktiviert, sobald die Moodle-Seite besucht wird.  
- **Chrome-Nutzer:** Nach dem Laden der Seite hat man fünf Sekunden Zeit, eine Taste zu drücken. Andernfalls bleibt das Passwortfeld leer, da Chrome die Passwörter nicht automatisch ausfüllt.  

---