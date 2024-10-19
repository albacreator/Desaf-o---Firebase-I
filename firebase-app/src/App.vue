<template>
  <div>
      <Datos />
      <ListadoUsuarios />
  </div>
</template>

<script>
import Datos from './components/Datos.vue';
import ListadoUsuarios from './components/ListadoUsuarios.vue';

export default {
  components: {
      Datos,
      ListadoUsuarios
  }
};
</script>
