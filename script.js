// ============================================================================
// CONFIGURACIÓN GENERAL — PROYECTO NATURA (KRATINES.INC)
// ============================================================================
const CLAVE_CLASE_4 = "NATURA-04";
let NIVEL_USUARIO = 4;

// Consola secreta y contador invisible del final
const COMANDO_NIVEL_5 = "OVERRIDE KRATINES-05";
const TIEMPO_DETECCION_MS = 45000; // 45 segundos invisibles

let temporizadorFinal = null;
let sistemaBloqueado = false;

const CARPETAS = [
    { id: "ALL", nombre: "📁 Todos los Registros" },
    { id: "PROYECTO", nombre: "🌿 Proyecto Natura (Operaciones)" },
    { id: "ANIMALOIDES", nombre: "🧬 Expedientes Biológicos" },
    { id: "INFRAESTRUCTURA", nombre: "⚙️ Sistemas e Informes IT" },
    { id: "DIRECTIVA", nombre: "☣️ Cúpula Directiva (Clase 5)" }
];

/*
 * GUÍA DE EDICIÓN RÁPIDA:
 * - Todo texto dentro de <span class="redacted">...</span> queda BLOQUEADO en Nivel 4
 *   y se desclasifica automáticamente al activar Nivel 5.
 * - Si agregas una foto propia en tu carpeta img/, cambia `imagenURL: null` por `"img/huemul.png"`.
 *   Mientras esté en `null`, el sistema dibuja un escáner visual automático sin enlaces rotos.
 * - Si agregas un modelo .glb en models/, cambia `modeloGLB: null` por `"models/huemul.glb"`.
 */
