import React from "react"
import data from './data.json'
import Products from './components/Products'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products:data.products,
            size: '',
            sort: ''
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