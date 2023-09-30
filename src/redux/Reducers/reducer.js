import {
  GET_ALL_PRODUCTS,
  GET_ID_DETAIL_PRODUCTS, SET_PAGE, PRODUCTS_PER_PAGE,
  GET_PRODUCT_BY_NAME,
} from "../actionTypes";

const initialState = {
  allProducts: [],
  productDetail: null,
  //   filteredProducts: null,
    currentPage: 1,
    productsPerPage: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                productsPerPage: state.allProducts.slice(0, 4)
            }
        case GET_ID_DETAIL_PRODUCTS:
            return {
                ...state,
                productDetail: action.payload
            }
            case GET_PRODUCT_BY_NAME:
              return {
                ...state,
                allProducts: action.payload,
              };
            // case CLEAN:
    //   return {
    //     allProducts: null,
    //     products: null,
    //     //   filteredProducts: null,
    //   };
    case SET_PAGE:
            const quantity = 4
            const startIndex = (action.payload - 1) * quantity
            const endIndex = startIndex + quantity
            const slice = state.allProducts.slice(startIndex, endIndex)
            return {
                ...state,
                currentPage: action.payload,
                productsPerPage: slice
            }
        case PRODUCTS_PER_PAGE:
            return {
                ...state,
                productsPerPage: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;

//  console.log(filteredProducts)
