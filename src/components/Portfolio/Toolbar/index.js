import './styles.css';

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