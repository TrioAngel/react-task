import * as axios from 'axios';
import React from 'react';
import style from './Navbar.module.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        axios.get("https://api.thecatapi.com/v1/categories").then(response => {
            this.props.getCategories(response.data)
        })
    }

    handleChangeCategories = (categorieId) => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categorieId}`).then(response => {
            this.props.filterCatsWithCategories(response.data)
        })
    }

    render() {
        return (
            <div className={style.navbar}>
                {
                    this.props.categories.map(category => {
                        return (
                            <div key={category.id} className={style.link} onClick={() => this.handleChangeCategories(category.id)}>
                                {category.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Navbar;