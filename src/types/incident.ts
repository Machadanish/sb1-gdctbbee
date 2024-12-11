export type IncidentType = 'theft' | 'vandalism' | 'harassment' | 'suspicious_activity' | 'safety_hazard' | 'other';

export interface IncidentReport {
  id: string;
  date: string;
  time: string;
  location: string;
  type: IncidentType;
  description: string;
  involvedParties: string;
  immediateActions: string;
  witnesses?: string;
  propertyDamage?: string;
  safetyConcerns?: string;
  suggestedActions?: string;
  evidence?: File[];
  reportedBy: string;
  status: 'pending' | 'under_review' | 'resolved';
  createdAt: string;
}

export interface IncidentFormData {
  date: string;
  time: string;
  location: string;
  type: IncidentType;
  description: string;
  involvedParties: string;
  immediateActions: string;
  witnesses?: string;
  propertyDamage?: string;
  safetyConcerns?: string;
  suggestedActions?: string;
  evidence?: FileList;
}