import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '@/api'

const initState = {
  userInfo: {}
}

// 请求
export const getUserInfoAsync = createAsyncThunk(
  'home/getUserInfo',
  async (params: any) => {
    const res = await api.getUserInfo(params)
    return res.data
  }
)

export const counterSlice = createSlice({
  name: 'home',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.userInfo = { state: 'success' }
      })
      .addCase(getUserInfoAsync.rejected, (state, action) => {
        state.userInfo = { state: 'error' }
      })
  }
})

const { reducer } = counterSlice

export default reducer
