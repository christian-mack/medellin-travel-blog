import React from "react";
import { FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";

type AuthorProfileProps = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
};

const AuthorProfile: React.FC<AuthorProfileProps> = ({
  name,
  title,
  bio,
  imageUrl,
}) => {
  return (
    <div className=" rounded-lg p-6 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="rounded-full w-24 h-24 mb-4" />
      <p className="text-sm text-gray-500 dark:text-white/90 uppercase mb-2">
        {title}
      </p>
      <h3 className="text-lg text-gray-700 font-semibold">{name}</h3>
      <div className="flex space-x-4 text-gray-600 dark:text-white/90">
        <FaGlobe />
        <FaFacebook />
        <FaInstagram />
      </div>
      <p className="text-sm text-center text-gray-700 dark:text-white/90 mb-4">
        {bio}
      </p>
    </div>
  );
};

export default AuthorProfile;
