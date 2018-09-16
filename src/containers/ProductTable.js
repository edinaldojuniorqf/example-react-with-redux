import { connect } from 'react-redux'
import ProductTable from '../components/ProductTable'
import { setProducts } from '../store/actions';

const mapStateToProps = state => ({
    products: state.products,
    filterText: state.filterText,
    inStockOnly: state.inStockOnly
})

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable)