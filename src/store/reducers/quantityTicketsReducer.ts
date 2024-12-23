import { createSlice } from '@reduxjs/toolkit';

interface QuantityTickets {
  quantity: number;
}

const initialState: QuantityTickets = {
  quantity: 5,
};

const quantitySlice = createSlice({
  name: 'quantitySlice',
  initialState,
  reducers: {
    quantityChange: (state: QuantityTickets) => ({
      quantity: state.quantity + 5,
    }),
  },
});

const { quantityChange } = quantitySlice.actions;

const quantityReducer = quantitySlice.reducer;

export { quantityReducer, quantityChange };
