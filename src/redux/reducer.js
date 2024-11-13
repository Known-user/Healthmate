// import { createReducer } from '@reduxjs/toolkit';

// const FETCH_DATA = 'FETCH_DATA';
// const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
// const SET_EPISODE_NUMBER = 'SET_EPISODE_NUMBER';

// export const popReducer = createReducer(
//   {
//     isAdmin : "false",
// },
//   (builder) => {
//     builder
//     .addCase(FETCH_DATA, (state, action) => {
//         if (action.payload!=null) {
//             state.data = action.payload;
//         }
//     })
//     .addCase(SET_SEARCH_VALUE, (state, action) => {
//         state.searchValue = action.payload;
//     })
//     .addCase(SET_EPISODE_NUMBER, (state, action) => {
//         state.currEpisode = action.payload;
//     });
//   }
// );
import { createReducer } from "@reduxjs/toolkit";

const ADMIN_LOGGED_IN = "ADMIN_LOGGED_IN";
const IS_LOGGED_IN = "IS_LOGGED_IN";
const CART_DATA = "CART_DATA";
const UPDATE_CART_DATA = "UPDATE_CART_DATA";
const PRODUCT = "PRODUCT";

export const popReducer = createReducer(
  {
    isAdmin: true,
    isLoggedIn: false,
    cart: [],
    product: {},
  },
  (builder) => {
    builder
      .addCase(ADMIN_LOGGED_IN, (state, action) => {
        state.isAdmin = action.payload;
      })
      .addCase(IS_LOGGED_IN, (state, action) => {
        state.isLoggedIn = action.payload;
      })
      .addCase(CART_DATA, (state, action) => {
        const itemToAdd = action.payload;
        const existingItemIndex = state.cart.findIndex(
          (item) => item.id === itemToAdd.id
        );

        if (existingItemIndex !== -1) {
          // If item exists, update its quantity
          state.cart[existingItemIndex].ordered += 1;
        } else {
          // If item is new, set ordered to 1 and add it to the cart
          const itemWithOrdered = {
            ...itemToAdd,
            ordered: 1,
          };
          state.cart.push(itemWithOrdered);
        }
      })
      .addCase(PRODUCT, (state, action) => {
        state.product = action.payload;
      })
      .addCase(UPDATE_CART_DATA, (state, action) => {
        state.cart = action.payload;
      })
  }
);
