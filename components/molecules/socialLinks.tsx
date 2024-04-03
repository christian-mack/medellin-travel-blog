import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin, FaShareAlt } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex w-full items-center justify-center gap-8">
      <div className="flex gap-2 items-center">
        <FaShareAlt />
        <p>145</p>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          href="https://twitter.com/share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fexample.com%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
