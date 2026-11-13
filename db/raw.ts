import {env} from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('Request storage is unavailable.');return env.DB;}
export function ownerEmail(){return String((env as unknown as {OWNER_EMAIL?:string}).OWNER_EMAIL||'').trim().toLowerCase();}
export function siteOrigin(){return String((env as unknown as {SITE_ORIGIN?:string}).SITE_ORIGIN||'');}
