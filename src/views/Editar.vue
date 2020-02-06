<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="editarTarea(tarea)">
            <input type="text" v-model="tarea.nombre">
            <button>Editar</button>
        </form>
    </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['getTarea', 'editarTarea'])
    },
    created() {
        this.getTarea(this.id)
    },
}
</script>