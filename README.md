# Klausur 2023 DHBW HDH

## Setup

### Klone dieses Repository

1. Klone das Repository
    ```bash
    git clone <TODO repo url>
    cd klausur
    git remote remove origin
    ```
2. Erstelle in der GitHub Organisation ein Repository mit dem Namen **\<vorname>.\<nachname>**
3. Lade den Stand in das Repository hoch
   ```bash
   git remote add origin <url deines Repositories>
   git push -u origin master
   ```
4. Erstelle einen Branch für die Bearbeitung
   > Vergesse am Ende nicht deine Bearbeitung hochzuladen

### Sicherstellen, dass alles geht

Führe folgende Befehle in deinem Repository aus, um sicherzustellen, dass alles geht:

```bash
npm install

npm run dev
```

## Aufgaben (20 Punkte)

1. Installiere: **(3 Punkte)**
   * ESLint
   * Jest
   * Prettier
   > Die Config Dateien brauchen nicht angepasst werden
   
   > Denke auch an die nötigen Typescript dependencies
2. Schreibe ein `Dockerfile`, dass dazu benutzt werden kann, die Seite zur Verfügung zu stellen **(2 Punkte)**
3. Schreibe GitHub Actions für: **(3 Punkte)**
   * Continuous Integration
   * Continuous Delivery (GitHub Packages)
   * Continuous Deployment (GitHub Pages)
4. Definiere alle nötigen Manifeste um das erstellte Image auf einem Kubernetes Cluster zu deployen **(5 Punkte)**
5. Erkläre in eigenen Worten:
   * Welche Vorteile ein Kubernetes Deployment gegenüber einem Kubernetes Pod hat **(2 Punkte)**
   > Pods können im deployment je nach bedarf skaliert werden.
   > Es kann eine Config-Datei verwendet werden, um den gewünschten Zustand der Anwendung zu beschreiben, Kubernetes kümmert sich um den Rest.
   > Deployments ermöglichen das nahtlose Durchführen von Rolling Updates.
   * Wofür ein Kubernetes Service gut ist **(2 Punkte)**
   > Durch die lose Kopplung müssen sich Anwendungen nicht direkt mit den Pods verbinden.
   > Ein Kubernetes service kann einkommenden datenverkehr auf Pods aufteilen um überlastung zu vermeiden.
   > Wenn sich die Anzahl der Pods ändert, aktuallisiert der Service automatisch die Config, damit alle Pods die gleiche Last erhalten.
   * Mehrere Wege wie man eine Kubernetes Anwendung von außen erreichen kann **(3 Punkte)**
   > Ein Service-Type LoadBalancer läuft in der Cloud und regelt den eingehenden Zugriff auf die Pods
   > Ein Ingress-Controller kann eingehenden HTTPS (und HTTP)-Verkehr steuern, sodass verschiedene dienste unter der selben IP-Addresse zusammengefasst werden können. > > Beispielsweise,wenn mehrere Anwendungen in einem Cluster betrieben werden.
   > Mit NodePort wird ein bestimmter Port auf jedem Node im Kubernetes-Cluster geöffnet und der Service auf diesem Port verfügbar gemacht. So kann man auf die Anwendung zugreifen, indem man die IP-Adresse eines beliebigen Nodes im Cluster und den NodePort verwendet.

## Zusatzaufgabe:

Definiere einen Kubernetes Job **(2 Punkte)**
> Ein Kubernetes Job ist eine Ressource in Kubernetes, welche dazu verwendet wird, Pods zu erstellen und verwalten, die eine bestimmte Aufgabe erfüllen. Jobs werden normalerweise für einmalige oder zeitgesteuerte Tasks verwendet. Sobald ein Job erstellt wird, werden in Kubernetes Pods erstellt, um vordefinierte Aufgaben zu bearbeiten. Sobald alle Pods erfolgreich beendet wurden, gilt der Job als erfolgreich


>Anmerkungen: Lint is nicht im Test job drin, damit der baut. Die ganzen Hotfixes sind auch ein bisschen unelegant. Das gewurschtel mit dem minor-fixes Branch bitte ignorieren.