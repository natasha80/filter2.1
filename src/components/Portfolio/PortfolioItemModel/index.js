import PropTypes from 'prop_types'

export default function PortfolioItemModel(props) {
  const { img, category } = props.image;
  return <img className="portfolio-image" src={img} data-category={category} alt="portfolio card"/>;
}

PortfolioItemModel.propTypes = {
  props: PropTypes.shape({
    img: PropTypes.string,
    category: PropTypes.string
  })
}