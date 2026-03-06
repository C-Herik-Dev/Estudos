import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  users: [],
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      const {name, email} = action.payload;

      state.user = {
        name,
        email,
        address: null
      }
    },

    logoutUser: (state) => {
      state.user = null
    },

    addAddress: (state, action) => {
      const {location, number} = action.payload;

      if(location === '' || number === ''){
        alert("Por favor, preencha todos os campos de endereço.")
        return
      }
      if(state.user === null){
        alert("Usuário não encontrado. Por favor, faça login para adicionar um endereço.")
        return
      }

      state.user.address = {
        location,
        number
      }
    },
    
    deleteAddress: (state) => {
      if(state.user){
        state.user.address = null;
      }
    },
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      console.log("Usuários buscados com sucesso:", action.payload);
      state.users = action.payload;
      state.loading = false;
  },
    fetchUsersFailure: (state, action) => {
      console.error("Erro ao buscar usuários:", action.payload);
      state.loading = false;
    },
  }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers, 
fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;