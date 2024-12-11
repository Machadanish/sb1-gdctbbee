import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';
import { Post } from '../../types/post';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
      {post.imageUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          {post.type === 'incident' ? (
            <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
          ) : (
            <Shield className="h-5 w-5 text-green-400 mr-2" />
          )}
          <span className="font-semibold text-white">{post.title}</span>
        </div>
        <p className="text-gray-300 mb-4">{post.content}</p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Posted by {post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};