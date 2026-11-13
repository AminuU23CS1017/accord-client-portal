import {z} from 'zod';
export const verdicts={'yes':'Yes — worth exploring','maybe':'Promising — I need more evidence','not-yet':'Not ready for funding yet','no':'I would not back this direction'} as const;
export const feedbackSchema=z.object({name:z.string().trim().min(1).max(100),verdict:z.enum(['yes','maybe','not-yet','no']),confidence:z.number().int().min(1).max(5),thoughts:z.string().trim().min(10).max(3000),concerns:z.string().trim().max(1500),nextStep:z.string().trim().max(1500)}).strict();
export type Feedback=z.infer<typeof feedbackSchema>;
export type FeedbackRow={user_id:string;email:string;name:string;verdict:keyof typeof verdicts;confidence:number;thoughts:string;concerns:string;next_step:string;updated_at:string};
