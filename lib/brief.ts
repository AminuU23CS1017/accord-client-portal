import {z} from 'zod';
export const stages=['New business / pre-launch','Established business'] as const;
export const industries=['Retail & e-commerce','Professional services','Food & hospitality','Education','Health & wellness','Creative & media','Technology','Other'] as const;
export const sizes=['Just me','2–10 people','11–50 people','51+ people'] as const;
export const services=['Business website','Online store','Web application','Website redesign','Maintenance & support','Help choosing a solution'] as const;
export const featureOptions=['Contact / enquiry forms','Online bookings','Online payments','Customer accounts','Product catalogue','Content management','Analytics & reporting','Integrations / automation'] as const;
export const budgets=['Under $500','$500–$1,500','$1,500–$3,000','$3,000–$5,000','$5,000+','Need guidance'] as const;
export const timelines=['Within 2 weeks','Within 1 month','1–3 months','3+ months','Flexible'] as const;
export const briefSchema=z.object({contactName:z.string().trim().max(100),businessName:z.string().trim().max(120),stage:z.enum(['',...stages]),industry:z.enum(['',...industries]),teamSize:z.enum(['',...sizes]),location:z.string().trim().max(120),website:z.string().trim().max(300).refine(v=>!v||/^https?:\/\//i.test(v)&&(()=>{try{return !!new URL(v).hostname}catch{return false}})(),'Use a complete http:// or https:// website address.'),services:z.array(z.enum(services)).max(6),features:z.array(z.enum(featureOptions)).max(8),goals:z.string().trim().max(2500),audience:z.string().trim().max(1000),budget:z.enum(['',...budgets]),timeline:z.enum(['',...timelines]),notes:z.string().trim().max(2500)}).strict();
export type Brief=z.infer<typeof briefSchema>;
export const emptyBrief:Brief={contactName:'',businessName:'',stage:'',industry:'',teamSize:'',location:'',website:'',services:[],features:[],goals:'',audience:'',budget:'',timeline:'',notes:''};
export function missingBrief(b:Brief){return [!b.contactName&&'contact name',!b.businessName&&'business name',!b.stage&&'business stage',!b.industry&&'industry',!b.teamSize&&'team size',!b.location&&'business location',!b.services.length&&'at least one service',b.goals.length<20&&'project goals (at least 20 characters)',!b.audience&&'target audience',!b.budget&&'budget range',!b.timeline&&'timeline'].filter(Boolean) as string[];}
export type RequestRecord={id:string;owner_id:string;email:string;status:'draft'|'submitted'|'reviewing'|'quoted'|'closed';brief:Brief;response:string;quote_cents:number|null;revision:number;created_at:string;updated_at:string};
export const statusLabels={draft:'Draft',submitted:'Submitted',reviewing:'In review',quoted:'Quote ready',closed:'Closed'};
