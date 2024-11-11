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
const CART_DATA = "CART_DATA";
const PRODUCT = "PRODUCT";

export const popReducer = createReducer(
  {
    isAdmin: true,
    cart: [],
    product: {},
  },
  (builder) => {
    builder
      .addCase(ADMIN_LOGGED_IN, (state, action) => {
        state.isAdmin = action.payload;
      })
      .addCase(CART_DATA, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(PRODUCT, (state, action) => {
        state.product = action.payload;
      });
  }
);
