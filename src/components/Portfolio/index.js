import PortfolioItemModel from './PortfolioItemModel';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';
import Toolbar from './Toolbar';
import { useState } from 'react';

export default function Portfolio(props) {
  const { images } = props;
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const imageItems = [];

  const imagesWithKey = images.map((image) => {
    image.id = uuidv4();
    return image;
  });

  imagesWithKey.forEach((image) =>
    imageItems.push(<PortfolioItemModel image={image} key={image.id} />)
  );

  const [activeFilter, setActiveFilter] = useState('All');
  const [activeImages, setActiveImages] = useState(imageItems);

  const handleFilter = (event) => {
    const filter = event.target.textContent;
    if (activeFilter === filter) {
      return;
    }

    setActiveFilter(filter);

    if (filter === 'All') {
      setActiveImages(imageItems);
    } else {
      setActiveImages(imageItems.filter(image => image.props.image.category === filter));
    }
  };

  return (
    <div className="portfolio">
      <Toolbar filters={filters} selected={activeFilter} onSelectFilter={handleFilter} />

      <div className="images">
        <div className="images-column">{activeImages}</div>
      </div>
    </div>
  );
}