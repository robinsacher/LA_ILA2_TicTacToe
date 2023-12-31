# LA_ILA2_TicTacToe

# Projekt-Dokumentation

### Gruppe:

- Damian Müller
- Robin Sacher
- Julian Hitz

## 1 Informieren

### 1.1 Ihr Projekt

✍️ Beschreiben Sie Ihr Projekt in einem griffigen Satz.

✍️ Erklären Sie genauer in 50 bis 100 Wörtern, was genau Sie in diesem Projekt erreichen möchten, und was Sie dabei zu lernen hoffen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                                                                                  |
| ---- | --------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional | Als ein User möchte ich das Spielfeld sehen können, damit ich meine Spielzüge planen kann.                                                                                    |
| 2    | Muss            | Funktional | Als ein User möchte ich X oder O in ein Feld machen können, um ein Spielzug zu spielen.                                                                                       |
| 3    | Muss            | Funktional | Als ein User möchte ich eine Anzeige sehen, damit ich weiss welcher Spieler an der Reihe ist.                                                                                 |
| 4    | Muss            | Funktional | Als ein User möchte ich, dass ich gegen den Computer spielen kann, damit ich das Spiel spielen kann.                                                                          |
| 5    | Kann            | Kann       | Als ein User möchte ich, dass ein Zweispielermodus spielen kann ohne Computer, damit ich mit Freunden spielen kann.                                                           |
| 6    | Muss            | Qualität   | Als ein User möchte ich eine Punkteanzeige haben, damit ich weiss wer am Gewinnen ist.                                                                                        |
| 7    | Muss            | Qualität   | Als ein User möchte ich die Möglichkeit haben eine Runde neu zu starten, damit ich nochmals spielen kann.                                                                     |
| 8    | Muss            | Qualität   | Als ein User möchte ich, dass die Benutzeroberfläche verständlich gestaltet ist, damit man sich besser Zurecht findet.                                                        |
| 9    | Muss            | Qualität   | Als ein User möchte ich, dass das Spiel mit verschiedenen Webbrowsern kompatibel ist, damit ich es auf verschiedenen Webbrowsern spielen kann.                                |
| 10   | Kann            | Qualität   | Als User möchte ich, dass eine Soundanimation abgespielt wird, wenn ich Gewinne, damit das Spiel interessanter wird.                                                          |
| 11   | Muss            | Qualität   | Als User möchte ich, dass es eine Online Rangliste gibt, in der die Besten Siegesserien von Spielern aufgezeigt werden, damit ich mich mit anderen Spielern vergleichen kann. |
| 12   | Muss            | Qualität   | Als User möchte ich, dass es einen Button gibt, welcher wenn ich ihn anwähle, die Spielregeln von TicTacToe aufgezeigt werden.                                                |
| 13   | Muss            | Funktional | Als User möchte ich ein Benutzerprofil erstellen können, damit ich in der Online Rangliste angezeigt werden kann.                                                             |

### 1.3 Testfälle

| TC-№ | Ausgangslage                                       | Eingabe                                 | Erwartete Ausgabe                           |
| ---- | -------------------------------------------------- | --------------------------------------- | ------------------------------------------- |
| 1.1  | Webseite gestartet                                 | Spiel starten klicken                   | Spiel mit Spielfeld wird geöffnet           |
| 2.1  | Spiel gestartet                                    | x oder o ausgewählt                     | x oder o wird in einem Feld platziert       |
| 3.1  | Spiel gestartet                                    | -                                       | Spieler x oder o ist dran                   |
| 4.1  | Webseite gestartet                                 | Gegen Computer spielen anklicken        | Spiel gegen Computer wird gestartet         |
| 5.1  | Webseite gestartet                                 | Gegen anderen Spieler spielen anklicken | Spiel gegen anderen Spieler wird gestartet  |
| 6.1  | Spiel gestartet                                    | -                                       | Punktestand wird angezeigt                  |
| 7.1  | Runde beenden angeklickt                           | neue Runde starten anklicken            | neue Runde startet                          |
| 8.1  | Webseite gestartet                                 | -                                       | Benutzerfreundliche Webseite wird angezeigt |
| 9.1  | Webseite wird auf verschiedenen Browsern gestartet | -                                       | funktionierendes Spiel                      |
| 10.1 | Spiel Gewonnen                                     | -                                       | Soundanimation                              |
| 11.1 | Benutzerprofil erstellt und Spiel gespielt         | -                                       | Anzeige Online Rangliste                    |
| 12.1 | Webseite gestartet                                 | Click auf Spielregelbutton              | Spielregeln                                 |
| 13.1 | Webseite gestarte                                  | Name des Spielers                       | Benutzerprofil                              |

### 1.4 Diagramme

![Alt text](<Use Case Diagram.png>)

## 2 Planen

| AP-№ | Frist      | Zuständig | Beschreibung                                                                 | geplante Zeit |
| ---- | ---------- | --------- | ---------------------------------------------------------------------------- | ------------- |
| 1.A  | 22.12.2023 | Sacher    | Hier wird das Spielfeld umgesetzt.                                           | 30 Min        |
| 2.A  | 22.12.2023 | Sacher    | Hier wird umgesetzt, dass man ein X oder O in das spielfeld platzieren kann. | 20 Min        |
| 3.A  | 22.12.2023 | Sacher    | Hier wird die Anzeige umgesetzt, welcher spieler gerade an der Reihe ist.    | 20 Min        |
| 4.A  | 22.12.2023 | Hitz      | Hier wird der Computergegner implementiert.                                  | 180 Min       |
| 4.B  | 22.12.2023 | Hitz      | Hier wird der Computergegner implementiert.                                  | 180 Min       |
| 5.A  | 22.12.2023 | Hitz      | Hier wird der Zweiscpielermodus umgesetzt.                                   | 60 Min        |
| 6.A  | 22.12.2023 | Hitz      | Hier wird eine Punkteanzeige hinzugefügt.                                    | 60 Min        |
| 7.A  | 22.12.2023 | Müller    | Hier wird die Funktion um ein Spiel neu starten zu können implementiert.     | 40 Min        |
| 8.A  | 22.12.2023 | Müller    | Hier wird die Benutzeroberfläche übersichtlich gestaltet                     | 120 Min       |
| 9.A  | 22.12.2023 | Müller    | Hier wird geschaut, dass das spiel auf allen Webbrowsern funktioniert.       | 60 Min        |
| 10.A | 22.12.2023 | Sacher    | Hier wird, wenn das Spiel gewonnen wird eine Soundanimation abgespielt.      | 30 Min        |
| 11.A | 22.12.2023 | Sacher    | Hier wird die Online Rangliste hinzugefügt.                                  | 45 Min        |
| 12.A | 22.12.2023 | Sacher    | Hier wird der Spielregelbutton hinzugefügt.                                  | 30 Min        |
| 13.A | 22.12.2023 | Sacher    | Hier wird das Benutzerprofil hinzugefügt und abgespeichert.                  | 60 Min        |

Total: 1055 Min.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
