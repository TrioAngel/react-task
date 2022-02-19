import React from "react";
import { connect } from "react-redux";
import { getImgActionCreator, getMoreImgsActionCreator } from "../../redux/hatsReducer";
import Hats from "./Hats";

const mapStateToProps = (state) => {
    return {
        imgs: state.hatsPage 
    }
}

export default connect(mapStateToProps, { getImg: getImgActionCreator, getMoreImgs: getMoreImgsActionCreator })(Hats)