import React, {Component} from 'react';
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade'
import Bounce from "react-reveal/Bounce";

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            address:'',
            showCheckout: false,
        };
    }
    handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    };
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
};
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0? (
                    <div className='cart cart-header'>В корзине ничего нет</div>
                    )  :  (
                    <div className='cart cart-header'>
                        В вашей корзине {cartItems.length} товар(ов){' '}
                    </div>
                )}
                <div>
                    <div className="cart">
                        <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count}{" "}
                                            <button
                                                className="button"
                                                onClick={() => this.props.removeFromCart(item)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        </Fade>
                    </div>
                    {cartItems.length!==0 && (
                        <div>
                            <div className='cart'>>
                                <div className='total'>
                                    <div>
                                     Итого: {' '}
                                     {formatCurrency(
                                        cartItems.reduce((a, c) => a + c.price*c.count, 0)
                                     )}
                            </div>
                                <button onClick={()=>{this.setState({showCheckout: true})}}
                                        className='button primary'>
                                    Продолжить
                                </button>
                            </div>
                        </div>
                    {this.state.showCheckout && (
                        <Bounce right cascade>
                        <div className='cart'>
                          <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                              <li>
                                <label>E-mail</label>
                                <input name='email'
                                  type='email'
                                  required onChange={this.handleInput}>
                                </input>
                              </li>
                              <li>
                                 <label>Имя</label>
                                    <input name='name'
                                      type='text'
                                      required onChange={this.handleInput}>
                                    </input>
                              </li>
                               <li>
                                 <label>Адрес</label>
                                 <input  name="address"
                                    type='text'
                                    required onChange={this.handleInput}>
                                 </input>
                               </li>
                               <li>
                                  <button className='button primary' type='submit'>Отправить</button>
                               </li>
                            </ul>
                        </form>
                        </div>
                        </Bounce>
                        )}
                      </div>
                    )}
                </div>
            </div>
        );
    }
}
