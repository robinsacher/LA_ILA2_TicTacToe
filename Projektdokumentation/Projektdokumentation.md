# LA_ILA2_TicTacToe

# Projekt-Dokumentation

### Gruppe:

- Damian Müller
- Robin Sacher
- Julian Hitz

## 1 Informieren

### 1.1 Ihr Projekt

In diesem Projekt erstellen wir eine Website, auf der man Tic Tac Toe gegen einen Freund oder gegen einen Computergegner spielen kann.

In diesem Projekt wollen wir unsere allgemeine Kenntnisse im Bereich HTML und CSS verbessern und vertiefen. Unser Hauptziel ist es jedoch, mehr Erfahrung mit der Programmiersprache Java Script zu sammeln, da wir in dem Modul 294 mit Java Script arbeiten. Ausserdem wollen auch Fokus auf die Teamarbeit bei grösseren Distanzen legen, da wir dieses Projekt im Homeoffice umsetzen werden.

### 1.2 Anforderungen

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                                                   |
| ---- | --------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional | Als ein User möchte ich das Spielfeld sehen können, damit ich meine Spielzüge planen kann.                                                     |
| 2    | Muss            | Funktional | Als ein User möchte ich X in ein Feld machen können, um ein Spielzug zu spielen.                                                               |
| 3    | Muss            | Funktional | Als ein User möchte ich eine Anzeige sehen, damit ich weiss welcher Spieler an der Reihe ist.                                                  |
| 4    | Muss            | Funktional | Als ein User möchte ich, dass ich gegen den Computer spielen kann, damit ich das Spiel auch alleine spielen kann.                              |
| 5    | Kann            | Kann       | Als ein User möchte ich, dass ein Zweispielermodus spielen kann ohne Computer, damit ich mit Freunden spielen kann.                            |
| 6    | Muss            | Qualität   | Als ein User möchte ich eine Punkteanzeige haben, damit ich weiss wer am Gewinnen ist.                                                         |
| 7    | Muss            | Qualität   | Als ein User möchte ich die Möglichkeit haben eine Runde neu zu starten, damit ich nochmals spielen kann.                                      |
| 8    | Muss            | Qualität   | Als ein User möchte ich, dass die Benutzeroberfläche verständlich gestaltet ist, damit man sich besser Zurecht findet.                         |
| 9    | Muss            | Qualität   | Als ein User möchte ich, dass das Spiel mit verschiedenen Webbrowsern kompatibel ist, damit ich es auf verschiedenen Webbrowsern spielen kann. |
| 10   | Kann            | Qualität   | Als User möchte ich, dass eine Soundanimation abgespielt wird, wenn ich Gewinne, damit das Spiel interessanter wird.                           |
| 11   | Muss            | Qualität   | Als User möchte ich, dass es einen Button gibt, welcher wenn ich ihn anwähle, die Spielregeln von TicTacToe aufgezeigt werden.                 |

### 1.3 Testfälle

| TC-№ | Ausgangslage                                       | Eingabe                                 | Erwartete Ausgabe                           |
| ---- | -------------------------------------------------- | --------------------------------------- | ------------------------------------------- |
| 1.1  | Webseite gestartet                                 | Spiel starten klicken                   | Spiel mit Spielfeld wird geöffnet           |
| 2.1  | Spiel gestartet                                    | Mausklick auf ein Feld                  | x wird in einem Feld platziert              |
| 3.1  | Spiel gestartet                                    | -                                       | Spieler x oder o ist dran                   |
| 4.1  | Webseite gestartet                                 | Gegen Computer spielen anklicken        | Spiel gegen Computer wird gestartet         |
| 5.1  | Webseite gestartet                                 | Gegen anderen Spieler spielen anklicken | Spiel gegen anderen Spieler wird gestartet  |
| 6.1  | Spiel gestartet                                    | -                                       | Punktestand wird angezeigt                  |
| 7.1  | Runde beenden angeklickt                           | neue Runde starten anklicken            | neue Runde startet                          |
| 8.1  | Webseite gestartet                                 | -                                       | Benutzerfreundliche Webseite wird angezeigt |
| 9.1  | Webseite wird auf verschiedenen Browsern gestartet | -                                       | funktionierendes Spiel                      |
| 10.1 | Spiel Gewonnen                                     | -                                       | Soundanimation                              |
| 11.1 | Webseite gestartet                                 | Click auf Spielregelbutton              | Spielregeln                                 |

### 1.4 Diagramme

![Alt text](<Use Case Diagram.png>)

## 2 Planen

