import React from "react"
import data from './data.json'
import Products from './components/Products'
import Filter from "./components/Filter";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products:data.products,
            options: '',
            sort: ''
        }
    }
    sortProducts = (event) => {
        //impl
        const sort = event.target.value;
        console.log(event.target.value)
        this.setState(() => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a,b) =>
                sort === 'lowest'
                    ? a.price > b.price
                    ? 1
                    :-1
                    : sort === 'highest'
                    ? a.price < b.price
                        ? 1
                        :-1
                    : a._id > b._id
                        ? 1
                        :-1
                ),
        }))
    }
    filterProducts = (event) => {
        //impl
        console.log(event.target.value);
        if (event.target.value === '') {
            this.setState({options: event.target.value, product: data.products});
        } else {
            this.setState({
                options: event.target.value,
                products: data.products.filter
                (product => product.availableOptions.indexOf(event.target.value) >= 0
                ),
            })
        }
    }
    render() {
    return (
    <div className="grid-container">
      <header>
          <a href="/">Домой</a>
      </header>
      <main>
          <div className='content'>
              <div className='main'>
                  <Filter
                      count={this.state.products.length}
                      options={this.state.options}
                      sort={this.state.sort}
                      filterProducts={this.filterProducts}
                      sortProducts={this.sortProducts}  />
                  <Products products={this.state.products} />
              </div>
          <div className='sidebar'>Корзина</div>
          </div>
      </main>
      <footer>
          Copyright
      </footer>
    </div>
  );
}
}
export default App