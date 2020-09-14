<template>
  <div>
      <br>
      <div class="row col">
          <div class="col-sm-1"></div>
          <h2>Puntos de casos de uso</h2>
      </div>

      <div class="row col text-center">
          <div class="col-sm-3"></div>
          <div class="col-sm-3">
              <b-button size="lg" pill variant="danger" to="/info">Ver ejemplo</b-button>
          </div>
          <div class="col-sm-4">
              <b-button size="lg" pill variant="info" to="/Proceso">Calcular PCU</b-button>
          </div>
      </div>
      <br>

      <div class="row col">
          <div class="col-sm-1"></div>
          <div class="col-sm-10 texto">
              <p>Puntos de caso de uso es un método de estimación de esfuerzo para proyectos de software,a
                  partir de sus casos de uso. Fue desarrollado por Gustav Karner en 1993, basándose en el método
                  de punto de función, y supervisado por IvarJacobson. Ha sido analizado posteriormente en otros
                  estudios, como la tesis de Kirsten Ribu (Universidad de Oslo) en 2001.
              </p>
              <p>
                  El método utiliza los actores y casos de uso para calcular el esfuerzo que significará desarrollarlos.
                  A los casos de uso se les asigna una complejidad basada en transacciones, entendidas como una
                  interacción entre el usuario y el sistema, mientras que a los actores se les asigna una complejidad
                  basada en su tipo, es decir, si son interfaces con usuarios u otros sistemas. También se utilizan
                  factores de entorno y de complejidad técnica para ajustar el resultado.
              </p>
              <h5>Veamos a continuación en detalle los pasos del método:</h5>

              <h6>1) Clasificar cada interacción entre actor y caso de uso según su complejidad y asignar un peso en función de ésta (UAW).</h6>
              <p>Para poder clasificar la complejidad de los actores debemos analizar la interacción de éste con el sistema que se va a desarrollar.
                  La complejidad de los actores puede corresponderse con una de las tres categorías posibles:</p>
              <p>Formula para UAW = Suma(Cantidad de un tipo de actor x Factor de peso)</p>
              <div class="text-center">
                  <img src="../assets/primeraTabla.png" height="126" width="584"/>
              </div>
              <br>

              <h6>2) Calcular la complejidad de cada caso de uso según el número de transacciones o pasos del mismo (UUCW).</h6>
              <p>Para calcular la complejidad de un caso de uso debemos determinar el número de transacciones, incluyendo los caminos alternativos.
                  Se entiende por transacción a un conjunto de actividades atómicas, donde se ejecutan todas ellas o ninguna.
                  En función del número de transacciones que posee un caso de uso se clasifica el caso de uso como simple, medio o complejo, siendo la asignación de pesos la que se muestra en la tabla siguiente:</p>
              <p>Formula para UUCW = Suma(Cantidad de un tipo de casos de uso x Factor de peso)</p>
              <div class="text-center">
                  <img src="../assets/segundaTabla.png" height="100" width="400"/>
              </div>
              <br>

              <h6>3) Calcular los factores de complejidad técnica (TCF)</h6>
              <p>
                  A cada uno de los Factores Técnicos de la tabla siguiente se le asigna un valor de influencia en el proyecto entre 0 a 2 (no tiene influencia) a 5 (esencial), 3 y 4 se considera de influencia media.
                  Obtenidos los grados de influencia se multiplican por el peso de cada factor y con la siguiente fórmula se calcula el Factor Técnico que aplica:
              </p>
              <div class="text-center">
                  <img src="../assets/ecucacionTCF.png" height="80" width="210"/>
                  <img src="../assets/terceraTabla.png" height="260" width="520"/>
              </div>
              <br>

              <h6>4) Cálculo de los Factores de Entorno (EF).</h6>
              <p> A cada uno de los Factores de Entorno de la tabla siguiente se le asigna un valor de influencia en el proyecto entre 0 a 2 (no tiene influencia) a 5 (esencial), 3 y 4 se considera de influencia media.
                  Obtenidos los grados de influencia se multiplican por el peso de cada factor y con la siguiente fórmula se calcula el Factor de Entorno que aplica:</p>
              <div class="text-center">
                  <img src="../assets/formulaEF.png" height="80" width="210"/>
                  <img src="../assets/cuartaTabla.png" height="170" width="430s"/>
              </div>
              <br>

              <h6>5) Cálculo del nº de puntos de casos de uso sin ajustar (UUCP).</h6>
              <p> El UUCP son los puntos de casos de uso sin ajustar para tener una idea de la dificultad de los casos
                  de uso e interfaces, tomando en cuenta los pesos de los actores (UAW) y los pesos de los casos de
                  uso (UUCW). </p>
              <p>UUCP = UAW + UUCW.</p>
              <br>

              <h6>6) Cálculo del nº de puntos de casos de uso ajustados (UCP)</h6>
              <p>
                  Para determinar los puntos de casos de usos ajustados esto se utilizan las siglas UCP y se obtiene
                  al multiplicar el UUCP (puntos de casos de usos sin ajustar) el TCF (Factores Técnicos) y el EF
                  (Factores ambientales) quedando la operación de la siguiente forma:
              </p>
              <p>UCP = UUCP x TCF x EF</p>
              <br>

              <h6>Estimacion del esfuerzo en horas-hombre (E).</h6>
              <p>
                  Este cálculo se realiza con el fin de tener una aproximación del esfuerzo, pensando solo en el
                  desarrollo según las funcionalidades de los casos de uso. Está basado en los factores ambientales y
                  se calcula de la siguiente manera: Primero se debe contar la cantidad de factores ambientales del
                  E1 al E6 que tienen una puntuación menor a 3, también contar la cantidad de estos mismos del E7
                  y E8 que son mayores que 3.
                  El esfuerzo en horas-persona viene dado por:
              </p>
              <p>E = UCP x CF</p>

              <div class="text-center">
                  <img src="../assets/tablahoras.png" height="59" width="174"/>
                  <img src="../assets/tablaesfuerzo.png" height="75" width="275"/>
              </div>
              <br>

              <h6>Cálculo del esfuerzo total en horas-hombre.</h6>
              <p>Si bien el valor de E calculado en el apartado anterior se refiere a la programación del sistema, los
                  esfuerzos totales a los efectos del presente pliego vendrán determinados por la siguiente tabla.</p>
              <div class="text-center">
                  <img src="../assets/ultimaTabla.png" height="160" width="266"/>
              </div>
              <br>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
    .texto{
        font-family: Bahnschrift;
    }
    p{
        text-align: justify;
    }

</style>
