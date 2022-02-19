import { connect } from "react-redux";
import { getCategoriesActionCreator } from "../../redux/categoryReducer";
import { filterCatsWithCategories } from "../../redux/hatsReducer";

import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const NavbarContainer = connect(mapStateToProps, { getCategories: getCategoriesActionCreator, filterCatsWithCategories })(Navbar);

export default NavbarContainer;