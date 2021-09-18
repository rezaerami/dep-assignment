import routes from 'constants/routes';
import MESSAGES from 'constants/messages';

const menus = [
  {
    title: MESSAGES.HOME,
    link: routes.home,
    children: [
      {
        title: MESSAGES.LANDEN,
        link: routes.home,
      },
      {
        title: MESSAGES.GLOBAL,
        link: routes.home,
      },
      {
        title: MESSAGES.NEDERLAND,
        link: routes.home,
      },
      {
        title: MESSAGES.UNITED_STATES,
        link: routes.home,
      },
      {
        title: MESSAGES.IRELAND,
        link: routes.home,
      },
      {
        title: MESSAGES.UNITED_KINGDOM,
        link: routes.home,
      },
      {
        title: MESSAGES.DEUTSCHLAND,
        link: routes.home,
      },
      {
        title: MESSAGES.SCHWEIZ,
        link: routes.home,
      },
    ],
  },
  {
    title: MESSAGES.WERK,
    link: routes.home,
  },
  {
    title: MESSAGES.OVER,
    link: routes.home,
  },
  {
    title: MESSAGES.DIENSTEN,
    link: routes.home,
  },
  {
    title: MESSAGES.PARTNERS,
    link: routes.home,
  },
  {
    title: MESSAGES.STORIES,
    link: routes.home,
  },
  {
    title: MESSAGES.VACATURES,
    link: routes.home,
    children: [
      {
        title: MESSAGES.FACEBOOK,
        link: routes.home,
      },
      {
        title: MESSAGES.TWITTER,
        link: routes.home,
      },
      {
        title: MESSAGES.INSTAGRAM,
        link: routes.home,
      },
      {
        title: MESSAGES.LINKEDIN,
        link: routes.home,
      },
    ],
  },
];

export default menus;
