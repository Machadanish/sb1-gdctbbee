import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { IncidentFormData, IncidentType } from '../../types/incident';
import { FormSection } from './FormSection';
import { TextInput } from './inputs/TextInput';
import { TextArea } from './inputs/TextArea';
import { Select } from './inputs/Select';
import { FileUpload } from './inputs/FileUpload';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const incidentSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  location: z.string().min(1, 'Location is required'),
  type: z.enum(['theft', 'vandalism', 'harassment', 'suspicious_activity', 'safety_hazard', 'other'] as const),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  involvedParties: z.string().min(1, 'Involved parties information is required'),
  immediateActions: z.string().min(1, 'Immediate actions taken is required'),
  witnesses: z.string().optional(),
  propertyDamage: z.string().optional(),
  safetyConcerns: z.string().optional(),
  suggestedActions: z.string().optional(),
  evidence: z
    .instanceof(FileList)
    .optional()
    .refine((files) => {
      if (!files) return true;
      return Array.from(files).every(
        (file) => file.size <= MAX_FILE_SIZE && ACCEPTED_FILE_TYPES.includes(file.type)
      );
    }, 'Files must be less than 5MB and in JPG, PNG, or PDF format'),
});

const incidentTypes: { value: IncidentType; label: string }[] = [
  { value: 'theft', label: 'Theft' },
  { value: 'vandalism', label: 'Vandalism' },
  { value: 'harassment', label: 'Harassment' },
  { value: 'suspicious_activity', label: 'Suspicious Activity' },
  { value: 'safety_hazard', label: 'Safety Hazard' },
  { value: 'other', label: 'Other' },
];

export const IncidentReportForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IncidentFormData>({
    resolver: zodResolver(incidentSchema),
  });

  const onSubmit = async (data: IncidentFormData) => {
    try {
      // TODO: Implement submission logic
      console.log('Form data:', data);
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FormSection title="Required Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            label="Date"
            type="date"
            {...register('date')}
            error={errors.date?.message}
          />
          <TextInput
            label="Time"
            type="time"
            {...register('time')}
            error={errors.time?.message}
          />
        </div>
        <TextInput
          label="Location"
          {...register('location')}
          error={errors.location?.message}
        />
        <Select
          label="Type of Incident"
          options={incidentTypes}
          {...register('type')}
          error={errors.type?.message}
        />
        <TextArea
          label="Description of Incident"
          {...register('description')}
          error={errors.description?.message}
          rows={4}
        />
        <TextArea
          label="Individuals Involved"
          {...register('involvedParties')}
          error={errors.involvedParties?.message}
          rows={2}
        />
        <TextArea
          label="Immediate Actions Taken"
          {...register('immediateActions')}
          error={errors.immediateActions?.message}
          rows={2}
        />
        <FileUpload
          label="Supporting Evidence"
          accept={ACCEPTED_FILE_TYPES.join(',')}
          {...register('evidence')}
          error={errors.evidence?.message}
        />
      </FormSection>

      <FormSection title="Additional Details (Optional)">
        <TextArea
          label="Witness Information"
          {...register('witnesses')}
          error={errors.witnesses?.message}
          rows={2}
        />
        <TextArea
          label="Property Damage Estimates"
          {...register('propertyDamage')}
          error={errors.propertyDamage?.message}
          rows={2}
        />
        <TextArea
          label="Safety Concerns"
          {...register('safetyConcerns')}
          error={errors.safetyConcerns?.message}
          rows={2}
        />
        <TextArea
          label="Suggested Follow-up Actions"
          {...register('suggestedActions')}
          error={errors.suggestedActions?.message}
          rows={2}
        />
      </FormSection>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Report'}
        </button>
      </div>
    </form>
  );
};