const ARCHIVOS_DB = [
    // ==================== OPERACIONES (NIVEL 4) ====================
    {
        id: "NAT-001",
        titulo: "Acta Fundacional: Viabilidad Financiera y Compuesto 001",
        carpeta: "PROYECTO",
        nivelRequerido: 4,
        estado: "APROBADO // ACTIVO",
        fecha: "12/03/2026",
        etiquetas: ["inicio", "financiamiento", "calentamiento global", "compuesto 001", "patagonia", "chile", "argentina", "meteorito"],
        texto: `
            <h3>1. OPORTUNIDAD ESTRATÉGICA Y FINANCIAMIENTO</h3>
            <p>El deterioro acelerado de la biosfera, el avance del calentamiento global y el colapso de la fauna silvestre representan la mayor oportunidad comercial de la década para <strong>Kratines.INC</strong>.</p>
            <p>Las economías con mayores índices de emisiones industriales —que concentran simultáneamente el mayor capital global— requieren con urgencia mecanismos verificables de compensación ecológica. Al posicionar a <strong>Proyecto Natura</strong> como la única iniciativa capaz de revertir la pérdida de biodiversidad en meses, Kratines.INC asegura contratos de financiamiento multilateral a escala planetaria.</p>
            <p>Para la Fase Piloto se cerró un convenio binacional con los gobiernos de <strong>Chile y Argentina</strong>, obteniendo concesiones territoriales en sectores aislados de la Patagonia austral bajo estricta reserva comercial.</p>

            <h3>2. BASE BIOLÓGICA DEL PROYECTO: COMPUESTO 001</h3>
            <p>El proyecto se sustenta en la síntesis estabilizada del denominado <strong>Compuesto 001</strong>, obtenido a partir de un extracto biológico hallado en estado de estasis completa <span class="redacted">dentro del núcleo mineral de un meteorito recuperado en la meseta austral</span>.</p>
            <p>Las pruebas iniciales de laboratorio dirigidas por <span class="redacted">el Dr. Sebastián Arancibia y la Dra. Elena Valdivia</span> demostraron que la cepa acelera la captura de carbono en flora nativa y estimula la tasa metabólica y reproductiva en especies animales amenazadas.</p>

            <h3>3. CLÁUSULA DE AISLAMIENTO DOCUMENTAL</h3>
            <p>Dada la sensibilidad estratégica de los contratos estatales y <span class="redacted">el origen no terrestre de la muestra primaria</span>, toda la documentación del Proyecto Natura queda aislada en esta red independiente. Queda prohibida la divulgación de la composición molecular del Compuesto 001 a personal por debajo de la Clase 5.</p>
        `,
        imagenURL: "img/Compuesto.jpg",
        imagenPie: "FIG 0.1 — Evidencia visual del primer vial del compuesto 001 estable.",
        modeloGLB: null,
        tipoHolograma: "compuesto"
    },
    {
        id: "NAT-006",
        titulo: "Balance Semestral (Mes +06): Éxito Público y Contención Mediática",
        carpeta: "PROYECTO",
        nivelRequerido: 4,
        estado: "EN VIGOR",
        fecha: "18/09/2026",
        etiquetas: ["exito", "prensa", "patagonia", "6 meses", "contaminacion", "fauna", "informe"],
        texto: `
            <h3>1. RESULTADOS VERIFICADOS ANTE GOBIERNOS Y PRENSA</h3>
            <p>Cumplidos <strong>6 meses</strong> desde la liberación controlada del Compuesto 001 en los cuadrantes piloto de la Patagonia (territorio chileno y argentino), los indicadores ambientales superan todas las metas pactadas:</p>
            <ul>
                <li>Reducción medible del <strong>31% en material particulado y gases locales</strong> en las zonas de dispersión.</li>
                <li>Incremento demográfico acelerado de la fauna nativa e introducida en todos los sectores monitoreados.</li>
                <li>Cobertura mediática internacional abrumadoramente positiva; tanto Santiago como Buenos Aires han solicitado ampliar el presupuesto para una Fase 2.</li>
            </ul>

            <h3>2. ANEXO INTERNO (NO DIVULGABLE A PRENSA)</h3>
            <p>Paradójicamente, el mismo agente que generó el repunte ecológico está provocando alteraciones tisulares progresivas e irreversibles en una fracción creciente de la fauna expuesta. El departamento de comunicaciones de <strong>Kratines.INC</strong> mantiene un cerco estricto en los perímetros rurales para impedir el ingreso de periodistas o biólogos externos.</p>
            <p>Cualquier espécimen clasificado en Fase 2 o superior debe ser capturado para estudio o incinerado en sitio. <span class="redacted">Los informes de la zona de exclusión sur fueron transferidos directamente a la Cúpula Directiva para evitar filtraciones masivas.</span></p>
        `,
        imagenURL: "img/Mapa2.jpg",
        imagenPie: "FIG 1.4 — Comparativa satelital de recuperación de biomasa vegetal.",
        modeloGLB: null,
        tipoHolograma: "compuesto"
    },

    // ==================== EXPEDIENTES BIOLÓGICOS (NIVEL 4) ====================
    {
        id: "BIO-000",
        titulo: "Manual Patológico: Escala Oficial de Mutación (Fases 1 a 5)",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        soloTexto: true,
        estado: "REFERENCIA OBLIGATORIA",
        fecha: "24/09/2026",
        etiquetas: ["fases", "escala", "sintomas", "mutacion", "animaloides", "fusion", "manual"],
        texto: `
            <h3>CLASIFICACIÓN OFICIAL DE SUJETOS EXPUESTOS (ANIMALOIDES)</h3>
            <p>El personal de campo de Kratines.INC debe catalogar toda anomalía biológica detectada en la Patagonia según las cinco fases progresivas confirmadas hasta la fecha:</p>
            <ul>
                <li><strong>FASE 1 (Incipiente):</strong> Aparición de pústulas leves en dermis, mucosas o zonas de menor pelaje. El individuo conserva su morfología y conducta básica, aunque muestra hiperactividad metabólica.</li>
                <li><strong>FASE 2 (Deformación):</strong> Formación de tumores subcutáneos densos y deformidades óseas/anatómicas muy visibles. Aumento notable de agresividad y resistencia física.</li>
                <li><strong>FASE 3 (Licuefacción y Apéndices):</strong> Además de los tumores previos, brotan apéndices tentaculares fibrosos desde el torso o extremidades. La masa muscular pierde su estructura normal y adopta la consistencia de una papilla orgánica mezclada.</li>
                <li><strong>FASE 4 (Convergencia Bípeda):</strong> Independiente de la especie original, el organismo se hincha y reestructura su esqueleto hasta adoptar una postura bípeda pesada. Quedan muy pocos rasgos reconocibles del animal original.</li>
                <li><strong>FASE 5 (Indiferenciación y Fusión):</strong> Los especímenes se vuelven completamente indistinguibles entre sí: masas bípedas de múltiples extremidades que asemejan material biológico mal moldeado. Si dos o más individuos en Fase 5 entran en contacto físico, comienzan a combinarse para formar entidades más grandes y fuertes.</li>
            </ul>

            <h3>NOTA SOBRE LA ACUMULACIÓN PROLONGADA</h3>
            <p>Se desconoce el límite teórico de crecimiento tras múltiples fusiones en Fase 5. <span class="redacted">El conglomerado detectado en la Zona Restringida Sur (ver expediente DIR-009) sugiere que el crecimiento acumulado podría estar próximo a un umbral crítico desconocido.</span></p>
        `,
        imagenURL: null,
        imagenPie: "FIG 2.0 — Diagrama comparativo de progresión celular desde Fase 1 hasta fusión en Fase 5.",
        modeloGLB: null,
        tipoHolograma: "fase3"
    },
    {
        id: "FLR-012",
        titulo: "Muestra Vegetal: Coigüe (Nothofagus dombeyi) — Fase 1 Latente",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        estado: "BAJO OBSERVACIÓN",
        fecha: "02/10/2026",
        etiquetas: ["planta", "flora", "coigue", "arbol", "fase 1", "lento", "vegetal"],
        texto: `
            <h3>1. PERFIL DEL ESPÉCIMEN</h3>
            <p><strong>Especie:</strong> <em>Nothofagus dombeyi</em> (Coigüe patagónico).<br>
            <strong>Fase de Infección:</strong> Fase 1 (Desarrollo muy incipiente / Latente).<br>
            <strong>Sector de Hallazgo:</strong> Cuadrante de dispersión aérea P-03, Región de Aysén.</p>

            <h3>2. OBSERVACIONES MORFOLÓGICAS</h3>
            <p>A diferencia de la fauna mamífera expuesta el mismo día, los ejemplares vegetales muestran una progresión extraordinariamente lenta. El tronco y las ramas bajas presentan pequeñas pústulas resinosas y nódulos blandos en la corteza que segregan savia tibia de tono oscuro.</p>
            <p>La tasa de absorción de CO₂ aumentó en un 400%, lo que explica los excelentes reportes ambientales entregados a la prensa. No se registran tumores avanzados ni motilidad.</p>

            <h3>3. CONCLUSIÓN PRELIMINAR</h3>
            <p>Los organismos que carecen de sistema circulatorio y nervioso animal tardan drásticamente más tiempo en manifestar la mutación del Compuesto 001. Sin embargo, el agente permanece activo dentro del tejido vegetal y no ha podido ser erradicado mediante fungicidas ni tala parcial; solo la incineración total detiene el crecimiento nodular.</p>
        `,
        imagenURL: "img/coihue_Fase1.jpg",
        imagenPie: "FIG 2.1 — Corte transversal de corteza de Coigüe con micro-pústulas vasculares activas.",
        modeloGLB: null,
        tipoHolograma: "planta"
    },
    {
        id: "BIO-104",
        titulo: "Animaloide: Zorro Culpeo (Lycalopex culpaeus) — Fase 1",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        estado: "CONTENIDO EN JAULA 04",
        fecha: "05/10/2026",
        etiquetas: ["zorro", "culpeo", "fase 1", "pustulas", "animaloide"],
        texto: `
            <h3>1. PERFIL DEL ESPÉCIMEN</h3>
            <p><strong>Especie Original:</strong> <em>Lycalopex culpaeus</em> (Zorro Culpeo).<br>
            <strong>Fase de Infección:</strong> Fase 1.<br>
            <strong>Ubicación de Captura:</strong> Perímetro norte del campamento base, sector fronterizo.</p>

            <h3>2. SIGNOS CLÍNICOS</h3>
            <p>El sujeto fue hallado merodeando las instalaciones sin mostrar el temor natural hacia humanos o vehículos. Presenta racimos de <strong>pústulas leves</strong> alrededor del cuello, hocico y almohadillas plantares.</p>
            <p>Su temperatura corporal se mantiene estable en 41,2 °C sin signos de fiebre incapacitante. Se registraron dos intentos fallidos de sedación con dosis estándar; el organismo metaboliza los compuestos químicos a una velocidad anómala.</p>

            <h3>3. DIRECTIVA</h3>
            <p>Mantener en observación aislada para cronometrar la transición exacta hacia Fase 2. Ningún operador debe acercarse sin traje hermético; las pruebas preliminares descartan cualquier inmunidad humana frente a fluidos de las pústulas.</p>
        `,
        imagenURL: "img/Zorro_Fase1.jpg",
        imagenPie: "FIG 2.2 — Imagen captada por un empleado de servicio de la zona P-09. Zorro Culpeo con erupciones dérmicas iniciales de Fase 1. Primera evicendia de mutacion",
        modeloGLB: null,
        tipoHolograma: "fase1"
    },
    {
        id: "BIO-208",
        titulo: "Animaloide: Huemul (Hippocamelus bisulcus) — Fase 2",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        estado: "ABATIDO // EN AUTOPSIA",
        fecha: "11/10/2026",
        etiquetas: ["huemul", "fase 2", "tumores", "deformidades", "animaloide", "ciervo"],
        texto: `
            <h3>1. PERFIL DEL ESPÉCIMEN</h3>
            <p><strong>Especie Original:</strong> <em>Hippocamelus bisulcus</em> (Huemul austral).<br>
            <strong>Fase de Infección:</strong> Fase 2.<br>
            <strong>Ubicación de Captura:</strong> Quebrada boscosa, Sector P-07.</p>

            <h3>2. SIGNOS CLÍNICOS Y DEFORMIDADES</h3>
            <p>Ejemplar macho adulto con mutación claramente consolidada. El cuello, el lomo y la zona escapular están cubiertos por <strong>tumores subcutáneos masivos</strong> y protuberancias asimétricas de tejido fibroso endurecido.</p>
            <p>Las deformidades óseas son severas: la cornamenta creció de forma irregular fusionándose con crecimientos cartilaginosos alrededor de la cuenca ocular izquierda, y la mandíbula inferior presenta una torsión de 25 grados. Pese al evidente colapso anatómico, el animal demostró una fuerza embestidora capaz de abollar el blindaje ligero de una camioneta de patrulla.</p>

            <h3>3. NOTA DE RECUPERACIÓN</h3>
            <p>Se ordenó su neutralización inmediata para evitar que algún guardaparque estatal lo fotografiara, lo que comprometería la narrativa de éxito ecológico en la región. Cuerpo preservado para escaneo tridimensional.</p>
        `,
        imagenURL: "img/Huemul_Fase2.jpg",
        imagenPie: "FIG 2.3 — Registro fotográfico forense de un Huemul en Fase 2 con masas tumorales dorsales y deformidad craneal.",
        modeloGLB: null, // Reemplazar por ej. "models/huemul.glb"
        tipoHolograma: "fase2"
    },
    {
        id: "BIO-315",
        titulo: "Animaloide: Jabalí (Sus scrofa) — Fase 3",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        estado: "INCINERADO",
        fecha: "17/10/2026",
        etiquetas: ["jabali", "fase 3", "tentaculos", "papilla", "animaloide", "peligroso"],
        texto: `
            <h3>1. PERFIL DEL ESPÉCIMEN</h3>
            <p><strong>Especie Original:</strong> <em>Sus scrofa</em> (Jabalí salvaje patagónico).<br>
            <strong>Fase de Infección:</strong> Fase 3.<br>
            <strong>Ubicación de Captura:</strong> Bosque húmedo cercano a la Estación Secundaria 02.</p>

            <h3>2. SIGNOS CLÍNICOS AVANZADOS</h3>
            <p>El sujeto conserva a duras penas el perfil general de un suido, pero presenta una degradación tisular alarmante. Además de los tumores voluminosos propios de la etapa anterior, han emergido <strong>cuatro apéndices tentaculares carnosos</strong> desde los flancos y la zona dorsal, capaces de azotar y sujetar objetos con fuerza prensil.</p>
            <p>El rasgo más inquietante observado durante la necropsia es la consistencia de su masa corporal: gran parte de la musculatura y los órganos internos se han fundido en una <strong>especie de papilla densa y viscosa</strong>, como si todos los tejidos del cuerpo se estuvieran mezclando en una sola materia maleable alrededor de los huesos.</p>

            <h3>3. INCIDENTE DE CAMPO</h3>
            <p>Los proyectiles de calibre estándar atravesaban su masa blanda sin detenerlo. Solo el fuego concentrado logró colapsar la estructura orgánica. Dos integrantes del equipo de captura fueron puestos en cuarentena absoluta tras exposición a salpicaduras.</p>
        `,
        imagenURL: "img/Jabali_Fase3.jpg",
        imagenPie: "FIG 2.4 — Imagen tomada por el sistema de seguridad del scto P-07, de un Jabalí en Fase 3 mostrando brotes tentaculares y licuefacción tisular.",
        modeloGLB: null, // Reemplazar por ej. "models/jabali.glb"
        tipoHolograma: "fase3"
    },
    {
        id: "BIO-402",
        titulo: "Animaloide: Puma Austral (Puma concolor) — Fase 4",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        estado: "ALERTA ROJA // ELIMINADO",
        fecha: "26/10/2026",
        etiquetas: ["puma", "fase 4", "bipedo", "hinchado", "animaloide"],
        texto: `
            <h3>1. PERFIL DEL ESPÉCIMEN</h3>
            <p><strong>Especie Original:</strong> <em>Puma concolor</em> (identificación confirmada únicamente por análisis dental y restos aislados de pelaje leonado).<br>
            <strong>Fase de Infección:</strong> Fase 4.</p>

            <h3>2. CONVERGENCIA MORFOLÓGICA</h3>
            <p>El organismo ha perdido casi por completo los rasgos felinos originales. Su cuerpo adquirió un <strong>aspecto hinchado, abotargado y estrictamente bípedo</strong>, superando los 2,15 metros de estatura erguida. Las patas traseras se engrosaron y rearticularon para sostener el peso en vertical, mientras que la caja torácica se expandió de forma irregular.</p>
            <p>Solo un fragmento desplazado de la mandíbula superior y dos parches de piel intacta en el hombro derecho permitieron confirmar que se trataba de un puma. Ya no emite rugidos; sus vocalizaciones se redujeron a chasquidos húmedos y vibraciones graves.</p>

            <h3>3. EVALUACIÓN DE RIESGO</h3>
            <p>A partir de la Fase 4 resulta casi imposible distinguir la especie de origen a simple vista. El equipo táctico recibió autorización permanente para emplear armamento incendiario ante cualquier avistamiento de siluetas bípedas en los cuadrantes cerrados.</p>
        `,
        imagenURL: "img/Puma_Fase4.jpg",
        imagenPie: "FIG 2.5 — Imagen proporcionada por el agente J8L-sen. G.O.M. Epsilon-11, quien abatio al sujeto 402.",
        modeloGLB: null,
        tipoHolograma: "fase4"
    },
    {
        id: "BIO-501",
        titulo: "Espécimen No Identificado (Caso F5-09) — Fase 5",
        carpeta: "ANIMALOIDES",
        nivelRequerido: 4,
        estado: "DESTRUCCIÓN CONFIRMADA",
        fecha: "04/11/2026",
        etiquetas: ["fase 5", "fusion", "extremidades", "bipedo", "masa", "indistinguible"],
        texto: `
            <h3>1. IDENTIFICACIÓN</h3>
            <p><strong>Especie Original:</strong> INDETERMINABLE (sin rasgos taxonómicos reconocibles).<br>
            <strong>Fase de Infección:</strong> Fase 5.</p>

            <h3>2. DESCRIPCIÓN DEL ORGANISMO</h3>
            <p>El sujeto F5-09 representa la primera confirmación visual directa de la quinta etapa evolutiva. Se trata de una <strong>masa bípeda de múltiples extremidades asimétricas</strong>, de superficie irregular y húmeda, con el aspecto de material biológico mal moldeado a toda prisa.</p>
            <p>Ninguna parte del organismo permite deducir qué animal fue originalmente. Al carecer de anatomía convencional, el espécimen redistribuía su volumen corporal para compensar el daño balístico recibido durante la emboscada.</p>

            <h3>3. EVENTO DE COMBINACIÓN REGISTRADO</h3>
            <p>Minutos antes del bombardeo táctico con napalm, los drones de vigilancia grabaron al sujeto F5-09 interceptando a otro infectado menor (presuntamente Fase 3). Lejos de atacarlo para devorarlo, <strong>ambas masas se fusionaron en menos de 90 segundos</strong>, incrementando inmediatamente el tamaño, número de apéndices y fuerza motriz del espécimen resultante.</p>
            <p><span class="redacted">Se ordenó omitir en el reporte general la presencia de más de catorce sujetos Fase 5 convergiendo hacia el fiordo del Sector Sur. Ver DIR-009.</span></p>
        `,
        imagenURL: "img/Desconocido_Fase5.jpg",
        imagenPie: "FIG 2.6 — Imagen recuperada de la camara del agente de campo T5L-satr. G.O.M. Gamma-13. Fue encontrada en el ultimo lugar donde se tuvo contacto con el agente.",
        modeloGLB: null,
        tipoHolograma: "fase5"
    },

    // ==================== SISTEMAS / PISTAS DE CONSOLA (NIVEL 4) ====================
    {
        id: "SYS-044",
        titulo: "Ticket IT #409: Depuración Residual y Alerta de Comandos",
        carpeta: "INFRAESTRUCTURA",
        nivelRequerido: 4,
        soloTexto: true,
        estado: "PENDIENTE DE CIERRE",
        fecha: "19/11/2026",
        etiquetas: ["sistema", "consola", "it", "mantenimiento", "error", "comando", "seguridad", "root"],
        texto: `
            <h3>REPORTE DE AUDITORÍA #409 — SOPORTE TÉCNICO KRATINES.INC</h3>
            <p><strong>De:</strong> Ing. R. Morales (Infraestructura)<br>
            <strong>Para:</strong> Seguridad Informática — Nodo Patagonia-Sur</p>

            <h3>1. FALLO DE INTERFAZ EN TERMINALES DE CAMPO</h3>
            <p>Durante la última revisión rutinaria notamos que el entorno de diagnóstico local sigue compilado en la versión de producción. Varios investigadores reportaron que, al hacer <strong>clic repetidamente sobre el logotipo superior de la barra de estado</strong> cuando el sistema se congela —o al presionar accidentalmente la <strong>segunda tecla de función</strong> del teclado—, se despliega una ventana negra de comandos que bloquea la lectura.</p>
            <p>Aunque el personal de Clase 4 no tiene permisos para operar dicha ventana, su presencia rompe la inmersión estética del sistema y confunde a los usuarios.</p>

            <h3>2. RESIDUOS DE SESIÓN DIRECTIVA EN CACHÉ</h3>
            <p>Adicionalmente, el registro de errores del nodo muestra que el módulo de elevación de emergencia utilizado por la Cúpula sigue escuchando peticiones en segundo plano:</p>

            <div class="doc-quote">
                <code>[AUDIT_LOG 03:41:12] ERR_SYNTAX: Ejecución rechazada en consola local.<br>
                > Formato requerido por el núcleo: OVERRIDE &lt;NOMBRE_MATRIZ&gt;-&lt;NIVEL_2_DIGITOS&gt;<br>
                > AVISO: Toda elevación fuera de Sala Directiva activa traza silenciosa de ubicación.</code>
            </div>

            <p>Solicito autorización para limpiar la caché del servidor durante la próxima ventana de mantenimiento y evitar incidentes con el protocolo de respuesta armada.</p>
        `,
        imagenURL: null,
        imagenPie: "FIG 3.1 — Volcado de auditoría del Nodo Patagonia-Sur mostrando puertos de depuración abiertos.",
        modeloGLB: null,
        tipoHolograma: "compuesto"
    },

    // ==================== CÚPULA DIRECTIVA (NIVEL 5 — BLOQUEADO INICIALMENTE) ====================
    {
        id: "DIR-001",
        titulo: "Transcripción Directiva: Secuencias Faltantes del Compuesto 001",
        carpeta: "DIRECTIVA",
        nivelRequerido: 5,
        estado: "SECRETO ABSOLUTO",
        fecha: "14/11/2026",
        etiquetas: ["directiva", "nivel 5", "meteorito", "incompleto", "secuencias", "digital", "prensa", "compuesto 001"],
        texto: `
            <h3>ACTA CONFIDENCIAL — REUNIÓN DE EMERGENCIA (CÚPULA KRATINES.INC)</h3>
            <p><strong>Asistentes:</strong> Dr. Sebastián Arancibia (Jefe de Genética), Dra. Elena Valdivia (Directora Científica — Proyecto Natura).<br>
            <strong>Clasificación:</strong> CLASE 5 // DISTRIBUCIÓN CERO.</p>

            <div class="doc-quote">
                <p><strong>DR. ARANCIBIA:</strong> Elena, los animales en Fase 4 y 5 no están mutando al azar, pero el proceso se comporta como un programa cortado por la mitad. Revisé toda la secuenciación del Compuesto 001 y mi conclusión teórica es incómoda: <strong>este virus está incompleto</strong>. Su arquitectura deja enlaces abiertos que sugieren que faltan una o dos secuencias estructurales para completarlo. Incluso los sensores electrónicos cercanos a las muestras presentan ruido residual anómalo, como si intentara acoplarse a patrones no biológicos sin lograrlo del todo.</p>
                <p><strong>DR. ARANCIBIA:</strong> Sé cómo suena, pero si lográramos obtener el resto del agente, quizá podríamos entender su función real y frenar la cascada mutagénica antes de que la prensa se entere y todo el proyecto se nos vaya de las manos.</p>
                <p><strong>DRA. VALDIVIA:</strong> Detente ahí, Sebastián. Olvida esa hipótesis. Es completamente <strong>imposible conseguir el resto del virus</strong> —suponiendo que realmente exista otra parte—. La fracción biológica que usamos para sintetizar el Compuesto 001 fue lo <strong>único</strong> que sobrevivió en estasis dentro del meteorito que recuperamos. Escaneamos cada milímetro del cráter y pulverizamos la roca madre buscando residuos. No hay nada más allá afuera que podamos traer a un laboratorio.</p>
                <p><strong>DRA. VALDIVIA:</strong> Trabajamos con lo que tenemos. Mientras los gobiernos sigan viendo bosques más verdes y fauna creciendo, mantendremos el cerco mediático y seguiremos quemando las anomalías en el sur.</p>
            </div>
        `,
        imagenURL: "img/V_Incompleto.jpg",
        imagenPie: "FIG 5.1 — Modelo estructural del Compuesto 001 evidenciando huecos de enlace sin correspondencia orgánica.",
        modeloGLB: null,
        tipoHolograma: "compuesto"
    },
    {
        id: "DIR-009",
        titulo: "Operación 'Poda Austral': Contención de Masa Semi-Crítica",
        carpeta: "DIRECTIVA",
        nivelRequerido: 5,
        estado: "CONTENCIÓN ACTIVA",
        fecha: "22/11/2026",
        etiquetas: ["masa", "semi-critica", "sur de chile", "ataques", "contencion", "nivel 5", "fase 5"],
        texto: `
            <h3>INFORME TÁCTICO RESERVADO — ZONA DE EXCLUSIÓN SUR (CHILE)</h3>
            <p><strong>Ubicación:</strong> Sector clasificado, fiordo interior sin población civil (extremo sur de Chile).<br>
            <strong>Naturaleza de la Amenaza:</strong> Conglomerado orgánico en estado <strong>Semi-Crítico</strong>.</p>

            <h3>1. DESCRIPCIÓN DEL FENÓMENO</h3>
            <p>Pese a las operaciones de limpieza, un número indeterminado de Animaloides en Fase 5 logró converger en un valle cerrado del sur austral, iniciando un proceso sostenido de fusión múltiple. El resultado es la única <strong>masa biológica semi-crítica</strong> registrada hasta la fecha: una estructura orgánica de decenas de toneladas que sigue asimilando cualquier forma de vida que se aproxime a su perímetro.</p>
            <p><strong>Evaluación científica:</strong> Ningún miembro de la división sabe con certeza qué ocurrirá si más y más infectados continúan uniéndose y la masa supera su umbral crítico. Los instrumentos sísmicos y acústicos ya registran pulsaciones sincronizadas en todo el volumen del conglomerado.</p>

            <h3>2. PROTOCOLO DE CONTENCIÓN VIGENTE ("PODA AUSTRAL")</h3>
            <p>Dado que el bombardeo masivo alertaría a la fuerza aérea, a satélites comerciales y a la prensa internacional, la Cúpula Directiva de <strong>Kratines.INC</strong> aprobó una estrategia de reducción controlada:</p>
            <ul>
                <li>Ejecución de <strong>ataques incendiarios y de artillería ligera a intervalos irregulares</strong> (entre 14 y 39 horas, sin patrón predecible) para recortar el crecimiento de la masa biológica e impedir cualquier adaptación conductual.</li>
                <li>Cierre perimetral absoluto bajo la fachada de "zona de reserva geológica privada".</li>
                <li>Eliminación inmediata de cualquier filtración de datos o infiltración en la red interna de Proyecto Natura.</li>
            </ul>
        `,
        imagenURL: "img/Masa_Semi-critica.jpg",
        imagenPie: "FIG 5.2 — Evidencia visual del estado del sujeto 009 tras el ataque de reducción #19. Proporcionada por el agente en jefe L1L-mast. G.O.M. Tau-5",
        modeloGLB: null,
        tipoHolograma: "masa"
    }
];

