import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { setFilterText, setInStock } from '../store/actions';

const mapStateToProps = state => ({
    filterText: state.filterText,
    inStockOnly: state.inStock
})

const mapDispatchToProps = dispatch => ({
    onFilterTextChange: filterText => dispatch(setFilterText(filterText)),
    onInStockChange: inStock => dispatch(setInStock(inStock))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)