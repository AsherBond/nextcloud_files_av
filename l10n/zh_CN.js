OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "清除",
    "Infected" : "已被感染",
    "Unchecked" : "未选中",
    "Scanner exit status" : "扫描器退出状态",
    "Scanner output" : "扫描器输出",
    "Saving…" : "正在保存……",
    "Antivirus" : "反病毒",
    "File {file} is infected with {virus}" : "文件{file}被{virus}感染",
    "The file has been removed" : "文件已移除",
    "File containing {virus} detected" : "检测到包含{virus}的文件",
    "Antivirus detected a virus" : "反病毒程序检测到一个病毒",
    "Virus %s is detected in the file. Upload cannot be completed." : "在文件中检测到病毒%s。上传未能完成。",
    "Saved" : "已保存",
    "Antivirus for files" : "文件",
    "An antivirus app for Nextcloud" : "适用于Nextcloud的反病毒应用",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "文件反病毒是Nextcloud的反病毒应用程序.\n\n* 🕵️‍♂️ 当用户上传文件时，它将会被检查\n* ☢️ 已经上传并被感染的文件将会被删除，并且会显示通知及/或通过电子邮件发送通知\n* 🔎 具有扫描所有文件的后台任务\n* ❓ 使用ClamAV（开源）, 卡巴斯基扫描引擎或者受ICAP 支持的扫描引擎\n\n此应用程序在文件上传到Nextcloud并写入存储空间之前，会先检查其是否含有病毒。 如果文件被识别为病毒，它将被记录下来或者不会被上传。管理员在设定应用程序的时候指定ClamAV病毒扫描引擎，则应用程序依赖于底层的ClamAV病毒扫描引擎。同时也可以指定卡巴斯基扫描引擎，但其必须在一台单独的服务器上运行。\n为了使该应用程序起到作用，ClamAV的病毒定义文件需要保持最新。也请注意，启用此应用程序将会影响系统的性能，因为每次上传均需要额外的处理。 更多的信息请参见“反病毒”文档。",
    "Greetings {user}," : "您好{user}，",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "抱歉，在您试图上传的文件中检测到恶意软件，文件已被删除。",
    "This email is a notification from {host}. Please, do not reply." : "这封邮件是来自{host} 的通知，请不要回复。",
    "File uploaded: {file}" : "文件已上传：{file}",
    "Antivirus for Files" : "文件反病毒",
    "Mode" : "模式",
    "ClamAV Executable" : "ClamAV可执行文件",
    "ClamAV Daemon" : "ClamAV守护进程",
    "ClamAV Daemon (Socket)" : "ClamAV守护进程 (Socket)",
    "Kaspersky Daemon" : "Kaspersky守护进程",
    "ICAP server" : "ICAP服务器",
    "Socket" : "套接字",
    "ClamAV Socket." : "ClamAV套接字。",
    "Not required in Executable Mode." : "在可执行文件模式中不需要。",
    "Host" : "主机",
    "Address of Antivirus Host." : "反病毒程序主机地址",
    "Port" : "端口",
    "Port number of Antivirus Host." : "反病毒程序主机端口号",
    "TLS" : "TLS",
    "Use TLS encryption." : "使用 TLS 加密。",
    "ICAP preset" : "ICAP预设",
    "Select" : "选择",
    "ICAP mode" : "ICAP模式",
    "ICAP service" : "ICAP服务",
    "ICAP virus response header" : "ICAP病毒响应标头",
    "Stream Length" : "数据流长度",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV数据流最大长度（字节）",
    "bytes" : "字节",
    "Path to clamscan" : "clamscan路径",
    "Path to clamscan executable." : "clamscan可执行文件路径",
    "Not required in Daemon Mode." : "在守护进程模式中不需要",
    "Extra command line options (comma-separated)" : "额外的命令行参数（逗号分隔）",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "定期后台扫描和分块上传的文件大小限制，-1 表示无限制",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "后台扫描和分块上传的文件大小限制，单位为字节，-1 表示无限制",
    "Check only first bytes of the file, -1 means no limit" : "只检查文件的前几个字节，-1 表示无限制",
    "When infected files are found during a background scan" : "当在后台扫描中发现受感染文件时",
    "Only log" : "仅日志",
    "Delete file" : "删除文件",
    "Block unscannable files (such as encrypted archives)" : "屏蔽无法扫描的文件（例如加密的文件）",
    "Save" : "保存",
    "Advanced" : "高级",
    "Rules" : "规则",
    "Clear All" : "清除所有",
    "Reset to defaults" : "重置为默认值",
    "Match by" : "匹配",
    "Scanner exit status or signature to search" : "要搜索的扫描器退出状态或签名",
    "Description" : "描述",
    "Mark as" : "标记为",
    "Add a rule" : "添加规则"
},
"nplurals=1; plural=0;");