// ============================================================================
// ESTADO DE LA APLICACIÓN
// ============================================================================
let carpetaActual = "ALL";
let busquedaActual = "";
let archivoSeleccionado = null;

// Variables Visor 3D (Three.js)
let scene, camera, renderer, currentMesh, wireframeMode = true, autoRotate = true;
let isDragging = false, prevMouse = { x: 0, y: 0 };

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    configurarLogin();
    configurarBuscadorYPestanas();
    iniciarVisor3DProcedural();
    configurarConsolaSecreta();
});

function configurarLogin() {
    const loginForm = document.getElementById("login-form");
    const passInput = document.getElementById("password-input");
    const errorMsg = document.getElementById("login-error");
    const loginScreen = document.getElementById("login-screen");
    const terminalScreen = document.getElementById("terminal-screen");
    const logoutBtn = document.getElementById("logout-btn");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (sistemaBloqueado) return;
        const claveIngresada = passInput.value.trim().toUpperCase();

        if (claveIngresada === CLAVE_CLASE_4) {
            errorMsg.classList.add("hidden");
            loginScreen.classList.add("hidden");
            terminalScreen.classList.remove("hidden");
            renderizarCarpetas();
            renderizarListaArchivos();
        } else {
            errorMsg.classList.remove("hidden");
            passInput.value = "";
        }
    });

    logoutBtn.addEventListener("click", () => {
        if (sistemaBloqueado) return;
        terminalScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");
        passInput.value = "";
    });
}

