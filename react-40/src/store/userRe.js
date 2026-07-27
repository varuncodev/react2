import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:[],
    loading:false,
    error:null,

}
const fetchData = createAsyncThunk(
    'user/fetchData',
    async()=>{
        const response = await fetch('https://dummyjson.com/users')
        const data=await response.json()
        // console.log(data)
        return data
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        
    },
    extraReducers:(addBuilder)=>{
        addBuilder.addCase(fetchData.pending, (state,action)=>{
            state.loading =true;
            state.error =null;

        })
         addBuilder.addCase(fetchData.fulfilled, (state,action)=>{
            state.loading =false
            state.users =action.payload

        })
         addBuilder.addCase(fetchData.rejected, (state,action)=>{
            state.loading =false
            state.error =action.error.message

        })

    }

})



export {fetchData}
// export {} =createSlice.actions
export default userSlice.reducer