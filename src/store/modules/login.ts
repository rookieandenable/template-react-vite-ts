import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '@/api'

const initState = {
  login: false
}

// 请求
export const loginAsync = createAsyncThunk(
  'login/loginApi',
  async (params: any) => {
    const res = await api.login(params)
    return res.data
  }
)

export const counterSlice = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    setLoginState(state: any, action: PayloadAction<boolean>) {
      state.login = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.login = true
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.login = false
      })
  }
})

export const { setLoginState } = counterSlice.actions
const { reducer } = counterSlice

export default reducer
