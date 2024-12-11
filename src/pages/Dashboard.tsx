import React from 'react';
import { PostCard } from '../components/dashboard/PostCard';
import { Post } from '../types/post';

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'New Safety Protocol: Campus Access Guidelines',
    content: 'Updated guidelines for campus access during after-hours. All students must carry their ID cards and sign in at security checkpoints.',
    type: 'safety',
    author: 'Campus Security Admin',
    date: '2024-03-15T10:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1470',
  },
  {
    id: '2',
    title: 'Incident Report: Unauthorized Access Attempt',
    content: 'An unauthorized access attempt was reported at the Science Building. Security measures have been enhanced in the area.',
    type: 'incident',
    author: 'Security Officer Johnson',
    date: '2024-03-14T15:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1469',
  },
  {
    id: '3',
    title: 'Safety Alert: Weather Advisory',
    content: 'Due to expected severe weather conditions, please follow the emergency protocols and stay updated with campus notifications.',
    type: 'safety',
    author: 'Emergency Response Team',
    date: '2024-03-13T09:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&q=80&w=1444',
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-white mb-8">Recent Updates</h1>
      <div className="space-y-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};