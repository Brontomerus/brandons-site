import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Brontomerus',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://twitter.com/gnarlytech',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://www.linkedin.com/in/brandondonelan',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:brandon.donelan@outlook.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
