import linkedinLight from '../assets/images/icons/linkedin-icon-light.png';
import linkedinDark from '../assets/images/icons/linkedin-icon-dark.png';
import githubLight from '../assets/images/icons/github-icon-light.png';
import githubDark from '../assets/images/icons/github-icon-dark.png';
import emailLight from '../assets/images/icons/email-icon-light.png';
import emailDark from '../assets/images/icons/email-icon-dark.png';
import './social-links.css';

const icons = {
  light: { linkedin: linkedinLight, github: githubLight, email: emailLight },
  dark: { linkedin: linkedinDark, github: githubDark, email: emailDark },
};

export default function SocialLinks({ variant }) {
  const set = icons[variant];

  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/..." aria-label="LinkedIn">
        <img src={set.linkedin} alt="" width="25" height="25" />
      </a>
      <a href="https://github.com/..." aria-label="GitHub">
        <img src={set.github} alt="" width="25" height="25" />
      </a>
      <a href="mailto:you@example.com" aria-label="Email">
        <img src={set.email} alt="" width="25" height="25" />
      </a>
    </div>
  );
}