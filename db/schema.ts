import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
export const requests=sqliteTable('requests',{
 id:text('id').primaryKey(), ownerId:text('owner_id').notNull(), email:text('email').notNull(), status:text('status').notNull().default('draft'), brief:text('brief').notNull(), response:text('response').notNull().default(''), quoteCents:integer('quote_cents'), revision:integer('revision').notNull().default(1), createdAt:text('created_at').notNull(), updatedAt:text('updated_at').notNull()
},table=>[index('requests_owner_updated').on(table.ownerId,table.updatedAt),index('requests_status_updated').on(table.status,table.updatedAt)]);

export const feedback=sqliteTable('feedback',{
 userId:text('user_id').primaryKey(), email:text('email').notNull(), name:text('name').notNull(), verdict:text('verdict').notNull(), confidence:integer('confidence').notNull(), thoughts:text('thoughts').notNull(), concerns:text('concerns').notNull(), nextStep:text('next_step').notNull(), updatedAt:text('updated_at').notNull()
});
