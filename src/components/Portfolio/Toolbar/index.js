import './styles.css';
import PropTypes from 'prop_types'

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  const filterItems = filters.map((filter) => {
    let filterClass = 'filter-button';
    if (filter === selected) {
      filterClass += ' filter-active';
    }
    return (
      <li key={filter} className={filterClass}>
        {filter}
      </li>
    );
  });

  return (
    <ul className="filters-list" onClick={onSelectFilter}>
      {filterItems}
    </ul>
  );
}

Toolbar.propTypes = {
  prop: PropTypes.shape({
    filters: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.arryOf(PropTypes.string),
    onSelectFilter: PropTypes.func
  }),
}