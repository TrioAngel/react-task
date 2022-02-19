import React from "react";
import style from './Hats.module.css'
import * as axios from 'axios';

class Hats extends React.Component {
    constructor(props) {
        super(props)
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1").then(response => {
            this.props.getImg(response.data)
        })
    }

    getMoreImgs = () => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=2&category_ids=1`).then(response => {
            this.props.getMoreImgs(response.data)
        })
    }

    render() {
        return (
            <div className={style.imgsBlock}>
                {
                    this.props.imgs.map(img => {
                        return (
                            <div className={style.imgBlock}>
                                <img src={img.url} />
                            </div>
                        )
                    })
                }
    
                <div className={style.imgGetmoreBtn}>
                    <button onClick={this.getMoreImgs}>Get more cats!!!</button>
                </div>
            </div>
        )
    }
}

export default Hats;