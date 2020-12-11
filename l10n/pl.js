OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Wyczyść",
    "Infected" : "Zainfekowany",
    "Unchecked" : "Niesprawdzony",
    "Scanner exit status" : "Kod zakończenia skanera",
    "Scanner output" : "Wynik pracy skanera",
    "Saving…" : "Zapisywanie…",
    "Antivirus" : "Antywirus",
    "File {file} is infected with {virus}" : "Plik {file} jest zainfekowany przez {virus}",
    "The file has been removed" : "Plik został usunięty",
    "File containing {virus} detected" : "Wykryto plik zawierający {virus}",
    "Antivirus detected a virus" : "Program antywirusowy wykrył wirusa.",
    "Virus %s is detected in the file. Upload cannot be completed." : "W pliku wykryto wirusa %s. Nie można zakończyć wysyłania.",
    "Saved" : "Zapisano",
    "Antivirus for files" : "Antywirus dla plików",
    "An antivirus app for Nextcloud" : "Aplikacja antywirusowa dla Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antywirus dla plików to aplikacja antywirusowa dla Nextcloud.\n\n* 🕵️‍♂️ Gdy użytkownik przesyła plik, jest on sprawdzany\n* ☢️ Przesłane i zainfekowane pliki zostaną usunięte, a powiadomienie zostanie wyświetlone i/lub wysłane pocztą e-mail\n* 🔎 Zadanie w tle do skanowania wszystkich plików\n* ❓ Użyj ClamAV (otwarte źródło) lub Kaspersky Scan Engine\n\nTa aplikacja sprawdza pliki przesłane do Nextcloud w poszukiwaniu wirusów, przed zapisaniem ich w magazynie Nextcloud. Jeśli plik zostanie zidentyfikowany jako wirus, zostanie zarejestrowany lub nie zostanie przesłany na serwer. Aplikacja opiera się na silniku skanowania antywirusowego ClamAV, który zostaje wskazany przez administratora Nextcloud podczas konfigurowania aplikacji. Alternatywnie można skonfigurować Kaspersky Scan Engine, który musi działać na oddzielnym serwerze.\nAby aplikacja była skuteczna, definicje wirusów ClamAV powinny być aktualizowane. Pamiętaj też, że włączenie tej aplikacji wpłynie na wydajność systemu, ponieważ dla każdego przesłanego pliku wymagane jest dodatkowe przetwarzanie. Więcej informacji jest dostępnych w dokumentacji programu antywirusowego.",
    "Greetings {user}," : "Witaj {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Przepraszamy, ale w pliku, który próbowałeś wgrać wykryto złośliwe oprogramowanie i plik musiał zostać usunięty.",
    "This email is a notification from {host}. Please, do not reply." : "Ten mail jest powiadomieniem z {host}. Proszę na niego nie odpowiadać.",
    "File uploaded: {file}" : "Plik wysłany: {file}",
    "Antivirus for Files" : "Antywirus dla plików",
    "Mode" : "Tryb",
    "ClamAV Executable" : "Plik wykonywalny ClamAV",
    "ClamAV Daemon" : "ClamAV Daemon",
    "ClamAV Daemon (Socket)" : "ClamAV Daemon (gniazdo)",
    "Kaspersky Daemon" : "Kaspersky Daemon",
    "Socket" : "Gniazdo",
    "ClamAV Socket." : "Gniazdo ClamAV.",
    "Not required in Executable Mode." : "Nie wymagane w trybie wykonywalnym.",
    "Host" : "Host",
    "Address of Antivirus Host." : "Adres hosta antywirusa",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Numer portu hosta antywirusa",
    "Stream Length" : "Długość strumienia",
    "ClamAV StreamMaxLength value in bytes." : "Wartość ClamAV StreamMaxLength w bajtach.",
    "bytes" : "bajtów",
    "Path to clamscan" : "Ścieżka do clamscan",
    "Path to clamscan executable." : "Ścieżka do pliku wykonywalnego clamscan.",
    "Not required in Daemon Mode." : "Nie wymagane w trybie demona.",
    "Extra command line options (comma-separated)" : "Dodatkowe parametry linii poleceń (oddzielone przecinkami)",
    "Background scan file size limit in bytes, -1 means no limit" : "Limit rozmiaru pliku w skanowaniu w tle, -1 oznacza brak limitu",
    "When infected files are found during a background scan" : "Kiedy zainfekowane pliki zostaną wykryte podczas skanowania w tle",
    "Only log" : "Tylko log",
    "Delete file" : "Usuń plik",
    "Save" : "Zapisz",
    "Advanced" : "Zaawansowane",
    "Rules" : "Zasady",
    "Clear All" : "Wyczyść",
    "Reset to defaults" : "Przywróć domyślne",
    "Match by" : "Dopasuj według",
    "Scanner exit status or signature to search" : "Kod zakończenia skanera lub sygnatura do wyszukania",
    "Description" : "Opis",
    "Mark as" : "Oznacz jako",
    "Add a rule" : "Dodaj regułę",
    "An antivirus app for Nextcloud based on ClamAV" : "Aplikacja antywirusowa dla Nextcloud bazująca na ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antywirus dla plików to aplikacja antywirusowa dla Nextcloud oparta na ClamAV.\n\n* 🕵️‍♂️ Gdy użytkownik przesyła plik, jest on sprawdzany\n* ☢️ Przesłane i zainfekowane pliki zostaną usunięte, a powiadomienie zostanie wyświetlone i/lub wysłane pocztą e-mail\n* 🔎 Zadanie w tle przy skanowaniu wszystkich plików\n\nTa aplikacja sprawdza pliki przesłane do Nextcloud w poszukiwaniu wirusów, przed zapisaniem ich w magazynie Nextcloud. Jeśli plik zostanie zidentyfikowany jako wirus, zostanie zarejestrowany lub nie zostanie przesłany na serwer. Aplikacja opiera się na silniku skanowania antywirusowego ClamAV, który zostaje wskazany przez administratora Nextcloud podczas konfigurowania aplikacji.\nAby ta aplikacja była skuteczna, definicje wirusów ClamAV powinny być aktualizowane. Pamiętaj też, że włączenie tej aplikacji wpłynie na wydajność systemu, ponieważ dla każdego przesłanego pliku wymagane jest dodatkowe przetwarzanie. Więcej informacji jest dostępnych w dokumentacji programu antywirusowego.",
    "Executable" : "Plik wykonywalny",
    "Daemon" : "Demon",
    "Daemon (Socket)" : "Demon (gniazdo)",
    "Clamav Socket." : "Gniazdo ClamAV.",
    "File size limit, -1 means no limit" : "Limit rozmiaru pliku, -1 oznacza brak limitu"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
