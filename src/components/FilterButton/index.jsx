import "./styles.css";

/**
 * FilterButton component for category selection.
 * @param {Object} props - Component props.
 * @param {string} props.content - Button text/category name.
 * @param {Function} props.onClick - Click handler.
 * @param {string} props.selectedCategory - Currently selected category.
 */
const FilterButton = ({ content, onClick, selectedCategory }) => {
  return (
    <button
      className={
        selectedCategory === content
          ? "filter__button__select"
          : "filter__button"
      }
      onClick={onClick}
    >
      <span
        className={
          selectedCategory === content
            ? "filter__button__span__selected"
            : "filter__button__span"
        }
      >
        {content}
      </span>
    </button>
  );
};

import PropTypes from 'prop-types';
FilterButton.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};

export default FilterButton;

/* minor update 11 */

// Component enhancement update 11
