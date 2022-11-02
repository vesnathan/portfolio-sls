import './sectionHeader.component.css';
import React from 'react';

interface SectionHeaderProps {
  text: string,
  variant: string
}
const SectionHeader = ({ text, variant }: SectionHeaderProps): JSX.Element => (
  <div className={`sectionHeaderWrapper ${variant}`}>
    <div className="bar" />
    <h2>{text.toUpperCase()}</h2>
    <div className="cursive">{text}</div>
  </div>
);
export default SectionHeader;
