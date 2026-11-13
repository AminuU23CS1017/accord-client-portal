CREATE TABLE `feedback` (
	`user_id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`verdict` text NOT NULL,
	`confidence` integer NOT NULL,
	`thoughts` text NOT NULL,
	`concerns` text NOT NULL,
	`next_step` text NOT NULL,
	`updated_at` text NOT NULL
);
