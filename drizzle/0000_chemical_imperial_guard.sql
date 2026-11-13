CREATE TABLE `requests` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`email` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`brief` text NOT NULL,
	`response` text DEFAULT '' NOT NULL,
	`quote_cents` integer,
	`revision` integer DEFAULT 1 NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `requests_owner_updated` ON `requests` (`owner_id`,`updated_at`);--> statement-breakpoint
CREATE INDEX `requests_status_updated` ON `requests` (`status`,`updated_at`);