OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Sain",
    "Infected" : "Infecté",
    "Unchecked" : "Non contrôlé",
    "Scanner exit status" : "Résultat du scan",
    "Scanner output" : "Résultat du scan",
    "Saving…" : "Enregistrement…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Le fichier {file} est infecté par {virus}",
    "The file has been removed" : "Le fichier a été supprimé",
    "File containing {virus} detected" : "Fichier contenant {virus} détecté",
    "Antivirus detected a virus" : "L'antivirus a détecté un virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Le virus %s est détecté dans ce fichier. Le téléversement ne peut pas se terminer.",
    "Saved" : "Enregistré",
    "Antivirus for files" : "Antivirus pour les fichiers",
    "An antivirus app for Nextcloud" : "Une application antivirus pour Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus for files est une application antivirus pour Nextcloud.\n\n* 🕵️‍♂️ Lorsque l'utilisateur télécharge un fichier, il est vérifié\n* ☢️ Les fichiers téléchargés et infectés seront supprimés et une notification sera affichée et / ou envoyée via email\n* 🔎 Travail en arrière-plan pour analyser tous les fichiers\n* ❓ Utilisez ClamAV (open source) ou Kaspersky Scan Engine\n\nCette application inspecte les fichiers téléchargés sur Nextcloud à la recherche de virus avant qu'ils ne soient écrits sur le stockage Nextcloud. Si un fichier est identifié comme un virus, il est enregistré ou non téléchargé sur le serveur. L'application repose sur le moteur d'analyse antivirus ClamAV, configuré par l'administrateur. Il est également possible de configurer Kaspersky Scan Engine, qui doit s'exécuter sur un serveur séparé.\nPour que cette application soit efficace, les définitions de virus ClamAV doivent être tenues à jour. Notez également que l'activation de cette application aura un impact sur les performances du système car un traitement supplémentaire est nécessaire pour chaque téléchargement. Plus d'informations sont disponibles dans la documentation Antivirus.",
    "Greetings {user}," : "Bonjour {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Désolé, mais un logiciel malveillant a été détecté dans un fichier que vous avez essayé de téléverser et a été supprimé.",
    "This email is a notification from {host}. Please, do not reply." : "Cet e-mail est une notification de {host}. Veuillez ne pas y répondre.",
    "File uploaded: {file}" : "Fichier envoyé: {file}",
    "Antivirus for Files" : "Antivirus pour les fichiers",
    "Mode" : "Mode",
    "ClamAV Executable" : "Exécutable ClamAV",
    "ClamAV Daemon" : "Processus ClamAV",
    "ClamAV Daemon (Socket)" : "Processus (socket) ClamAV",
    "Kaspersky Daemon" : "Processus Kaspersky",
    "Socket" : "Socket",
    "ClamAV Socket." : "Socket de ClamAV",
    "Not required in Executable Mode." : "Non requis en mode exécutable.",
    "Host" : "Hôte",
    "Address of Antivirus Host." : "Adresse de l'hôte anvirus",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Port d'hôte de l'anvirus",
    "Stream Length" : "Taille du flux",
    "ClamAV StreamMaxLength value in bytes." : "StreamMaxLength de ClamAV (octets).",
    "bytes" : "octets",
    "Path to clamscan" : "Chemin de clamscan",
    "Path to clamscan executable." : "Chemin de l'exécutable clamscan",
    "Not required in Daemon Mode." : "Non requis dans le mode processus.",
    "Extra command line options (comma-separated)" : "Options de ligne de commande supplémentaires (séparées par des virgules)",
    "Background scan file size limit in bytes, -1 means no limit" : "Taille limite en octets des fichiers scannés en arrière plan, -1 signifie aucune limite.",
    "When infected files are found during a background scan" : "Lorsque des fichiers infectés sont détectés durant un scan en arrière-plan",
    "Only log" : "Journaux seulement",
    "Delete file" : "Supprimer le fichier",
    "Save" : "Enregistrer",
    "Advanced" : "Avancé",
    "Rules" : "Rôles",
    "Clear All" : "Effacer tout",
    "Reset to defaults" : "Réinitialiser aux valeurs par défaut",
    "Match by" : "Trier par",
    "Scanner exit status or signature to search" : "État de sortie du scanner ou signature à rechercher",
    "Description" : "Description",
    "Mark as" : "Marqué comme",
    "Add a rule" : "Ajouter une règle",
    "An antivirus app for Nextcloud based on ClamAV" : "Une application antivirus pour Nextcloud basée sur ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus pour les fichiers est une application antivirus pour Nextcloud basée sur ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Les fichiers téléversés et infectés seront supprimés et une notification sera visible ou envoyée par e-mail\n* 🔎 Tâche de fond pour analyser tous les fichiers\n\nCette application inspecte les fichiers téléversés sur Nextcloud à la recherche de virus avant leur écriture sur le stockage NextCloud. Si un fichier est identifié comme un virus, il est consigné ou non sur le serveur. L'application repose sur le moteur d'analyse de virus ClamAV sous-jacent, que l'administrateur lie à Nextcloud lors de la configuration de l'application.\nPour que cette application soit efficace, les définitions de virus ClamAV doivent être tenues à jour. Notez également que l'activation de cette application aura une incidence sur les performances du système, car un traitement supplémentaire est requis pour chaque téléchargement. Plus d'informations sont disponibles dans la documentation de l'antivirus.",
    "Executable" : "Exécutable",
    "Daemon" : "Processus",
    "Daemon (Socket)" : "Processus (socket)",
    "Clamav Socket." : "Socket de clamav.",
    "File size limit, -1 means no limit" : "Taille limite, -1 signifie aucune"
},
"nplurals=2; plural=(n > 1);");