// ============================================================================
// CARPETAS, BUSCADOR Y APERTURA DE DOCUMENTOS (CON CENSURA DINÁMICA)
// ============================================================================
function renderizarCarpetas() {
    const folderList = document.getElementById("folder-list");
    folderList.innerHTML = "";

    CARPETAS.forEach((carpeta) => {
        const li = document.createElement("li");
        li.className = `folder-item ${carpeta.id === carpetaActual ? "active" : ""}`;
        li.innerHTML = `<span>${carpeta.nombre}</span>`;
        li.addEventListener("click", () => {
            carpetaActual = carpeta.id;
            renderizarCarpetas();
            renderizarListaArchivos();
        });
        folderList.appendChild(li);
    });
}

function renderizarListaArchivos() {
    const fileList = document.getElementById("file-list");
    const fileCount = document.getElementById("file-count");
    fileList.innerHTML = "";

    const filtrados = ARCHIVOS_DB.filter((archivo) => {
        const coincideCarpeta = carpetaActual === "ALL" || archivo.carpeta === carpetaActual;
        const termino = busquedaActual.toLowerCase();
        const coincideBusqueda =
            archivo.id.toLowerCase().includes(termino) ||
            archivo.titulo.toLowerCase().includes(termino) ||
            archivo.etiquetas.some((t) => t.toLowerCase().includes(termino));

        return coincideCarpeta && coincideBusqueda;
    });

    fileCount.textContent = filtrados.length;

    filtrados.forEach((archivo) => {
        const bloqueado = archivo.nivelRequerido > NIVEL_USUARIO;
        const li = document.createElement("li");
        li.className = `file-item ${bloqueado ? "locked" : ""} ${
            archivoSeleccionado && archivoSeleccionado.id === archivo.id ? "active" : ""
        }`;

        li.innerHTML = `
            <div>
                <strong>[${archivo.id}]</strong> ${archivo.titulo}
            </div>
            <span class="lvl-tag ${bloqueado ? "lvl-5" : "lvl-4"}">
                ${bloqueado ? "🔒 CLASE " + archivo.nivelRequerido : "CLASE " + archivo.nivelRequerido}
            </span>
        `;

        li.addEventListener("click", () => abrirArchivo(archivo));
        fileList.appendChild(li);
    });
}

