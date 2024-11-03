import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../assets/icons/Icons';
import { CONSTANTS } from '../../utilities/constants';
import './Footer.scss';

const socialMediaLinks = [
  { url: CONSTANTS.FOOTER.SOCIAL_MEDIA_URLS.FACEBOOK, icon: <FacebookIcon /> },
  { url: CONSTANTS.FOOTER.SOCIAL_MEDIA_URLS.INSTAGRAM, icon: <InstagramIcon /> },
  { url: CONSTANTS.FOOTER.SOCIAL_MEDIA_URLS.TWITTER, icon: <TwitterIcon /> },
  { url: CONSTANTS.FOOTER.SOCIAL_MEDIA_URLS.YOUTUBE, icon: <YoutubeIcon /> },
];

const footerLinks = [
  { text: CONSTANTS.FOOTER.LINKS.CONDITIONS, url: '#' },
  { text: CONSTANTS.FOOTER.LINKS.PRIVACY_POLICY, url: '#' },
  { text: CONSTANTS.FOOTER.LINKS.PRESS_ROOM, url: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div className="social">
          {socialMediaLinks.map((link, index) => (
            <Link key={index} to={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </Link>
          ))}
        </div>

        <div className="links">
          {footerLinks.map((link, index) => (
            <Link key={index} to={link.url}>{link.text}</Link>
          ))}
        </div>
        
        <div className="copyright">{CONSTANTS.FOOTER.COPYRIGHT_TEXT}</div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
