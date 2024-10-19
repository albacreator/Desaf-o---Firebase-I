<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="removeUser(user.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['users'])
    },
    methods: {
        ...mapActions(['fetchUsers', 'deleteUser']),
        removeUser(userId) {
            this.deleteUser(userId);
        }
    },
    created() {
        this.fetchUsers();
    }
};
</script>