// Procesa las etiquetas <span class="redacted"> según el nivel actual del usuario
function procesarCensuraDinamica(htmlTexto) {
    if (NIVEL_USUARIO >= 5) {
        // Nivel 5: se descensura automáticamente y se resalta lo revelado
        return htmlTexto.replace(
            /<span class="redacted">([\s\S]*?)<\/span>/g,
            '<span class="redacted-unlocked" title="Fragmento desclasificado por autorización Nivel 5">$1</span>'
        );
    }
    // Nivel 4 o inferior: el texto real NO se envía al DOM (completamente ilegible)
    return htmlTexto.replace(
        /<span class="redacted">([\s\S]*?)<\/span>/g,
        '<span class="redacted-locked" title="Contenido redactado — Requiere Nivel 5">████████ [REDACTADO N5]</span>'
    );
}

function abrirArchivo(archivo) {
    archivoSeleccionado = archivo;
    renderizarListaArchivos();

    const emptyViewer = document.getElementById("empty-viewer");
    const lockedViewer = document.getElementById("locked-viewer");
    const docContent = document.getElementById("document-content");

    emptyViewer.classList.add("hidden");

    if (archivo.nivelRequerido > NIVEL_USUARIO) {
        docContent.classList.add("hidden");
        lockedViewer.classList.remove("hidden");
        document.getElementById("locked-file-title").textContent =
            `ARCHIVO OBJETIVO: [${archivo.id}] ${archivo.titulo}`;
        return;
    }

    lockedViewer.classList.add("hidden");
    docContent.classList.remove("hidden");

    // Reiniciar siempre a la pestaña de Documento al cambiar de archivo
    const btnTexto = document.querySelector('.tab-btn[data-tab="tab-text"]');
    const btnImagen = document.querySelector('.tab-btn[data-tab="tab-image"]');
    const btn3D = document.querySelector('.tab-btn[data-tab="tab-3d"]');

    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach((p) => p.classList.add("hidden"));
    btnTexto.classList.add("active");
    document.getElementById("tab-text").classList.remove("hidden");

    // Ocultar o mostrar las pestañas de Imagen y 3D según el tipo de archivo
    if (archivo.soloTexto) {
        btnImagen.classList.add("hidden");
        btn3D.classList.add("hidden");
    } else {
        btnImagen.classList.remove("hidden");
        btn3D.classList.remove("hidden");
    }

    document.getElementById("doc-id").textContent = `REGISTRO // ${archivo.id}`;
    document.getElementById("doc-title").textContent = archivo.titulo;
    document.getElementById("doc-clearance").textContent = `AUTORIZACIÓN CLASE ${archivo.nivelRequerido}`;
    document.getElementById("doc-status").textContent = archivo.estado;
    document.getElementById("doc-date").textContent = `FECHA: ${archivo.fecha}`;
    document.getElementById("doc-sig-level").textContent =
        NIVEL_USUARIO >= 5 ? "MODO LECTURA: CLASE 5 (SIN CENSURA)" : "MODO LECTURA: CLASE 4 (REDACTADO)";

    // Inyectar texto aplicando censura dinámica
    document.getElementById("doc-body-text").innerHTML = procesarCensuraDinamica(archivo.texto);

    // Si es un informe de solo texto, no hace falta cargar imagen ni visor 3D
    if (archivo.soloTexto) return;

    // Imagen propia o escáner técnico generado automáticamente
    const imgEl = document.getElementById("doc-image");
    imgEl.src = archivo.imagenURL ? archivo.imagenURL : generarImagenEscaner(archivo);
    document.getElementById("doc-image-caption").textContent = archivo.imagenPie;

    // Visor 3D (archivo .glb propio o holograma Three.js)
    const glbViewer = document.getElementById("custom-glb-viewer");
    const procContainer = document.getElementById("procedural-3d-container");
    document.getElementById("viewer-3d-label").textContent = `ESCANEO 3D // ${archivo.id} (${archivo.tipoHolograma.toUpperCase()})`;

    if (archivo.modeloGLB) {
        glbViewer.src = archivo.modeloGLB;
        glbViewer.classList.remove("hidden");
        procContainer.classList.add("hidden");
    } else {
        glbViewer.classList.add("hidden");
        procContainer.classList.remove("hidden");
        generarMallaEspecimen(archivo.tipoHolograma);
    }
}

