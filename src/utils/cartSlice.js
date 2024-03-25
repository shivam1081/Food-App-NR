import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here:- Modifying the existing state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // This basically mutates the state . If we do state=[] then that state is local variable and main state is not changed
      // console.log(current(state));
      state.items.length = 0;
      // We can also do return {items:[]} as RTK says mutate the exisiting state or return a new state. Basically originalState={items:[]}
    },
  },
});

// basically what happens here is that
// cartSlice = { actions: { addItem, removeItem, clearCart }, reducer }

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
