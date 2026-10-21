import linkedinIcon from '../assets/images/icons/linkedin-icon.png';
import githubIcon from '../assets/images/icons/github-icon.png';
import emailIcon from '../assets/images/icons/email-icon.png';
import './social-links.css';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/..." aria-label="LinkedIn">
        <img src={linkedinIcon} alt="" width="25" height="25" />
      </a>
      <a href="https://github.com/..." aria-label="GitHub">
        <img src={githubIcon} alt="" width="25" height="25" />
      </a>
      <a href="mailto:you@example.com" aria-label="Email">
        <img src={emailIcon} alt="" width="25" height="25" />
      </a>
    </div>
  );
}