// Genera una imagen de escáner científico SVG si aún no has puesto tu foto en img/
function generarImagenEscaner(archivo) {
    const color = archivo.nivelRequerido >= 5 ? "#ff2a55" : "#2ef2a0";
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="820" height="420" viewBox="0 0 820 420">
        <rect width="820" height="420" fill="#050b0a"/>
        <g stroke="${color}" stroke-opacity="0.14" stroke-width="1">
            ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 42}" y1="0" x2="${i * 42}" y2="420"/>`).join("")}
            ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${i * 42}" x2="820" y2="${i * 42}"/>`).join("")}
        </g>
        <rect x="20" y="20" width="780" height="380" fill="none" stroke="${color}" stroke-opacity="0.6" stroke-width="1.5"/>
        <circle cx="410" cy="200" r="115" fill="none" stroke="${color}" stroke-dasharray="6 6" stroke-opacity="0.5"/>
        <circle cx="410" cy="200" r="65" fill="none" stroke="${color}" stroke-opacity="0.7"/>
        <line x1="270" y1="200" x2="550" y2="200" stroke="${color}" stroke-opacity="0.35"/>
        <line x1="410" y1="70" x2="410" y2="330" stroke="${color}" stroke-opacity="0.35"/>
        <text x="40" y="54" fill="${color}" font-family="monospace" font-size="16">KRATINES.INC // REGISTRO VISUAL [${archivo.id}]</text>
        <text x="40" y="78" fill="#88b8a8" font-family="monospace" font-size="13">ESTADO: ${archivo.estado} | FECHA: ${archivo.fecha}</text>
        <text x="410" y="205" text-anchor="middle" fill="${color}" font-family="monospace" font-size="15">[ CAPTURA PENDIENTE DE ARCHIVO LOCAL ]</text>
        <text x="410" y="228" text-anchor="middle" fill="#7aa698" font-family="monospace" font-size="12">Asigne una imagen en script.js (imagenURL: "img/archivo.png")</text>
        <text x="40" y="382" fill="#688c7e" font-family="monospace" font-size="12">PROYECTO NATURA — NODO PATAGONIA-SUR // SOLO USO INTERNO</text>
    </svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function configurarBuscadorYPestanas() {
    document.getElementById("search-input").addEventListener("input", (e) => {
        busquedaActual = e.target.value;
        renderizarListaArchivos();
    });

    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            tabBtns.forEach((b) => b.classList.remove("active"));
            tabPanes.forEach((p) => p.classList.add("hidden"));

            btn.classList.add("active");
            const targetId = btn.getAttribute("data-tab");
            document.getElementById(targetId).classList.remove("hidden");

            if (targetId === "tab-3d") redimensionarVisor3D();
        });
    });

    document.getElementById("toggle-wireframe-btn").addEventListener("click", () => {
        wireframeMode = !wireframeMode;
        if (currentMesh) {
            currentMesh.traverse((child) => {
                if (child.isMesh) child.material.wireframe = wireframeMode;
            });
        }
    });

    document.getElementById("toggle-rotation-btn").addEventListener("click", () => {
        autoRotate = !autoRotate;
        const glbViewer = document.getElementById("custom-glb-viewer");
        if (autoRotate) glbViewer.setAttribute("auto-rotate", "");
        else glbViewer.removeAttribute("auto-rotate");
    });
}

