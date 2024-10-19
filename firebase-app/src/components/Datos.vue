<template>
    <h1>Usuarios</h1>
    <div>
        <input v-model="name" placeholder="Nombre" />
        <input v-model="email" placeholder="Correo" />
        <button @click="addUser">Agregar Usuario</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        ...mapActions(['createUser']),
        addUser() {
            const user = { name: this.name, email: this.email };
            this.createUser(user);
            this.name = '';
            this.email = '';
        }
    }
};
</script>
