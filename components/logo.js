import React from 'react';

const Logo = ({ className, ...attrs }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 789 198.9"
    className={`w-16 md:w-24 lg:w-32 fill-current ${className}`}
    {...attrs}
  >
    <path
      className="text-blue-500 fill-current"
      d="M322.3 114h84.4V84.6h-84.4V32.1h90.9V2.5h-126v193.7H414v-29.4h-91.6V114zM185 145h-1.7L146 2.7h-34.3L74.4 144.8h-1.8L37.7 2.6H0l54.6 193.7h34.6l38.9-135.9h1.5l38.8 135.9H203L257.6 2.6H220L185 145z"
    />
    <path
      className="text-blue-500 fill-current"
      d="M548.7 108.8v27.5h44.6c-.5 27.6-19 45-48.1 45-32.4 0-54.6-24.2-54.6-68.1 0-43.6 22.6-67.8 53.8-67.8a44.5 44.5 0 0145.5 33h35.8c-6-38-38.9-64.5-81.7-64.5-50.7 0-88.7 37.3-88.7 99.7 0 61.3 36.3 99.3 89.7 99.3 48 0 82.3-30.9 82.3-80.8v-23.3z"
      transform="translate(-16.5 -14)"
    />
    <path
      className="text-teal-600 fill-current"
      d="M789 95h-51.6V43.4h-27.6V95h-51.6v27.7h51.6v51.5h27.6v-51.5H789V95z"
    />
  </svg>
)

export default Logo;
