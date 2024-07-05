<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_Antivirus\ICAP;

use OCP\ICertificateManager;
use RuntimeException;

class ICAPTlsClient extends ICAPClient {
	private ICertificateManager $certificateManager;

	public function __construct(
		string $host,
		int $port,
		int $connectTimeout,
		ICertificateManager $certificateManager
	) {
		parent::__construct($host, $port, $connectTimeout);
		$this->certificateManager = $certificateManager;
	}

	/**
	 * Connect to ICAP server
	 *
	 * @return resource
	 */
	protected function connect() {
		$ctx = stream_context_create([
			'ssl' => [
				'cafile' => $this->certificateManager->getAbsoluteBundlePath()
			],
		]);
		$stream = \stream_socket_client(
			"tls://{$this->host}:{$this->port}",
			$errorCode,
			$errorMessage,
			$this->connectTimeout,
			STREAM_CLIENT_CONNECT,
			$ctx
		);

		if (!$stream) {
			throw new RuntimeException(
				"Cannot connect to \"tls://{$this->host}:{$this->port}\": $errorMessage (code $errorCode)"
			);
		}

		return $stream;
	}
}
