# Accord — Client Portal

Customer accounts, project briefs, saved service requests and an owner review inbox.

Hosted version: https://accord-client-portal.ayomideaminu.chatgpt.site

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

This is a Sites/Cloudflare Worker application. Authentication, D1 and external integrations require their corresponding runtime configuration; uploading code to GitHub does not deploy these services. Runtime secrets and user databases are excluded.

## Runtime documentation

# Aminu Ibrahim — Accord, combined website

One website for the animated funding proposal, quote-builder demo, customer portal, private proposal feedback and owner area.

## Routes

- `/`: opens the proposal and welcome animation
- `/proposal/index.html`: the funding plan and product tour
- `/workspace/index.html`: itemized quote builder (browser-local library)
- `/customers` and `/portal`: customer entry and authenticated quote requests
- `/feedback`: private feedback, one editable response per signed-in account
- `/owner`: authenticated owner dashboard and feedback inbox

Proposal and demo are public. Saving customer requests or feedback requires ChatGPT sign-in. Feedback is readable only by its author and the configured owner. The quote-builder library is separate from cloud request records. Existing browser-local quotes on the old quote-builder domain do not automatically transfer to the combined domain.

## Customer flow

Customers sign in with ChatGPT, complete a four-step business brief, save a draft or submit a request, and view its status and the owner's reply. They can see only their own requests. An account is required; this version does not have email/password or Google sign-in.

## Owner flow

The account whose verified sign-in email matches the hosted `OWNER_EMAIL` setting gets an Owner inbox tab. It can view submitted requests, update their status, publish a customer-visible reply, and set a quoted USD amount. Customers' unsubmitted drafts stay private. Updates are visible in the portal; no emails are sent and payments are not collected.

## Run locally in VS Code

Node.js 22.13 or newer is required by the included starter. Open this folder, then run:

```sh
npm ci
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_chemical_imperial_guard.sql
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0001_icy_bullseye.sql
npm run dev
```

The migration is already generated. Run the local migration only once on a new local database. Do not regenerate or rewrite existing production migrations after deployment; append new ones for schema changes.

The development server prints its local URL. The starter simulates ChatGPT sign-in on loopback only, as `seedy@sites.test`; it does not use or store production authentication credentials. To test the owner view locally, create an ignored `.dev.vars` file with `OWNER_EMAIL=seedy@sites.test` and `SITE_ORIGIN` matching your local server URL. Restart the server after changing local environment settings.

## Hosting

The site runs as a Cloudflare-compatible Worker with a logical D1 binding named `DB`. Deploy through Sites with the manifest in `.openai/hosting.json`, the built output, and generated Drizzle migrations. Configure `OWNER_EMAIL` and `SITE_ORIGIN` as hosted runtime variables. The hosting platform owns the sign-in and sign-out routes and forwards the verified user identity. Do not expose a standalone deployment that trusts client-supplied identity headers without an authentication gateway.

## Main source

- `app/page.tsx`: public entry page
- `app/portal/portal.tsx`: customer form, history, and owner inbox
- `app/api/requests/route.ts`: authenticated, owner-scoped API and review endpoint
- `lib/brief.ts`: brief types, options and validation
- `db/schema.ts` and `drizzle/`: persistent schema and migration
- `app/globals.css`: responsive design and automatic device light/dark mode

Browser storage is not used for customer records. Requests persist in D1 and belong to the signed-in customer's Site-specific user ID. The owner email is server configuration, never a client-supplied role.

Local test data is not included in deployment or this source archive.
