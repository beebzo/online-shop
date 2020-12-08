import React, {Component} from 'react';
import formatCurrency from "../util";

class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0? (
                    <div className='cart cart-header'>В корзине ничего нет</div>
                    )  :  (
                    <div className='cart cart-header'>В вашей корзине {cartItems.length} товар(ов){' '}</div>
                )}
                <div>
                    <div className='cart'>
                        <ul className='cart-items'>
                            {cartItems.map (item =>(
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={cartItems.title} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className='right'>
                                            {formatCurrency (item.price)} x {item.count} {' '}
                                            <button className='button' onClick={() => this.props.removeFromCart(item)}>
                                                Убрать
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length!==0 && (
                        <div className='total'>
                            <div>
                                Итого: {' '}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price*c.count, 0)
                                )}
                            </div>
                            <button className='button primary'>Proceed</button>
                        </div>

                    )}

                </div>
            </div>
        );
    }
}

export default Cart;