// ============================================================================
// CONSOLA SECRETA, ELEVACIÓN A NIVEL 5 Y FINAL DE BLOQUEO (45 SEGUNDOS)
// ============================================================================
function configurarConsolaSecreta() {
    const secretConsole = document.getElementById("secret-console");
    const closeBtn = document.getElementById("close-console-btn");
    const consoleForm = document.getElementById("console-form");
    const consoleInput = document.getElementById("console-input");
    const consoleOutput = document.getElementById("console-output");
    const terminalScreen = document.getElementById("terminal-screen");
    const corpLogo = document.querySelector(".corp-logo-sm");

    const abrirConsola = () => {
        if (sistemaBloqueado || terminalScreen.classList.contains("hidden")) return;
        secretConsole.classList.remove("hidden");
        consoleInput.focus();
    };

    const cerrarConsola = () => {
        secretConsole.classList.add("hidden");
    };

    window.addEventListener("keydown", (e) => {
        if (sistemaBloqueado) {
            if (e.key !== "F5") {
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }

        if (e.key === "F2" || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "x")) {
            e.preventDefault();
            if (secretConsole.classList.contains("hidden")) abrirConsola();
            else cerrarConsola();
        } else if (e.key === "Escape" && !secretConsole.classList.contains("hidden")) {
            cerrarConsola();
        }
    }, true);

    // Triple clic en el logo "PROYECTO NATURA"
    if (corpLogo) {
        corpLogo.addEventListener("click", (e) => {
            if (e.detail === 3) abrirConsola();
        });
    }

    closeBtn.addEventListener("click", cerrarConsola);

    consoleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (sistemaBloqueado) return;

        const comandoRaw = consoleInput.value.trim();
        if (!comandoRaw) return;

        const comando = comandoRaw.toUpperCase();
        agregarLogConsola(`natura@kratines:~# ${comandoRaw}`);
        consoleInput.value = "";

        if (comando === "HELP") {
            agregarLogConsola("> COMANDOS DE DIAGNÓSTICO: STATUS, CLEAR, EXIT", "log-warn");
            agregarLogConsola("> NOTA: Los comandos de anulación directiva no se listan en ayuda pública.", "log-warn");
        } else if (comando === "STATUS") {
            agregarLogConsola(`> NODO: PATAGONIA-SUR // NIVEL ACTIVO: CLASE ${NIVEL_USUARIO}.`);
        } else if (comando === "CLEAR") {
            consoleOutput.innerHTML = "";
        } else if (comando === "EXIT") {
            cerrarConsola();
        } else if (comando === COMANDO_NIVEL_5.toUpperCase()) {
            otorgarNivel5();
        } else {
            agregarLogConsola(`> ERROR: COMANDO '${comandoRaw}' NO RECONOCIDO.`, "log-error");
        }
    });
}

