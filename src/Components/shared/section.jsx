import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="Section">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes={
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section;
