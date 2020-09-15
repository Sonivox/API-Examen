<template>
    <div>
        <br>
        <!-- Paso Numero 1 UAW-->
        <div>
            <div class="row col">
                <div class="col-sm-1"></div>
                <h1>Calcular puntos de casos de uso</h1>
            </div>
            <div class="container">
                <br>
                <h3>1. Cálculo del factor sin ajustar correspondiente a los actores (UAW).</h3>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Ingrese tipo de actor</span>
                    </div>
                    <input type="text" @keypress.enter="listarAct"
                           v-model="factorActor" onkeypress='return event.charCode >= 49 && event.charCode <= 51' class="form-control">

                    <b-button @click="listarAct" :disabled="factorActor.length === 0"
                              variant="primary">Agregar actor</b-button>
                    <b-button @click="infoMensaje('Ayuda del paso 1','En este paso \n' +
                      'tienes que colocar el peso de los actores que son simples (peso 1), medianos (peso 2) o complejos (peso 3)' +
                      'para eso puedes ver la documentacion y ver la tabla de los pesos de los actores')"
                              variant="warning">Ayuda</b-button>
                </div> <br>

                <div>
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nombre del actor</th>
                            <th scope="col">Factor de peso</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="f in factores">
                            <th scope="row">Actor</th>
                            <td>{{ f }}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div class="alert alert-success" role="alert">
                        Factor sin ajustar correspondiente a los actores UAW = {{UAW}}
                    </div>
                    <b-btn variant="danger" @click="eliminarActor">Eliminar actor</b-btn>
                </div>
            </div>
        </div>
        <!-- Paso Numero 2 UUCW-->
        <div class="container">
            <div>
                <h3>2.- Cálculo del factor de los casos de uso sin ajustar (UUCW) </h3>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">¿Cuantas transacciones tiene el caso de uso?</span>
                    </div>
                    <input type="text" @keypress.enter="listarCaso"
                           v-model="casos" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="form-control">
                    <b-button @click="listarCaso" :disabled="casos.length === 0"
                              variant="primary">Agregar</b-button>
                    <b-button @click="infoMensaje('Ayuda del paso 2','En este paso tienes que ' +
                     'colocar cuantras transaciones tiene tu caso de uso y el programa automaticamente lo divide en simple (factor 5)' +
                      'medio (factor 10) y complejo (factor 15)')"
                              variant="warning">Ayuda</b-button>
                </div> <br>

                <div>
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Caso de uso</th>
                            <th scope="col">Factor de peso</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="c in casosList">
                            <th scope="row">Casos de uso</th>
                            <td>{{ c }}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div class="alert alert-success" role="alert">
                        Factor de los casos de uso sin ajustar UUCW = {{UUCW}}
                    </div>
                    <b-btn variant="danger" @click="eliminarCU">Eliminar caso de uso</b-btn>
                </div>
            </div>
        </div>
        <!-- Paso Numero 3 TCF-->
        <div class="container">
            <div>
                <h3>3.- Cálculo de los factores de complejidad técnica (TCF) </h3>
                <b-button @click="infoMensaje('Ayuda del paso 3','En este paso tienes que colocar lo siguiente en base ' +
                     ' a al desarrollo del proyecto junto con la experiencia de los desarrolladores y colocar los factores que competen en base ' +
                      'a las necesidades del proyecto y que el cliente requiera 0 a 2 (irrelevante), 3 y 4 (media) y 5 (esencial)')"
                          block variant="warning">Ayuda del paso 3</b-button>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Factor</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Peso</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">T1</th>
                        <td>Sistema distrubiudo</td>
                        <td>
                            <input type="text" v-model="T1"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T2</th>
                        <td>Objetivos del performance o tiempo de respuesta</td>
                        <td>
                            <input type="text" v-model="T2"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T3</th>
                        <td>Eficiencia del usuario final</td>
                        <td>
                            <input type="text" v-model="T3"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T4</th>
                        <td>Procesamiento interno complejo</td>
                        <td>
                            <input type="text" v-model="T4"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T5</th>
                        <td>El codigo debe ser reutilizable</td>
                        <td>
                            <input type="text" v-model="T5"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T6</th>
                        <td>Facilidad de instalacion</td>
                        <td>
                            <input type="text" v-model="T6"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T7</th>
                        <td>Facilidad de uso</td>
                        <td>
                            <input type="text" v-model="T7"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T8</th>
                        <td>Portabilidad</td>
                        <td>
                            <input type="text" v-model="T8"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T9</th>
                        <td>Facilidad de cambio</td>
                        <td>
                            <input type="text" v-model="T9"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T10</th>
                        <td>Concurrencia</td>
                        <td>
                            <input type="text" v-model="T10"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T11</th>
                        <td>Incluye objetivos especiales de seguridad</td>
                        <td>
                            <input type="text" v-model="T11"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T12</th>
                        <td>Provee accesos directos a terceras partes</td>
                        <td>
                            <input type="text" v-model="T12"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">T13</th>
                        <td>Se requiere facilidades especialesde entrenamiento al usuario</td>
                        <td>
                            <input type="text" v-model="T13"
                                   onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                        </td>
                    </tr>
                    </tbody>
                </table>
                <b-button @click="calcularTCF" block variant="primary">Calcular TCF</b-button> <br>
                <div class="alert alert-success" role="alert">
                    Factores de complejidad técnica TCF = {{TCF}}
                </div>
            </div>
        </div>
        <!-- Paso Numero 4 EF-->
        <div class="container">
            <div>
                <h3>4.- Cálculo de los factores de entorno (EF)</h3>
                <div>
                    <b-button @click="infoMensaje('Ayuda del paso 4','En este paso compete a al  ' +
                     ' equipo de desarrollo, sobre sus conocimientos y que tanta experiencia tengan como desarrolladores y colocar los factores que competen en base a ' +
                      '0 a 2 (irrelevante), 3 y 4 (media) y 5 (esencial)')"
                              block variant="warning">Ayuda Paso 4</b-button>
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Factor</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Peso</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">E1</th>
                            <td>Familiaridad con el modelo de proyecto utilizado</td>
                            <td>
                                <input type="text" v-model="E1"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E2</th>
                            <td>Experiencia en la aplicacion</td>
                            <td>
                                <input type="text" v-model="E2"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E3</th>
                            <td>Experiencia en la orientacion a objetos</td>
                            <td>
                                <input type="text" v-model="E3"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E4</th>
                            <td>Capacidad el analista lider</td>
                            <td>
                                <input type="text" v-model="E4"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E5</th>
                            <td>Motivacion</td>
                            <td>
                                <input type="text" v-model="E5"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E6</th>
                            <td>Estabilidad de los requerimientos</td>
                            <td>
                                <input type="text" v-model="E6"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E7</th>
                            <td>Personal part-time</td>
                            <td>
                                <input type="text" v-model="E7"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">E8</th>
                            <td>Dificultad del lenguaje de programacion</td>
                            <td>
                                <input type="text" v-model="E8"
                                       onkeypress='return event.charCode >= 48 && event.charCode <= 53' class="form-control">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <b-button @click="calcularEF" block variant="primary">Calcular EF</b-button> <br>
                    <div class="alert alert-success" role="alert">
                        Factores de complejidad del entorno EF = {{EF}}
                    </div>
                    <br>
                    <b-btn block variant="success" :disabled="EF === '' || TCF === '' || UAW === '' || UUCW === ''"
                           @click="mostrar(5)">Calcular los demas pasos</b-btn>
                    <br><br>
                </div>

            </div>
        </div>
        <!-- Paso Numero 5 UUCP y Paso Numero 6 UCP-->
        <div class="container" v-if="tresPasos == true">
            <h3>5.- Cálculo del nº de puntos de casos de uso sin ajustar (UUCP)</h3>
            <b-button @click="infoMensaje('Informacion del paso 5','En este paso ya se calcula los ' +
                     'puntos de casos de uso sin ajustar UUCP en base a los datos ya recolectados del paso 1 y 2' +
                      ' la formula es UUCP = UAW + UUCW')"
                      block variant="warning">Informacion paso 5</b-button>
            <div class="alert alert-success" role="alert">
                Puntos de caso de uso sin ajustar UUCP = UAW + UUCW <br> <br>
                UUCP = {{UAW}} + {{UUCW}} = {{UUCP = (UAW + UUCW)}}
            </div>
            <h3>6.- Cálculo del nº de puntos de casos de uso ajustados (UCP).</h3>
            <b-button @click="infoMensaje('Informacion del paso 6','En este paso ya se realiza el ajuste de los puntos de casos de uso ' +
                     'cuyos datos obtivimos del paso 3, 4 y 5' +
                      ' La formula es UCP = UUCP x TCF x EF')"
                      block variant="warning">Informacion paso 6</b-button>
            <div class="alert alert-success" role="alert">
                Realizando el ajuste de los puntos de casos de uso UCP = UUCP x TCF x EF<br> <br>
                UCP = {{UUCP}} x {{TCF}} x {{EF}} = {{UCP = (UUCP * TCF * EF)}}
            </div>
            <h3>Estimacion del esfuerzo en Horas-Hombre (E).</h3>
            <b-button @click="infoMensaje('Informacion','Aqui se realiza la estimacion en cuanto a la programacion ' +
                     'del sistema tomando en cuanto los factores de entorno del equipo de desarrollo del paso 4, el programa detecta automaticamente ' +
                      'los puntos y asigna las horas correspondientes')"
                      block variant="warning">Informacion del esfuerzo</b-button>
            <div class="alert alert-success" role="alert">
                Factores ambientales de E1 a E6 con puntuación menor a 3  = {{menores}}<br>
                Factores ambientales de E7 a E8 con puntuación mayor a 3 = {{mayores}}<br>
            </div>
            <div class="alert alert-danger" role="alert">
                Estimacion del esfuerzo en horas hombre E = UCP x CF <br>
                E = {{UCP}} x {{CF}} = {{ esfuerzo = UCP * CF }}
            </div>
            <h3>Calculo del esfuerzo total en Horas-Hombre (E).</h3>
            <div>
                <b-button @click="infoMensaje('Informacion','Aqui ya se realiza el esfuero total en cuanto a todo ' +
                     'lo comprendido con el desarrollo del sistema y divide automaticamente el esfuerzo en sus respectivos porcentajes')"
                          block variant="warning">Informacion del esfuerzo total</b-button>
                <table class="table table-sm">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Actividad</th>
                        <th scope="col">Porcentaje</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Análisis (E/4)</th>
                        <td>{{esfuerzo/4}}</td>
                    </tr>
                    <tr>
                        <th scope="row">Diseño (E/2)</th>
                        <td>{{esfuerzo/2}}</td>
                    </tr>
                    <tr>
                        <th scope="row">Programacion (E)</th>
                        <td>{{esfuerzo}}</td>
                    </tr>
                    <tr>
                        <th scope="row">Pruebas (E/3)</th>
                        <td>{{esfuerzo/3}}</td>
                    </tr>
                    <tr>
                        <th scope="row">Gestion del proyecto (E/5)</th>
                        <td>{{esfuerzo/5}}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="table-danger">Total</th>
                        <td  class="table-danger">{{esfuerzoTotal = (esfuerzo/4) + (esfuerzo/2) +
                            (esfuerzo) + (esfuerzo/3) + (esfuerzo/5)}} Horas-Hombre</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <br>
            <div class="text-center">
                <input type="button" value="Volver a calcular puntos de casos de uso" class="btn btn-block btn-info"
                       to="/proceso"/>
            </div>
            <br>

            <div class="text-center">
                <form>
                    <input type="button" value="Imprimir reporte del caso" class="btn btn-dark btn-block"
                           onclick="window.print()" />
                </form>
            </div>
            <br><br>

        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';

    export default {
        name: "proceso",
        data() {
            return {
                //variables de los input
                factorActor:'',
                casos:'',

                //Variables para TCF
                T1: '',
                T2: '',
                T3: '',
                T4: '',
                T5: '',
                T6: '',
                T7: '',
                T8: '',
                T9: '',
                T10: '',
                T11: '',
                T12: '',
                T13: '',

                //Variable para EF
                E1: '',
                E2: '',
                E3: '',
                E4: '',
                E5: '',
                E6: '',
                E7: '',
                E8: '',


                //arreglos a calcular
                factores: [],
                casosList:[],



                //variables del metodo
                UAW: '',
                UUCW:'',
                TCF: '',
                EF: '',
                UUCP: '',
                UCP:'',

                //Estimacion de esfuerzo
                esfuerzo: '',
                esfuerzoTotal:'',
                CF: '',
                menores: 0,
                mayores: 0,

                //mostar pasos
                tresPasos: false,

            }
        },
        methods:{
            refrescar(){
                location.reload()
            },
            mostrar(paso){
                switch (paso) {
                    case 3:
                        this.paso1 = !this.paso1;
                        this.paso2 = !this.paso2;
                        this.paso3 = !this.paso3;
                        break;
                    case 4:
                        this.paso3 = !this.paso3;
                        this.paso4 = !this.paso4;
                        break;
                    case 5:
                        this.paso4 = !this.paso4;
                        this.tresPasos = !this.tresPasos;
                        break;
                }
            },
            listarAct: function () {
                if (this.factorActor == ''){
                    this.alertaMensaje('Ingresa un valor');
                } else {
                    let integer = parseInt(this.factorActor, 10)
                    if (integer > 3) {
                        this.alertaMensaje('No ingrese valores mayores a 3')
                    } else {
                        this.calculaUAW(integer);
                    }
                }
            },
            calculaUAW(valor){
                this.UUCP = 0;
                this.factorActor = ''
                this.factores.push(valor);
                this.UAW = this.factores.reduce( (anterior, actual) => {
                    return anterior + actual;
                });
            },
            eliminarActor(){
                this.UUCP = 0;
                this.factores.pop();
                this.UAW = this.factores.reduce( (anterior, actual) => {
                    return anterior + actual;
                });
            },
            listarCaso(){
                if (this.casos == ''){
                    this.alertaMensaje('ingresa un valor')
                } else{
                    if (this.casos == 0){
                        this.alertaMensaje('ingresa un mayor a 0')
                    } else{
                        let integer = parseInt(this.casos, 10)
                        if (integer <= 3){
                            this.casosList.push(5);
                        }
                        if (integer >= 4 && integer <=7){
                            this.casosList.push(10);
                        }
                        if (integer > 7){
                            this.casosList.push(15);
                        }
                        this.casos = '';
                    }
                    this.calcularUUCW();
                }
            },
            calcularUUCW(){
                this.UUCP = 0;
                this.UUCW = this.casosList.reduce((anterior, actual) =>{
                    return anterior + actual;
                });
            },
            eliminarCU(){
                this.UUCP = 0;
                this.casosList.pop();
                this.calcularUUCW();
            },
            calcularTCF(){
                this.TCF = 0;
                this.UCP = 0;
                this.EF = 0;
                if (this.T1 == '' || this.T2 == '' || this.T3 == '' || this.T4 == '' || this.T5 == ''|| this.T6 == '' ||
                    this.T7 == '' || this.T8 == '' || this.T9 == '' || this.T10 == '' || this.T11 == '' || this.T12 == '' || this.T13 == ''){
                    this.alertaMensaje('No deje campos vacios')
                } else {
                    if (this.T1 > 5 || this.T2 > 5 || this.T3 > 5 || this.T4 > 5 || this.T5 > 5 || this.T6 > 5 ||
                        this.T7 > 5 || this.T8 > 5 || this.T9 > 5 || this.T10 > 5 || this.T11 > 5 || this.T12 > 5 || this.T13 > 5){
                        this.alertaMensaje('No ingrese numeros mayores a 5')
                    } else {
                        //calculando TCF
                        this.TCF = 0.6 + 0.01 * ( (this.T1* 2) + (this.T2* 1) + (this.T3* 1) + (this.T4* 1) + (this.T5* 1) +
                        (this.T6* 0.5)+ (this.T7* 0.5) + (this.T8* 2) + (this.T9* 1) + (this.T10* 1) + (this.T11* 1) + (this.T12* 1)+ (this.T13* 1));
                    }
                }
            },
            calcularEF(){
                this.UCP = 0;
                this.EF = 0;
                if (this.E1 == '' || this.E2 == '' || this.E3 == '' || this.E4 == '' || this.E5 == ''|| this.E6 == '' ||
                    this.E7 == '' || this.E8 == '' ){
                    this.alertaMensaje('No deje campos vacios')
                } else {
                    if (this.E1 > 5 || this.E2 > 5 || this.E3 > 5 || this.E4 > 5 || this.E5 > 5 || this.E6 > 5 ||
                        this.E7 > 5 || this.E8 > 5 ){
                        this.alertaMensaje('No ingrese numeros mayores a 5')
                    } else {
                        //calculando EF
                        this.EF = 1.4 - 0.03 * ( (this.E1 * 1.5) + (this.E2 * 0.5) + (this.E3 * 1) + (this.E4 * 0.5) +
                            (this.E5 * 1 ) + (this.E6 * 2) + (this.E7 * -1) + (this.E8 * -1));
                    }
                }
                this.calculoCF()
            },
            calculoCF(){
                this.menores = 0;
                this.mayores = 0;
                this.esfuerzo = 0;
                this.esfuerzoTotal=0;
                if(this.E1 < 3){
                    this.menores = this.menores + 1;
                }
                if(this.E2 < 3){
                    this.menores = this.menores + 1;
                }
                if(this.E3 < 3){
                    this.menores = this.menores + 1;
                }
                if(this.E4 < 3){
                    this.menores = this.menores + 1;
                }
                if(this.E5 < 3){
                    this.menores = this.menores + 1;
                }
                if(this.E6 < 3){
                    this.menores = this.menores + 1;
                }
                if (this.E7 > 3){
                    this.mayores = this.mayores + 1;
                }
                if (this.E8 > 3){
                    this.mayores = this.mayores + 1;
                }

                var puntaje = this.menores + this.mayores;

                if (puntaje <= 2) {
                    this.CF = 20;
                }
                if (puntaje > 2 && puntaje <= 4) {
                    this.CF = 28;
                }
                if (puntaje >= 5) {
                    this.CF = 36;
                }
            },
            alertaMensaje(error){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                    timer: 1000,
                    showConfirmButton: false
                });
            },
            infoMensaje(titulo, mensaje){
                this.$swal.fire({
                    icon: 'info',
                    title: titulo,
                    text: mensaje,
                });
            },
        },
    }
</script>

<style>
    .col{
        margin-right: 0px;
    }
</style>