<template>
    <div>
        <br>
        <div class="row col">
            <div class="col-sm-1"></div>
            <h2>Ejemplo del metodo</h2>
            <div class="col-sm-1"></div>
        </div>

        <div class="row col texto">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <br>
                <h6>Tenemos el ejemplo del caso de la elaboraciond de un sistema para un Motel donde se hacen las siguientes funciones
                    <br>
                    Caso de uso: Reservar habitacion, Actores: Usuario (Recepcionasta y cliente) <br>
                    Caso de uso: Confirmar reserva, Actores: Recepcionista <br>
                    Caso de uso: Reservar habitacion, Actores: Usuario (Recepcionista y cliente) <br>
                    Caso de uso: Salir del hotel, Actores: Recepcionista <br>
                    Caso de uso: Cambiar contraseña, Actores: Recepcionista y jefe de comida <br>
                    Caso de uso: Autentificar empleado, Actores: Recepcionista y jefe de cocina<br>
                    Caso de uso: Registrar solicitud de servicio a la habitacion, Actores: Jefe de cocina<br>
                    Caso de uso: Registrar solicitud de servicio basico, Actores: Jefe de cocina<br>
                    Caso de uso: Gestionar empleados, Actores: Administrador<br>
                    Caso de uso: Gestionar bebidas, Actores: Administrador<br>
                    Caso de uso: Gestionar comida, Actores: Administrador<br>
                    Caso de uso: Gestionar habitacion, Actores: Administrador<br>
                </h6>
                <p>Paso #1: Clasificar cada interacción entre actor y caso de uso según su complejidad y asignar un peso en función de ésta (UAW).
                    para eso nos ayudamos de la tabla de factores
                </p>
                <div class="text-center">
                    <img src="../assets/ejemplo1.png" height="149" width="592"/>
                </div>
                <br>

                <p>Paso #2: Calcular la complejidad de cada caso de uso según el número de transacciones o pasos del mismo (UUCW).</p>
                <div class="text-center">
                    <img src="../assets/ejemplo2.png" height="298" width="596"/>
                </div>
                <br>

                <p>Paso #3: Calcular los factores de complejidad técnica (TCF)</p>
                <div class="text-center">
                    <img src="../assets/ejemplo3.png" height="378" width="596"/>
                </div>
                <br>

                <p>Paso #4: Cálculo de los Factores de Entorno (EF).</p>
                <div class="text-center">
                    <img src="../assets/ejemplo4.png" height="260" width="595"/>
                </div>

                <p>Paso #5: Cálculo del nº de puntos de casos de uso sin ajustar (UUCP).</p>
                <div>
                    <p class="text-center">La formula nos dice que es UUCP = UAW + UUCW <br>
                        por lo tanto nos quedaria de la siguiente forma UUCP = 12 + 80 <br>
                        UUCP = 92 (puntos de casos de uso sin ajustar)
                    </p>
                </div>

                <p>Paso #6: Cálculo del nº de puntos de casos de uso ajustados (UCP)</p>
                <div>
                    <p class="text-center">
                        La formula es la siguiente UCP = UUCP x TCF x EF <br>
                        UCP = 92 x 0.945 x 0.83 <br>
                        UCP = 72.16 (puntos de casos de uso)
                    </p>
                </div>

                <p>Estimacion del esfuerzo en horas hombre (E)</p>
                <div>
                    <p class="text-center">Este calculo se basa en los factores ambientales y se calcula para este ejemplo de la siguiente manera: <br>
                        Factores ambientales de E1 a E6 con puntuacion menor a 3 = 1<br>
                        Factores ambientales de E7 y E8 con puntiacion mayor a 3 = 0 <br>
                        por lo tanto segun el valor es de 1 y el valor de CF seria de 20 Horas-Persona (CF) <br>
                        E = UCP x CF = 72.16 x 20 = 1443.204 Horas-Hombre
                    </p>
                </div>

                <p>Calculo del esfuerzo total <br>
                    para el ejemplo se calculo de la siguiente manera ya que E solo es el esfuerzo de la programacion
                </p>
                <div class="text-center">
                    <img src="../assets/ultimo.png" height="135" width="596"/>
                </div>
                <br><br>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style>
    .col{
        margin-right: 0px;
    }
    .texto{
        font-family: Bahnschrift;
    }
</style>