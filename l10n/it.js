OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Puliti",
    "Infected" : "Infetti",
    "Unchecked" : "Non selezionati",
    "Scanner exit status" : "Stato di uscita dell'analizzatore",
    "Scanner output" : "Risultato della scansione",
    "Saving…" : "Salvataggio…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Il file {file} è infetto con {virus}",
    "The file has been removed" : "Il file è stato rimosso",
    "File containing {virus} detected" : "Rilevato file contenente {virus}",
    "Antivirus detected a virus" : "L'antivirus ha rilevato un virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Il virus %s è stato rilevato nel file. L'invio non può essere completato.",
    "Saved" : "Salvati",
    "Antivirus for files" : "Antivirus per i file",
    "An antivirus app for Nextcloud" : "Un'applicazione antivirus per Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus per file è un'applicazione antivirus per Nextcloud basata su ClamAV.\n\n* 🕵️‍♂️ Quando l'utente carica un file, il file viene controllato\n* ☢️ I file caricati e infetti saranno eliminati e una notifica sarà mostrata e/o inviata tramite email\n* 🔎 Operazione in background per analizzare tutti i file\n* ❓ Usa ClamAV (open source) o Kaspersky Scan Engine\n\nQuesta applicazione ispeziona i file che sono caricati su Nextcloud alla ricerca di virus prima che siano scritti sull'archiviazione di Nextcloud. Se un file è identificato come virus, esso viene registrato o non caricato sul server. L'applicazione si affida al motore di scansione antivirus ClamAV sottostante, al quale l'amministratore punta Nextcloud quando configura l'applicazione. In alternativa, può essere configurato un Kaspersky Scan Engine, che deve essere eseguito su un server separato.\nAffinché questa applicazione sia effettiva, le definizioni dei virus di ClamAV dovrebbero essere tenute aggiornate. Nota anche che l'abilitazione di questa applicazione avrà un impatto sulle prestazioni del sistema perché ulteriore capacità di elaborazione sarà richiesta per ogni caricamento. Altre informazioni sono disponibili nella documentazione di Antivirus.",
    "Greetings {user}," : "Saluti {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Spiacenti, ma un malware è stato rilevato in un file che hai provato a caricare e deve essere eliminato.",
    "This email is a notification from {host}. Please, do not reply." : "Questo messaggio è una notifica da {host}. Non rispondere.",
    "File uploaded: {file}" : "File caricato: {file}",
    "Antivirus for Files" : "Antivirus per i file",
    "Mode" : "Modalità",
    "ClamAV Executable" : "Eseguibile ClamAV",
    "ClamAV Daemon" : "Demone ClamAV",
    "ClamAV Daemon (Socket)" : "Demone ClamAV (Socket)",
    "Kaspersky Daemon" : "Demone Kaspersky",
    "Socket" : "Socket",
    "ClamAV Socket." : "Socket ClamAV.",
    "Not required in Executable Mode." : "Non richiesto in modalità eseguibile.",
    "Host" : "Host",
    "Address of Antivirus Host." : "Indirizzo host antivirus.",
    "Port" : "Porta",
    "Port number of Antivirus Host." : "Numero di porta dell'host antivirus.",
    "Stream Length" : "Durata del flusso",
    "ClamAV StreamMaxLength value in bytes." : "Valore in byte StreamMaxLength di Clamav.",
    "bytes" : "byte",
    "Path to clamscan" : "Percorso di clamscan",
    "Path to clamscan executable." : "Percorso dell'eseguibile clamscan.",
    "Not required in Daemon Mode." : "Non richiesto in modalità demone.",
    "Extra command line options (comma-separated)" : "Opzioni aggiuntive della riga di comando (separate da virgola)",
    "Background scan file size limit in bytes, -1 means no limit" : "Limite di dimensione in byte dei file delle scansioni in background, -1 significa nessun limite",
    "When infected files are found during a background scan" : "Quando file infetti sono rilevati durante una scansione in background",
    "Only log" : "Solo log",
    "Delete file" : "Elimina file",
    "Save" : "Salva",
    "Advanced" : "Avanzate",
    "Rules" : "Regole",
    "Clear All" : "Cancella tutto",
    "Reset to defaults" : "Ripristina valori predefiniti",
    "Match by" : "Verifica per",
    "Scanner exit status or signature to search" : "Stato di uscita dell'analizzatore o firma da cercare",
    "Description" : "Descrizione",
    "Mark as" : "Marca come",
    "Add a rule" : "Aggiungi una regola",
    "An antivirus app for Nextcloud based on ClamAV" : "Un'applicazione di antivirus per Nextcloud basata su ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus per file è un'applicazione antivirus per Nextcloud basata su ClamAV.\n\n* 🕵️‍♂️ Quando l'utente carica un file, il file viene controllato\n* ☢️ I file caricati e infetti saranno eliminati e una notifica sarà mostrata e/o inviata tramite email\n* 🔎 Operazione in background per analizzare tutti i file\n\nQuesta applicazione ispeziona i file che sono caricati su Nextcloud alla ricerca di virus prima che siano scritti sull'archiviazione di Nextcloud. Se un file è identificato come virus, esso viene registrato o non caricato sul server. L'applicazione si affida al motore di scansione antivirus ClamAV sottostante, al quale l'amministratore punta Nextcloud quando configura l'applicazione.\nAffinché questa applicazione sia effettiva, le definizioni dei virus di ClamAV dovrebbero essere tenute aggiornate. Nota anche che l'abilitazione di questa applicazione avrà un impatto sulle prestazioni del sistema perché ulteriore capacità di elaborazione sarà richiesta per ogni caricamento. Altre informazioni sono disponibili nella documentazione di Antivirus.",
    "Executable" : "Eseguibile",
    "Daemon" : "Demone",
    "Daemon (Socket)" : "Demone (Socket)",
    "Clamav Socket." : "Socket Clamav.",
    "File size limit, -1 means no limit" : "Limite di dimensione dei file, -1 significa nessun limite"
},
"nplurals=2; plural=(n != 1);");
