OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Очисти",
    "Infected" : "Заражени",
    "Unchecked" : "Непроверени",
    "Scanner exit status" : "Излазни статус скенера",
    "Scanner output" : "Излаз скенера",
    "Saving…" : "Снимам…",
    "Antivirus" : "Антивирус",
    "File {file} is infected with {virus}" : "Фајл {file} заражен вирусом {virus}",
    "The file has been removed" : "Фајл је уклоњен",
    "File containing {virus} detected" : "Детектован фајл који садржи вирус {virus}",
    "Antivirus detected a virus" : "Антивирус детектовао вирус",
    "Virus %s is detected in the file. Upload cannot be completed." : "Вирус %s детектован у фајлу. Отпремање не може да се заврши.",
    "Saved" : "Сачувано",
    "Antivirus for files" : "Антивирус за фајлове",
    "An antivirus app for Nextcloud" : "Антивирус апликација за Некстклауд",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Антивирус за фајлове је антивирус апликација за Nextcloud.\n\n* 🕵️‍♂️ Када корисник отпреми фајл, он се проверава\n* ☢️ Отпремљени и инфицирани фајлови ће се обрисати и приказаће се обавештење и/или ће да се пошаље и-мејлом\n* 🔎 Позадински посао за скенирање свих фајлова\n* ❓ Користи ClamAV (отвореног кода), Kaspersky Scan Engine или ICAP компатибилни скенер\n\nОва апликација претражује постојање висруса у фајловима који се отпремају на Nextcloud пре него што се упишу у Nextcloud складиште. Ако се у фајлу идентификује вирус, то се или забележи у дневник или се фајл не отпрема на сервер. Апликација се ослања на ClamAV механизам за скрнирање вируса, на који админ усмерава Nextcloud када конфигурише апликацију. Као друга могућност може да се конфигурише Kaspersky Scan Engine, који мора да се извршава на посебном серверу.\nДа би ова апликација била ефективна, потребно је да се ClamAV дефиниције вируса одржавају ажуриним. Такође имајте на уму да ће укључивање ове апликације имати утицаја на перформансе због додатне обраде која је неопходна приликом сваког отпремања. Више информација можете да пронађете у документацији апликације Антивирус.",
    "Greetings {user}," : "Поштовање {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Нажалост, у фајлу који сте пробали да отпремите је примећен малвер и фајл је избрисан.",
    "This email is a notification from {host}. Please, do not reply." : "Овај мејл је обавештење са сајта {host}. Молимо не одговарајте.",
    "File uploaded: {file}" : "Отпремљени фајл: {file}",
    "Antivirus for Files" : "Антивирус за Фајлове",
    "Mode" : "Режим",
    "ClamAV Executable" : "ClamAV извршни фајл",
    "ClamAV Daemon" : "ClamAV сервис",
    "ClamAV Daemon (Socket)" : "ClamAV сервис (Socket)",
    "Kaspersky Daemon" : "Kaspersky сервис",
    "ICAP server" : "ICAP сервер",
    "Socket" : "Socket",
    "ClamAV Socket." : "ClamAV Socket.",
    "Not required in Executable Mode." : "Не захтева се у режиму извршавања.",
    "Host" : "Домаћин",
    "Address of Antivirus Host." : "Адреса домаћина антивируса.",
    "Port" : "Порт",
    "Port number of Antivirus Host." : "Број порта домаћина антивируса",
    "TLS" : "ТЛС",
    "Use TLS encryption." : "Користи TLS шифровање.",
    "ICAP preset" : "ICAP поставка",
    "Select" : "Обележи",
    "ICAP mode" : "ICAP режим",
    "ICAP service" : "ICAP сервис",
    "ICAP virus response header" : "ICAP заглавље одговора вируса",
    "Stream Length" : "Дужина тока",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength вредност у бајтовима.",
    "bytes" : "бајтова",
    "Path to clamscan" : "Путања до clamscan-а",
    "Path to clamscan executable." : "Путања до clamscan извршног фајла.",
    "Not required in Daemon Mode." : "Не захтева се у режиму сервиса",
    "Extra command line options (comma-separated)" : "Додатне опције командне линије (одвојене зарезом)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Ограничење величине фајла за периодична скенирања у позадини и отпремања у комадима, -1 значи да нема ограничења",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Ограничење величине фајла у бајтовима за периодична скенирања у позадини и отпремања у комадима, -1 значи да нема ограничења",
    "Check only first bytes of the file, -1 means no limit" : "Провери само прве бајтове фајла, -1 значи без ограничења",
    "When infected files are found during a background scan" : "Када се нађу инфицирани фајлови за време скенирања у позадини",
    "Only log" : "Само дневник",
    "Delete file" : "Обриши фајл",
    "Block unscannable files (such as encrypted archives)" : "Блокирај фајлове који не могу да се скенирају (као што су шифроване архиве)",
    "Save" : "Сачувај",
    "Advanced" : "Напредно",
    "Rules" : "Правила",
    "Clear All" : "Очисти све",
    "Reset to defaults" : "Ресетуј на подразумевано",
    "Match by" : "Поклапа се са",
    "Scanner exit status or signature to search" : "Излазни статус скенера или потпис за претрагу",
    "Description" : "Опис",
    "Mark as" : "Означи као",
    "Add a rule" : "Додај правило"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
