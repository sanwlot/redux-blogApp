import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: 0, name: "Sylvia" },
  { id: 1, name: "Ajay" },
  { id: 2, name: "Gribouille" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
