import { createStore } from 'vuex';
import { db } from '../firebaseConfig'; 
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const store = createStore({
    state() {
        return {
            users: []
        };
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_USER(state, user) {
            state.users.push(user);
        },
        REMOVE_USER(state, userId) {
            state.users = state.users.filter(user => user.id !== userId);
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            const usersCollection = collection(db, 'users'); 
            const userDocs = await getDocs(usersCollection);
            const users = userDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            commit('SET_USERS', users);
        },
        async createUser({ commit }, user) {
            const usersCollection = collection(db, 'users');
            const docRef = await addDoc(usersCollection, user);
            commit('ADD_USER', { id: docRef.id, ...user });
        },
        async deleteUser({ commit }, userId) {
            const userDoc = doc(db, 'users', userId);
            await deleteDoc(userDoc);
            commit('REMOVE_USER', userId);
        }
    }
});

export default store;
