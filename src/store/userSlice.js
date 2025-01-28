import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
  "Users/getAllUsers",
  async (URL, thunkApi) => {
    try {
        let allUsers = localStorage.getItem("users");
        let userData = JSON.parse(allUsers);
      return userData;
    } catch (e) {
      return thunkApi.rejectWithValue("Cannot Access Users Data");
    }
  }
);

export const createUser = createAsyncThunk(
  "Users/createUser",
  async (data, thunkApi) => {
    try {
        let usersFromLocalStorage = localStorage.getItem("users");

        usersFromLocalStorage = JSON.parse(usersFromLocalStorage)||[];
      usersFromLocalStorage.push(data);
      localStorage.setItem("users",JSON.stringify(usersFromLocalStorage));
      return usersFromLocalStorage;
    } catch (e) {
      return thunkApi.rejectWithValue("Cannot Create User");
    }
  }
);

export const deleteUser = createAsyncThunk(
    "Users/deleteUser",
    async (index, thunkApi) => {
      try {
        // Fetch and parse the users array from localStorage
        let usersFromLocalStorage = localStorage.getItem("users");
        usersFromLocalStorage = JSON.parse(usersFromLocalStorage) || [];
  
        // Remove the user at the specified index
        usersFromLocalStorage.splice(index, 1);
  
        // Update localStorage with the modified array
        localStorage.setItem("users", JSON.stringify(usersFromLocalStorage));
  
        // Return the updated array
        return usersFromLocalStorage;
      } catch (e) {
        return thunkApi.rejectWithValue("Cannot delete User");
      }
    }
  );
  
  

const initialState = { users: [], loading: false, error: null };
const slice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: async (bulider) => {
    bulider
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default slice.reducer
