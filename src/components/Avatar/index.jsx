import React from 'react';
import PropTypes from 'prop-types';

/**
 * Avatar component for displaying user profile images.
 * @param {Object} props - Component props.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - Alternative text for the image.
 * @param {string} props.size - The size of the avatar (sm, md, lg).
 */
const Avatar = ({ src, alt = 'Avatar', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <img
      src={src || 'https://via.placeholder.com/150'}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses[size]}`}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Avatar;

/* minor update 3 */

// Component enhancement update 3
