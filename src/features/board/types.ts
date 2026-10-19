export const STATUSES = [
  'wishlist',
  'applied',
  'screening',
  'interview',
  'offer',
  'rejected',
] as const;

export type Status = (typeof STATUSES)[number];

export const STATUS_LABELS: Record<Status, string> = {
  wishlist: 'Wishlist',
  applied: 'Applied',
  screening: 'Screening',
  interview: 'Interview',
  offer: 'Offer',
  rejected: 'Rejected',
};

export type WorkMode = 'onsite' | 'hybrid' | 'remote';

export type Source = 'linkedin' | 'duunitori' | 'jobly' | 'referral' | 'company-site' | 'other';

export interface Application {
  id: string;
  company: string;
  title: string;
  url?: string;
  source: Source;
  location?: string;
  workMode: WorkMode;
  salaryMin?: number;
  salaryMax?: number;
  status: Status;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}
