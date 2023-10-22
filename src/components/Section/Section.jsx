import { PropTypes } from 'prop-types';
import css from './section.module.css';

const Section = ({ children, title }) => {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
