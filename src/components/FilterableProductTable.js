import React from 'react'
import SearchBar from '../containers/SearchBar'
import ProductTable from '../containers/ProductTable'

class FilterableProductTable extends React.Component {  
    render() {
      return (
        <div>
          <SearchBar />
          <ProductTable />
        </div>
      );
    }
  }
  
export default FilterableProductTable