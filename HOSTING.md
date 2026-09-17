# Hosting & Deployment Anleitung (GitHub Pages)

Diese Anleitung erklärt Schritt für Schritt, wie Sie die Webpräsenz der **Anwaltskanzlei Shirin Shoaei** kostenlos über **GitHub Pages** veröffentlichen und das Kontaktformular aktivieren.

Die Website ist bereits vollständig für GitHub Pages vorkonfiguriert:
- `.nojekyll` ist eingerichtet (verhindert Jekyll-Verarbeitung und stellt alle Dateien direkt bereit).
- Ein automatischer GitHub Actions Workflow (`.github/workflows/deploy.yml`) ist bereits enthalten.

---

## 1. Website auf GitHub veröffentlichen

### Schritt 1: GitHub Repository erstellen
1. Loggen Sie sich ein auf [github.com](https://github.com).
2. Klicken Sie oben rechts auf das **+** Symbol und wählen Sie **New repository**.
3. Vergeben Sie einen Repository-Namen (z. B. `shoaei-website` oder `kanzlei-shoaei`).
4. Setzen Sie das Repository auf **Public** (für kostenloses GitHub Pages).
5. Klicken Sie auf **Create repository** (ohne README, .gitignore oder Lizenz zu initialisieren).

### Schritt 2: Code mit dem Remote-Repository verknüpfen und hochladen
Öffnen Sie Ihr Terminal im Projektordner und führen Sie die folgenden Befehle aus (ersetzen Sie `IHR_BENUTZERNAME` und `IHR_REPOSITORY_NAME`):

```bash
git remote add origin https://github.com/IHR_BENUTZERNAME/IHR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

### Schritt 3: GitHub Pages Quelle auswählen
1. Gehen Sie in Ihrem GitHub-Repository auf den Reiter **Settings** (Einstellungen).
2. Klicken Sie in der linken Seitenleiste auf **Pages**.
3. Unter **Build and deployment -> Source** haben Sie zwei Möglichkeiten:
   - **Option A (Empfohlen): GitHub Actions**  
     Wählen Sie im Dropdown *GitHub Actions*. Der bereits im Projekt hinterlegte Workflow (`.github/workflows/deploy.yml`) baut und veröffentlicht die Website bei jedem Push vollautomatisch!
   - **Option B: Deploy from a branch**  
     Wählen Sie *Deploy from a branch*, stellen Sie den Branch auf `main` und den Ordner auf `/ (root)`. Klicken Sie auf **Save**.
4. Nach ca. 1 Minute ist die Website weltweit erreichbar unter:  
   `https://IHR_BENUTZERNAME.github.io/IHR_REPOSITORY_NAME/`

---

## 2. Kontaktformular aktivieren (Kostenlos)

Da statische Webseiten keinen eigenen PHP/Node-Backendserver benötigen, wird für das Formular ein spezialisierter Dienst wie **Web3Forms** oder **Formspree** verwendet.

### Option A: Web3Forms (Empfohlen – bis zu 250 Einsendungen/Monat kostenlos)
1. Besuchen Sie [web3forms.com](https://web3forms.com) und tragen Sie die gewünschte Empfänger-E-Mail-Adresse ein, um einen kostenlosen **Access Key** zu erhalten.
2. Öffnen Sie die Datei `index.html`.
3. Suchen Sie nach `<form id="contactForm" ...>`.
4. Ändern Sie das `action`-Attribut in:
   ```html
   action="https://api.web3forms.com/submit"
   ```
5. Fügen Sie direkt unter dem öffnenden `<form>`-Tag die Zeile ein:
   ```html
   <input type="hidden" name="access_key" value="IHR_ACCESS_KEY">
   ```
6. Speichern und auf GitHub pushen. Formulareingaben landen ab sofort direkt in Ihrem Posteingang.

### Option B: Formspree (Alternative – bis zu 50 Einsendungen/Monat kostenlos)
1. Registrieren Sie sich auf [formspree.io](https://formspree.io) und erstellen Sie ein neues Formular.
2. Kopieren Sie die generierte Endpoint-URL (z. B. `https://formspree.io/f/xyzyqwer`).
3. Setzen Sie die URL in `index.html` in das `action`-Attribut des Forms ein:
   ```html
   action="https://formspree.io/f/IHR_FORM_CODE"
   ```
4. Speichern und auf GitHub pushen.