function agregarLogConsola(texto, clase = "") {
    const consoleOutput = document.getElementById("console-output");
    const p = document.createElement("p");
    if (clase) p.className = clase;
    p.textContent = texto;
    consoleOutput.appendChild(p);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function otorgarNivel5() {
    if (NIVEL_USUARIO >= 5) {
        agregarLogConsola("> LOS PRIVILEGIOS DE CLASE 5 YA SE ENCUENTRAN ACTIVOS.", "log-warn");
        return;
    }

    NIVEL_USUARIO = 5;

    document.getElementById("user-clearance-display").textContent = "CLASE 5 (CÚPULA DIRECTIVA)";
    document.getElementById("clearance-badge-box").classList.add("level-5");

    agregarLogConsola("> VERIFICANDO CACHÉ DE ANULACIÓN KRATINES.INC...", "log-success");
    agregarLogConsola("> PRIVILEGIOS ELEVADOS A CLASE 5. CENSURAS Y ARCHIVOS DIRECTIVOS DESBLOQUEADOS.", "log-success");

    // Refrescar lista y reabrir documento actual para descensurar en vivo
    renderizarListaArchivos();
    if (archivoSeleccionado) {
        abrirArchivo(archivoSeleccionado);
    }

    // Contador INVISIBLE de 45 segundos
    if (!temporizadorFinal) {
        temporizadorFinal = setTimeout(activarFinalBloqueo, TIEMPO_DETECCION_MS);
    }
}

function activarFinalBloqueo() {
    sistemaBloqueado = true;
    document.getElementById("secret-console").classList.add("hidden");
    if (document.activeElement) document.activeElement.blur();
    document.getElementById("breach-ending-screen").classList.remove("hidden");
}

// ============================================================================
// MOTOR 3D INTERACTIVO (THREE.JS) — HOLOGRAMAS POR FASE Y ESPECIE
// ============================================================================
function iniciarVisor3DProcedural() {
    const container = document.getElementById("procedural-3d-container");

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 5.2;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x2ef2a0, 0.55));
    const pointLight = new THREE.PointLight(0x38d9ff, 1.5);
    pointLight.position.set(5, 6, 5);
    scene.add(pointLight);

    const domElem = renderer.domElement;
    domElem.addEventListener("mousedown", (e) => {
        isDragging = true;
        prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("mouseup", () => (isDragging = false));
    window.addEventListener("mousemove", (e) => {
        if (!isDragging || !currentMesh) return;
        currentMesh.rotation.y += (e.clientX - prevMouse.x) * 0.01;
        currentMesh.rotation.x += (e.clientY - prevMouse.y) * 0.01;
        prevMouse = { x: e.clientX, y: e.clientY };
    });

    domElem.addEventListener("wheel", (e) => {
        e.preventDefault();
        camera.position.z = Math.max(2.3, Math.min(9.5, camera.position.z + e.deltaY * 0.004));
    });

    window.addEventListener("resize", redimensionarVisor3D);
    animar3D();
}

function generarMallaEspecimen(tipo) {
    if (currentMesh) scene.remove(currentMesh);
    currentMesh = new THREE.Group();

    const matVerde = new THREE.MeshStandardMaterial({
        color: 0x2ef2a0, emissive: 0x052b1c, wireframe: wireframeMode, roughness: 0.35
    });
    const matAlerta = new THREE.MeshStandardMaterial({
        color: 0xff2a55, emissive: 0x3b0510, wireframe: wireframeMode, roughness: 0.3
    });
    const matAmbar = new THREE.MeshStandardMaterial({
        color: 0xffb700, emissive: 0x332200, wireframe: wireframeMode
    });

    if (tipo === "planta") {
        // Tronco de Coigüe + ramas + pequeñas pústulas latentes
        const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 2.8, 10), matVerde);
        currentMesh.add(tronco);
        for (let i = 0; i < 4; i++) {
            const rama = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.16, 1.3, 8), matVerde);
            rama.position.set(Math.cos(i * 1.6) * 0.5, 0.4 + i * 0.25, Math.sin(i * 1.6) * 0.5);
            rama.rotation.z = (i % 2 === 0 ? -0.7 : 0.7);
            currentMesh.add(rama);
        }
        for (let i = 0; i < 5; i++) {
            const nodulo = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), matAmbar);
            nodulo.position.set(Math.cos(i * 2.1) * 0.35, -0.8 + i * 0.35, Math.sin(i * 2.1) * 0.35);
            currentMesh.add(nodulo);
        }
    } else if (tipo === "fase1") {
        // Zorro Culpeo simplificado con leves pústulas
        const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.38, 1.7, 12), matVerde);
        torso.rotation.z = Math.PI / 2;
        currentMesh.add(torso);
        const cabeza = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.85, 8), matVerde);
        cabeza.position.set(1.1, 0.35, 0);
        cabeza.rotation.z = -Math.PI / 2.2;
        currentMesh.add(cabeza);
        for (let i = 0; i < 6; i++) {
            const pustula = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), matAmbar);
            pustula.position.set(0.5 + (i % 3) * 0.22, 0.25 + (i % 2) * 0.15, (i - 2.5) * 0.12);
            currentMesh.add(pustula);
        }
    } else if (tipo === "fase2") {
        // Huemul con tumores prominentes y astas deformadas
        const cuerpo = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 1), matVerde);
        cuerpo.scale.set(1.4, 0.9, 0.85);
        currentMesh.add(cuerpo);
        const cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.38, 1.1, 10), matVerde);
        cuello.position.set(0.95, 0.65, 0);
        cuello.rotation.z = -0.45;
        currentMesh.add(cuello);
        // Tumores visibles
        [[0.2, 0.65, 0.45, 0.42], [-0.45, 0.4, -0.4, 0.38], [0.85, 0.95, 0.28, 0.32]].forEach(([x, y, z, r]) => {
            const tumor = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), matAlerta);
            tumor.position.set(x, y, z);
            currentMesh.add(tumor);
        });
    } else if (tipo === "fase3") {
        // Jabalí: masa tipo papilla deformada + apéndices tentaculares
        const geo = new THREE.IcosahedronGeometry(1.15, 2);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const v = new THREE.Vector3().fromBufferAttribute(pos, i);
            v.multiplyScalar(1 + 0.25 * Math.sin(v.x * 5) * Math.cos(v.z * 5));
            pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        currentMesh.add(new THREE.Mesh(geo, matVerde));
        const tentaculos = new THREE.Mesh(new THREE.TorusKnotGeometry(1.15, 0.14, 80, 10, 2, 5), matAlerta);
        currentMesh.add(tentaculos);
    } else if (tipo === "fase4") {
        // Puma en Fase 4: hinchado y bípedo
        const torso = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 2), matVerde);
        torso.scale.set(1.05, 1.35, 0.95);
        torso.position.y = 0.25;
        currentMesh.add(torso);
        const piernaI = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.22, 1.4, 8), matVerde);
        piernaI.position.set(-0.45, -1.1, 0);
        const piernaD = piernaI.clone();
        piernaD.position.x = 0.45;
        currentMesh.add(piernaI, piernaD);
        const bulto = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), matAlerta);
        bulto.position.set(0.45, 0.85, 0.35);
        currentMesh.add(bulto);
    } else if (tipo === "fase5") {
        // Masa bípeda multextremidad indistinguible
        const nucleo = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 2), matAlerta);
        nucleo.scale.set(0.95, 1.5, 0.95);
        currentMesh.add(nucleo);
        for (let i = 0; i < 7; i++) {
            const brazo = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 1.7, 7), matVerde);
            const ang = (i / 7) * Math.PI * 2;
            brazo.position.set(Math.cos(ang) * 0.9, (i % 3 - 1) * 0.55, Math.sin(ang) * 0.9);
            brazo.rotation.z = Math.cos(ang) * 0.9;
            brazo.rotation.x = Math.sin(ang) * 0.9;
            currentMesh.add(brazo);
        }
    } else if (tipo === "masa") {
        // Masa Semi-Crítica (conglomerado múltiple del sur de Chile)
        const offsets = [[0, 0, 0, 1.15], [1.0, 0.4, 0.3, 0.78], [-0.95, -0.2, 0.5, 0.85], [0.2, -0.7, -0.8, 0.75], [-0.4, 0.9, -0.5, 0.65]];
        offsets.forEach(([x, y, z, r], idx) => {
            const geo = new THREE.IcosahedronGeometry(r, 2);
            const m = new THREE.Mesh(geo, idx % 2 === 0 ? matAlerta : matVerde);
            m.position.set(x, y, z);
            currentMesh.add(m);
        });
    } else {
        // Compuesto 001: anillo molecular con "secuencia incompleta" (arco abierto)
        const anilloIncompleto = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.14, 14, 50, Math.PI * 1.45), matVerde);
        currentMesh.add(anilloIncompleto);
        const anilloInterno = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.08, 12, 40, Math.PI * 1.25), matAlerta);
        anilloInterno.rotation.x = Math.PI / 2.5;
        currentMesh.add(anilloInterno);
        currentMesh.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.48, 0), matAmbar));
    }

    scene.add(currentMesh);
    redimensionarVisor3D();
}

function redimensionarVisor3D() {
    const container = document.getElementById("procedural-3d-container");
    if (!container || container.clientWidth === 0) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animar3D() {
    requestAnimationFrame(animar3D);
    if (currentMesh && autoRotate && !isDragging) {
        currentMesh.rotation.y += 0.006;
        currentMesh.rotation.x += 0.002;
    }
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}