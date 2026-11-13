import {requireChatGPTUser,chatGPTSignOutPath} from '../chatgpt-auth';
import {ownerEmail} from '@/db/raw';
import Portal from './portal';
export const dynamic='force-dynamic';
export default async function PortalPage(){const user=await requireChatGPTUser('/portal');return <div className="shell"><header className="header"><a className="brand" href="/"><span className="mark">A</span>Accord <span className="tag">CLIENT PORTAL</span></a><div className="headerlinks"><span className="account-email">{user.email}</span><a href={chatGPTSignOutPath('/')} target="_top">Sign out</a></div></header><Portal name={user.fullName||''} email={user.email} isOwner={!!ownerEmail()&&user.email.toLowerCase()===ownerEmail()}/><footer className="footer">Accord · Your saved requests are linked to your account.</footer></div>}
