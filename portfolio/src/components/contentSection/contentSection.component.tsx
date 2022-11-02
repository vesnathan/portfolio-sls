import './contentSection.component.css';
import React from 'react';
import SectionHeader from '../sectionHeader/sectionHeader.component';
// eslint-disable-next-line import/no-useless-path-segments, @typescript-eslint/no-unused-vars
import {
  skills, education, interests, referees, contact, profile, Portfolio,
} from '../../sections';

interface LeftBarSectionProps {
  text: string,
  headerVariant: string
}

const ContentSection = ({ text, headerVariant }: LeftBarSectionProps): JSX.Element => (
  <section className={`contentSection ${text}`}>
    <SectionHeader text={text} variant={headerVariant} />

    <div className={`${text}-contentWrapper`}>
      {
        text === 'contact'
          && contact
      }
      {
        text === 'skills'
          && skills
      }
      {
        text === 'education'
          && education
      }
      {
        text === 'interests'
          && interests
      }
      {
        text === 'referees'
          && referees
      }
      {
        text === 'profile'
          && profile
      }
      {
        text === 'portfolio'
          && <Portfolio />
      }
    </div>

  </section>
);
export default ContentSection;
