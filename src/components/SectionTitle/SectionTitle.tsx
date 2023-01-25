import React from 'react';
import './SectionTitle.scss';

interface ISectionTitleProps {
    title: string
}

const SectionTitle: React.FunctionComponent<ISectionTitleProps> = ({title}) => {
  return (
    <h2 className='section-title'>{title}</h2>
  );
};

export default SectionTitle;