| AP-№ | Frist      | Zuständig | Beschreibung                                                                 | geplante Zeit |
| ---- | ---------- | --------- | ---------------------------------------------------------------------------- | ------------- |
| 1.A  | 22.12.2023 | Sacher    | Hier wird das Spielfeld umgesetzt.                                           | 30 Min        |
| 2.A  | 22.12.2023 | Sacher    | Hier wird umgesetzt, dass man ein X oder O in das spielfeld platzieren kann. | 20 Min        |
| 3.A  | 22.12.2023 | Sacher    | Hier wird die Anzeige umgesetzt, welcher spieler gerade an der Reihe ist.    | 20 Min        |
| 4.A  | 22.12.2023 | Hitz      | Hier wird der Computergegner implementiert.                                  | 180 Min       |
| 5.A  | 22.12.2023 | Hitz      | Hier wird der Zweispielermodus umgesetzt.                                   | 60 Min        |
| 6.A  | 22.12.2023 | Hitz      | Hier wird eine Punkteanzeige hinzugefügt.                                    | 60 Min        |
| 7.A  | 22.12.2023 | Müller    | Hier wird die Funktion um ein Spiel neu starten zu können implementiert.     | 40 Min        |
| 8.A  | 22.12.2023 | Müller    | Hier wird die Benutzeroberfläche übersichtlich gestaltet                     | 120 Min       |
| 9.A  | 22.12.2023 | Müller    | Hier wird geschaut, dass das spiel auf allen Webbrowsern funktioniert.       | 60 Min        |
| 10.A | 22.12.2023 | Sacher    | Hier wird, wenn das Spiel gewonnen wird eine Soundanimation abgespielt.      | 30 Min        |
| 11.A | 22.12.2023 | Sacher    | Hier wird der Spielregelbutton hinzugefügt.                                  | 30 Min        |

Total: 650 Min.

## 3 Entscheiden

In diesem Projekt haben wir uns nicht dazu entschieden ein Teil weg zu lassen oder zu ergänzen, da wir es nicht für nötig halten an unserer Planung etwas an zu passen.

## 4 Realisieren

| AP-№ | Datum      | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ---------- | --------- | ------------- | ----------------- |
| 1.A  | 17.11.2023 | Sacher    | 30 Min        | 180 Min           |
| 2.A  | 17.11.2023 | Sacher    | 20 Min        | 60 Min            |
| 3.A  | 24.11.2023 | Sacher    | 20 Min        | 40 Min            |
| 4.A  | 01.12.2023 | Hitz      | 180 Min       | 210 Min           |
| 5.A  | 08.12.2023 | Hitz      | 60 Min        | 100 Min           |
| 6.A  | 01.12.2023 | Hitz      | 60 Min        | 110 Min           |
| 7.A  | 15.12.2023 | Müller    | 40 Min        | 50 Min            |
| 8.A  | 01.12.2023 | Müller    | 120 Min       | 100 Min           |
| 9.A  | 22.12.2023 | Müller    | 60 Min        | 30 Min            |
| 10.A | 15.12.2023 | Sacher    | 30 Min        | 10 Min            |
| 11.A | 08.12.2023 | Sacher    | 30 Min        | 20 Min            |

## 5 Kontrollieren

| Test-№ | TC-№ | Resultat | Datum      | Tester |
| ------ | ---- | -------- | ---------- | ------ |
| 1      | 1.1  | OK ✅    | 22.12.2023 | Sacher |
| 2      | 2.1  | OK ✅    | 22.12.2023 | Sacher |
| 3      | 3.1  | OK ✅    | 22.12.2023 | Sacher |
| 4      | 4.1  | OK ❌    | 22.12.2023 | Sacher |
| 5      | 5.1  | OK ✅    | 22.12.2023 | Sacher |
| 6      | 6.1  | OK ❌    | 22.12.2023 | Sacher |
| 7      | 7.1  | OK ✅    | 22.12.2023 | Sacher |
| 8      | 8.1  | OK ✅    | 22.12.2023 | Sacher |
| 9      | 9.1  | OK ✅    | 22.12.2023 | Sacher |
| 10     | 10.1 | OK ✅    | 22.12.2023 | Sacher |
| 11     | 11.1 | OK ✅    | 22.12.2023 | Sacher |

Die Test sind fast alle erfolgreich. Der Spielmodus gegen den Computer ist noch nicht ganz vollständig, da der Computer momentan noch nicht gewinnen kann.
Es gibt momentan auh noch keine Punkteanzeige in dem Spiel.

## 6 Auswerten
