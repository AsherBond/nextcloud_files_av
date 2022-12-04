OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Net",
    "Infected" : "Infectat",
    "Unchecked" : "Sense verificar",
    "Scanner exit status" : "Estat de finalització de l’escàner",
    "Scanner output" : "Sortida de l’escàner",
    "Saving…" : "S'està desant…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "El fitxer {file} està infectat amb {virus}",
    "The file has been removed" : "S'ha suprimit el fitxer",
    "File containing {virus} detected" : "S'ha detectat un fitxer que conté {virus}",
    "Antivirus detected a virus" : "L'antivirus ha detectat un virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "S'ha detectat el virus %s en el fitxer. No es pot completar la pujada.",
    "Saved" : "S'ha desat",
    "Antivirus for files" : "Antivirus per a fitxers",
    "An antivirus app for Nextcloud" : "Aplicació antivirus per al Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus per a fitxers és una aplicació antivirus per a Nextcloud.\n\n* 🕵️‍♂️ Quan l'usuari carrega un fitxer, es marca\n* ☢️ Els fitxers carregats i infectats s'eliminaran i es mostrarà una notificació i/o s'enviarà per correu electrònic\n* 🔎 Treball de fons per escanejar tots els fitxers\n* ❓ Utilitzeu ClamAV (codi obert) o Kaspersky Scan Engine\n\nAquesta aplicació inspecciona els fitxers que es pengen a Nextcloud per detectar virus abans que s'escriguin a l'emmagatzematge de Nextcloud. Si un fitxer s'identifica com a virus, es registra o no es carrega al servidor. L'aplicació es basa en el motor d'escaneig de virus ClamAV subjacent, al qual l'administrador assenyala Nextcloud quan configura l'aplicació. Alternativament, es pot configurar un motor d'escaneig de Kaspersky, que s'ha d'executar en un servidor independent.\nPerquè aquesta aplicació sigui efectiva, les definicions de virus ClamAV s'han de mantenir actualitzades. Tingueu en compte també que activar aquesta aplicació afectarà el rendiment del sistema, ja que es requereix un processament addicional per a cada càrrega. Trobareu més informació a la documentació de l'antivirus.",
    "Greetings {user}," : "Hola, {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Ho sentim, però es s'ha detectat un programari maliciós en un fitxer que heu intentar pujar i que havia de ser suprimit.",
    "This email is a notification from {host}. Please, do not reply." : "Aquest correu electrònic és una notificació de {host}. Si us plau, no el respongueu.",
    "File uploaded: {file}" : "Fitxer pujat: {file}",
    "Antivirus for Files" : "Antivirus per a fitxers",
    "Mode" : "Mode",
    "ClamAV Executable" : "Executable ClamAV",
    "ClamAV Daemon" : "Dimoni ClamAV",
    "ClamAV Daemon (Socket)" : "Dimoni ClamAV (Sòcol)",
    "Kaspersky Daemon" : "Dimoni Kaspersky",
    "ICAP server" : "Servidor ICAP",
    "Socket" : "Socket",
    "ClamAV Socket." : "Sòcol ClamAV.",
    "Not required in Executable Mode." : "No es requereix en Mode Executable.",
    "Host" : "Servidor",
    "Address of Antivirus Host." : "Adreça del Servidor Antivirus.",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Nombre del port del Servidor Antivirus.",
    "ICAP preset" : "ICAP preestablert",
    "Select" : "Selecciona",
    "ICAP service" : "Servei ICAP",
    "ICAP virus response header" : "Capçalera de resposta del virus ICAP",
    "Stream Length" : "Longitud de la seqüència",
    "ClamAV StreamMaxLength value in bytes." : "Valor en bytes de StreamMaxLength de ClamAV.",
    "bytes" : "bytes",
    "Path to clamscan" : "Camí a clamscan",
    "Path to clamscan executable." : "Camí a l'executable de clamscan.",
    "Not required in Daemon Mode." : "No cal en Mode Dimoni.",
    "Extra command line options (comma-separated)" : "Opcions addicionals de línia d'ordres (separades per comes)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Límit de mida dels fitxers per a exploracions periòdiques en segon pla i càrregues fragmentades, -1 significa cap límit",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Límit de mida del fitxer de pujada en segon pla en bytes, -1 significa cap límit",
    "When infected files are found during a background scan" : "Quan es troben fitxers infectats durant un escanejat en segon pla",
    "Only log" : "Només mostra-ho al registre",
    "Delete file" : "Suprimeix el fitxer",
    "Save" : "Desa",
    "Advanced" : "Avançat",
    "Rules" : "Regles",
    "Clear All" : "Esborra-ho tot",
    "Reset to defaults" : "Reinicialitza els valors per defecte",
    "Match by" : "Coincideix per",
    "Scanner exit status or signature to search" : "Estat de la sortida de l’escàner o signatura per cercar",
    "Description" : "Descripció",
    "Mark as" : "Marca-ho com a",
    "Add a rule" : "Afegeix una regla"
},
"nplurals=2; plural=(n != 1);");
