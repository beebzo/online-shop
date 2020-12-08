import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div className='filter'>
                <div className='filter-result'>{this.props.count} Товар(ов)</div>
                <div className='filter-sort'>
                    Сортировать{' '}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Новинки</option>
                        <option value="lowest">Дешевле</option>
                        <option value="highest">Дороже</option>
                    </select>
                </div>
                <div className='filter-options'>
                    Фильтр {' '}
                    <select value={this.props.options} onChange={this.props.filterProducts}>
                        <option value=''>Все</option>
                        <option value='32gb'>32gb</option>
                        <option value='64gb'>64gb</option>
                        <option value='128gb'>128gb</option>
                        <option value='256gb'>256gb</option>
                        <option value=''>Другое</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;