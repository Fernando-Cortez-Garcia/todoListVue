const app = new Vue({
    el: '#app',
    data: {
        tareasPendientes: [

        ],
        tareasTerminadas: [],
        nuevaTarea: " ",
        ndescripcion: " "
    },
    methods: {
        agregarTarea() {
            this.tareasPendientes.push({
                nombre: this.nuevaTarea,
                descripcion: this.ndescripcion
            });
            this.nuevaTarea = "";
            this.ndescripcion = "";
        },
        tareaTerminada(tarea) {
            this.tareasTerminadas.push(tarea);
            this.tareasPendientes.splice(this.tareasPendientes.indexOf(tarea), 1);

        },
        eliminarTarea(tarea) {
            this.tareasTerminadas.splice(this.tareasTerminadas.indexOf(tarea), 1);
        }

    }

});