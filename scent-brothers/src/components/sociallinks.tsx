import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-600 transition-colors"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-green-600 transition-colors"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};