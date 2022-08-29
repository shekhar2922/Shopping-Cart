const initialState = {
    products : [],
    cart : [],
    searchQuery : ""
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCTS" : 
        return{...state, products : action.payload}
    case "ADD_TO_CART" :
        return{...state, cart : [{...action.payload}, ...state.cart]}
    case "REMOVE_FROM_CART" :
        return{...state, cart : state.cart.filter(c=> c.id !== action.payload.id)}
    case "CHANGE_CART_QTY" : 
        return{...state, cart : state.cart.filter(c=> c.id === action.payload.id ? (c.qty= action.payload.qty): c.qty)}
    case "SEARCH_QUERY" : 
        return{...state, searchQuery: action.payload}
    default : 
        return state;
  }
}
