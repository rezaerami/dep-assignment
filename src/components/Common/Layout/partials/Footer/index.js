import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { uiSelectors } from 'ducks/ui';

import routes from 'constants/routes';
import MESSAGES from 'constants/messages';
import { Container } from 'components/Globals';

import {
  ArrowTopIcon,
  DeptIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from 'resources/icons';

import {
  StyledFooterMenuWrapper,
  StyledFooterMenus,
  StyledLogoWrapper,
  StyledSocialMedias,
  StyledFooterWrapper,
  StyledPolicyWrapper,
  StyledTerms,
  StyledCopyright,
  StyledGoToTop,
} from './styles';

const Footer = ({ className, footerLinks }) => (
  <StyledFooterWrapper className={classNames(className)}>
    <Container>
      <StyledFooterMenuWrapper>
        <StyledLogoWrapper>
          <DeptIcon width="10rem" />
        </StyledLogoWrapper>
        <StyledFooterMenus>
          {footerLinks.map(({ link, title }) => (
            <Link to={link} key={title}>
              {title}
            </Link>
          ))}
        </StyledFooterMenus>
        <StyledSocialMedias>
          <a href={routes.home} title={MESSAGES.FACEBOOK} target="_blank">
            <FacebookIcon width="1.5rem" height="1.5rem" />
          </a>
          <a href={routes.home} title={MESSAGES.TWITTER} target="_blank">
            <TwitterIcon width="1.5rem" height="1.5rem" />
          </a>
          <a href={routes.home} title={MESSAGES.INSTAGRAM} target="_blank">
            <InstagramIcon width="1.5rem" height="1.5rem" />
          </a>
        </StyledSocialMedias>
      </StyledFooterMenuWrapper>
      <StyledPolicyWrapper>
        <StyledTerms>
          <span>{MESSAGES.CHAMBER}</span>
          <span>{MESSAGES.VAT}</span>
          <Link to={routes.home}>{MESSAGES.TERMS_AND_CONDITIONS}</Link>
        </StyledTerms>
        <StyledCopyright>{MESSAGES.COPYRIGHT}</StyledCopyright>
      </StyledPolicyWrapper>
    </Container>
    <StyledGoToTop onClick={() => window.scrollTo(0, 0)}>
      <ArrowTopIcon height="3.5rem" />
      <span>{MESSAGES.TOP}</span>
    </StyledGoToTop>
  </StyledFooterWrapper>
);

Footer.propTypes = {
  className: PropTypes.string,
  footerLinks: PropTypes.array,
};
Footer.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => ({
  footerLinks: uiSelectors.getFooterLinksResults(state),
});

export default connect(mapStateToProps)(Footer);
