import { StyledSection } from './StyledSection';
import PropTypes from 'prop-types';

function Section({ children, title, ...restProps }) {
  return (
    <StyledSection {...restProps}>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
