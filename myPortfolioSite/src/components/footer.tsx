import {
  FaLinkedin,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>


      <div className="social-icons">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.snapchat.com/add/your-username" target="_blank" rel="noreferrer" aria-label="Snapchat">
          <FaSnapchat />
        </a>
        <a href="https://www.tiktok.com/@your-username" target="_blank" rel="noreferrer" aria-label="TikTok">
          <FaTiktok />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>

      <br></br>

      <p>Author: Nahiyan Alim Khandaker</p>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;