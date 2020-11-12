import LocalizedStrings from 'react-native-localization';
import english from './language/en.json';
// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export let strings = new LocalizedStrings({
  //  "en-US":{
  //    how:"How do you want your egg today?",
  //    boiledEgg:"Boiled egg",
  //    softBoiledEgg:"Soft-boiled egg",
  //    choice:"How to choose the egg"
  //  },
  en: {
    // English
    // Login Page
    login: 'Login',
    or: 'OR',
    signUp: 'SignUp',
    email: 'Email',
    password: 'Password',
    back: 'Back',

    // Sign UP
    tellUs: 'Tell us a bit about you...',
    name: 'Name',
    next: 'Next',
    signUpText:
      'Why we ask? Becoming Pranic helps you find the best breathing exercise. This information will not be shared and will help you enjoy the app more.',
    enterName: 'Enter Name',
    enterEmail: 'Enter Email',
    enterGender: 'Enter Gender',
    enterAge: 'Enter Age',
    enterPassword: 'Enter Password',
    enterHeight: 'Enter Height',
    enterWeight: 'Enter Weight',
    // Age Field
    age: 'Age',
    yearOfBirth: 'Year Of Birth',
    whichYearYouBorn: 'Which Year You Were Born',
    typeYourBirthYear: 'Type Your Birth Year',
    minMax: 'Minimum = 1950 To Maximum = 2010',
    submit: 'Submit',
    pleaseTypeCurrectYears: 'Please Type Correct Years',
    alert: 'Alert',
    ok: 'Ok',
    // Gender Field
    male: 'Male',
    female: 'Female',
    custom: 'Custom',
    gender: 'Gender',
    selectYourGender: 'Select Your Gender',
    typeYouGender: 'Type Your Gender',
    // Weight Field
    weight: 'Weight',
    yourWeight: 'Your Weight kg/lb',
    kilogram: 'Kilogram',
    pounds: 'Pounds',
    // Height Feild
    height1: 'Height',
    yourHeight: 'Your Height cm/inches',
    centimeter: 'Centimeter',
    inches: 'Inch',

    // Form 2
    form2Heading: 'How would you define your Future self to be?',
    form2Heading2: 'Check one or more',
    defender: 'Defender',
    manager: 'Manager',
    preserver: 'Preserver',
    artist: 'Artist',
    producer: 'Producer',
    missionary: 'Missionary',
    strategist: 'Strategist',
    leader: 'Leader',
    teacher: 'Teacher',
    selectAnyone: 'Select Atleast One',

    // Form 3
    form3Heading: 'What would you like to work on more?',
    form3Heading2: 'Check one or as many you wish',
    mind: 'Mind',
    body: 'Body',
    emotion: 'Emotion',
    ethicBody: 'Ethic Body',
    form3Footer:
      'Your session create a historical database belonging to you If you share your account the data collected will represent your progress.',

    // Home
    // Prayanama
    stateofMindWanted: "State of Mind",
    courseOffered: "Course Offered",
    healthManagment:"Health Management",
    cosmicRule:" Cosmic ruler course",
    holdOn: "Hold On!",
    areYouSure: "Are you sure you want to go back?",
    firstYouCompleteYourExercise: "There's No Back Kindly Complete Your Exercise. Thank You",
    cancel: "Cancel",
    yes: "Yes",
    history: "History",
    parameter: "Parameter",
    lastExercice: "Last Exercise",
    relax: "Relax",
    wouldYouLikeToFeelRelax: "Would You Like To Feel Relax",
    getFiery: "Get Fiery",
    antiInflammatoryHealing: "Anti Inflammatory healing",
    stopProcrastinationandfindFreedom: "Stop Procrastination And Find Freedom",
    bringAwarenessBalance: 'Bring Awareness And Balance',
    goDeeper: "Go Deeper",
    emotionStabilityUpgrade: 'Emotion Stability Upgrade',
    elevate: "ELEVATE",
    feelGoodAndStrongInYourBodyUpgrade: "Feel Good And Strong In Your Body Upgrade",
    buildResource:"Build resource",
    getARaserSharpBrainUpgrade: "Get A Raser Sharp Brain Upgrade",
    goSpiritualTouchTheInfiniteUpgrade: "Go Spiritual Touch The Infinite Upgrade",
    wouldYouLikeToFeelMoreRelaxSoFindMoreExercise: "Would You Like To Feel More Relax So Find More Exercise",
    getMorePranayamasFor: "Get 4 More Pranayama’s For 9.99 €",

    // Parameter

    basicInformation: "Basic Information",
    profile: "Profile",
    deviceConnected: "Device Connected",
    languageofApp: "Language of App",
    languag: "English",
    notification: "Notification",
    onceADay: "Once a Day",
    systemInformation: "System Information",
    appVersion: "App Version",
    moreInformation: "More Information",
    sendUsYourFeedback: "Send Us Your Feedback",
    logout: "Logout",
    english: 'English',
    italian: "Italian",
    spanish: "Spanish",
    french: "French",
    select: "Select",

    // Profile

    user: "User",
    youAre: "You Are",
    yourTarget: "Your Target",

    // Exercise

    selectExerciseSong: "Select Exercise Song",
    note: 'Note',
    noteRelax: 'You want to unwind and feel relaxed. Bring a nice cooling energy in your ida nadi channel that will bring peace within.',
    noteGetFiery: 'Time to be active and tap into your pranic self, get fiery by activating your Pingala nadi channel.',
    noteAntiInflammatory: 'Most diseases start from energy blockages which create excess heat in the body called inflammation. Work directly everywhere in your body to bring a cooling healing sensation inhale cool energy and exhale stored up excess heat.',
    noteStopProcrastination: 'Feel overwhelmed because of all that needs to be done? Stop procrastinating do this exercice every day it will give you the power to attend all that you pilled up in the past, by acting in the present and freeing yourself of the overwhelming burden',
    noteBringAwareness: 'Want to build equanimity? The art to not judge and see reality as it is, this exercise bring you to observe life without having to react, in this space consciousness of the all of life resides',
    selectExerciseTimingsInMins: "Select Exercise Timings in mins : 1 ,3 ,5 ,7 ,11 ,21 ,31",
    selectInhaleExhaleHoldTimingsInSecs: "Select Inhale/Exhale/Hold Timings in secs : 4-9",
    areYouReady: "Are You Ready",
    minutes: "Minutes",
    seconds: "Seconds",
    thanks: "Thank you",
    selectSong: "Select a Song",
    // Last Exercise
    exerciseBegins: "Exercise Begins",
    exercise:"Exercises",

    // exercises Audio

    setYourPosition: "Set You Position.",
    closeYourRightNostril: "Close Your Right Nostril",
    closeYourLeftNostril: "Close Your Left Nostril",
    nowInhale: "Now Inhale",
    nowExhale: "Now Exhale",
    inhaleLeftNostrilAndExhaleRightNostril: "Inhale Left Nostril And \n Exhale Right Nostril. Got It? Now Ready",
    inhaleLeftNostril: "Inhale Left Nostril",
    exhaleRightNostril: "Exhale Right Nostril",
    inhaleRightNostrilAndExhaleLeftNostril: "Inhale Right Nostril And \n Exhale Left Nostril. Got It? Now Ready",
    inhaleRightNostril: "Inhale Right Nostril",
    exhaleLeftNostril: "Exhale Left Nostril",
    bringExerciseAnimation: "In this exercise first Inhale left Nostril Exhale right Nostril And Second Inhale right Nostril Exhale left Nostril got it? Now Ready.",
    bringExercise: "In this exercise first..... Inhale left Nostril..... Exhale right Nostril..... And Second..... Inhale right Nostril..... Exhale left Nostril..... got it? Now Ready.",

    // Paid Exercise
    elevateExercise: "Inhale Left Nostril 4 Seconds.\n Exhale Right Nostril 8 Seconds.\n Now Hold 8 Seconds.\n Inhale Right Nostril 8 Seconds.\n Exhale Left Nostril 8 Seconds.\n Now Hold 8 Seconds.\n Got It? "
  },


  it: {
    // Italian
    // Login Page
    login: "Accesso",
    or: "O",
    signUp: "Iscriviti",
    email: 'E-mail',
    password: "Parola d'ordine",
    back: 'Indietro',

    // Sign UP
    tellUs: "Parlaci un po 'di te...",
    name: "Nome",
    next: "Il prossimo",
    signUpText: "Perché chiediamo Diventare Pranic ti aiuta a trovare il miglior esercizio di respirazione. Queste informazioni non saranno condivise e ti aiuteranno a goderti di più l'app.",
    enterName: "Inserisci il nome",
    enterEmail: "Inserisci l'email",
    enterGender: "Inserisci sesso",
    enterAge: "Inserisci l'età",
    enterPassword: "Inserire la password",
    enterHeight: "Inserisci altezza",
    enterWeight: "Inserire il peso",
    // Age Field
    age: "Età",
    yearOfBirth: "Anno di nascita",
    whichYearYouBorn: "In quale anno sei nato",
    typeYourBirthYear: "Scrivi l'anno di nascita",
    minMax: "Minimo => 1950 Per Massimo <= 2010",
    submit: "Invia",
    pleaseTypeCurrectYears: "Si prega di digitare anni corretti",
    alert: "Mettere in guardia",
    ok: 'Okay',
    // Gender Field
    male: "Maschia",
    female: "Femmina",
    custom: "costume",
    gender: "Genere",
    selectYourGender: "Seleziona il tuo genere",
    typeYouGender: "Digita il tuo genere",
    // Weight Field
    weight: "Peso",
    yourWeight: "Il tuo peso kg/lb",
    kilogram: "Chilogrammo",
    pounds: "Libbra",
    // Height Feild
    height1: "Altezza",
    yourHeight: "La vostra altezza kg/lb",
    centimeter: "Centimetro",
    inches: "pollice",


    // Form 2
    form2Heading: "Come definiresti il ​​tuo sé futuro?",
    form2Heading2: "Controlla uno o più",
    defender: "Difensore",
    manager: "Manager",
    preserver: "Conservatore",
    artist: "Artista",
    producer: "Produttore",
    missionary: "Missionario",
    strategist: "Stratega",
    leader: "Capo",
    teacher: "Insegnante",
    selectAnyone: "Seleziona Atleast One",

    // Form 3
    form3Heading: "Cosa ti piacerebbe lavorare di più?",
    form3Heading2: "Seleziona uno o quanti desideri",
    mind: "Mente",
    body: "Corpo",
    emotion: "Emozione",
    ethicBody: "Corpo etico",
    form3Footer: "La tua sessione crea un database storico che ti appartiene Se condividi il tuo account, i dati raccolti rappresenteranno i tuoi progressi.",

    // Home
    // Pranayama
    stateofMindWanted: "Stato mentale",
    courseOffered: "Corso offerto",
    holdOn: "Resisti!",
    areYouSure: "Sei sicuro di voler tornare indietro?",
    firstYouCompleteYourExercise: "Non c'è ritorno Completa gentilmente il tuo esercizio. Grazie",
    cancel: "Annulla",
    yes: "sì",
    history: "Storia",
    parameter: "Parametro",
    lastExercice: "Ultimo esercizio",
    relax: "Rilassare",
    wouldYouLikeToFeelRelax: "Ti piacerebbe sentirti rilassato",
    getFiery: "Ottieni Fiery",
    antiInflammatoryHealing: "Guarigione anti infiammatoria",
    stopProcrastinationandfindFreedom: "Fermare la procrastinazione e trovare la libertà",
    bringAwarenessBalance: 'Portare consapevolezza ed equilibrio',
    goDeeper: "Diventa più profondo",
    emotionStabilityUpgrade: 'Aggiornamento della stabilità delle emozioni',
    feelGoodAndStrongInYourBodyUpgrade: "Sentiti bene e forte nel tuo aggiornamento del corpo",
    getARaserSharpBrainUpgrade: "Ottieni un aggiornamento del cervello di Raser Sharp",
    goSpiritualTouchTheInfiniteUpgrade: "Vai Spiritual Touch L'aggiornamento infinito",
    wouldYouLikeToFeelMoreRelaxSoFindMoreExercise: "Ti piacerebbe sentirti più rilassato, quindi trova più esercizio",
    getMorePranayamasFor: "Ottieni altri 4 Pranayama a 9,99 €",

    // Parameter

    basicInformation: "Informazioni di base",
    profile: "Profilo",
    deviceConnected: "Dispositivo collegato",
    languageofApp: "Lingua dell'app",
    languag: "Italiano",
    notification: "Notifica",
    onceADay: "Una volta al giorno",
    systemInformation: "Informazioni di sistema",
    appVersion: "Versione dell'app",
    moreInformation: "Maggiori informazioni",
    sendUsYourFeedback: "Inviaci il tuo feedback",
    logout: "Disconnettersi",
    english: 'Inglese',
    italian: "Italiano",
    spanish: "Spagnolo",
    french: "francese",
    select: "Selezionare",


    // Profile

    user: "Utente",
    youAre: "Sei",
    yourTarget: "Il tuo obiettivo",

    // Exercise
    note: 'Nota',
    noteRelax: 'Vuoi rilassarti e sentirti rilassato. Porta una bella energia rinfrescante nel tuo canale ida nadi che porterà la pace interiore.',
    noteGetFiery: 'È ora di essere attivi e attingere al tuo sé pranico, diventare ardente attivando il tuo canale Pingala nadi.',
    noteAntiInflammatory: 'La maggior parte delle malattie inizia da blocchi energetici che creano calore in eccesso nel corpo chiamato infiammazione. Lavora direttamente ovunque nel tuo corpo per portare una sensazione di guarigione rinfrescante, inspira energia fresca ed espira il calore in eccesso immagazzinato.',
    noteStopProcrastination: "Ti senti sopraffatto a causa di tutto ciò che deve essere fatto? Smetti di procrastinare fai questo esercizio ogni giorno ti darà il potere di partecipare a tutto ciò che hai accumulato in passato, agendo nel presente e liberandoti dal peso opprimente",
    noteBringAwareness: "Vuoi costruire l'equanimità? L'arte di non giudicare e vedere la realtà così com'è, questo esercizio ti porta ad osservare la vita senza dover reagire, in questo spazio risiede la coscienza del tutto della vita",
    selectExerciseSong: "Seleziona la canzone di allenamento",
    selectExerciseTimingsInMins: "Seleziona i tempi di allenamento in minuti: 1 ,3 ,5 ,7 ,11 ,21 ,31",
    selectInhaleExhaleHoldTimingsInSecs: "Seleziona Tempi di inspirazione / espirazione / mantenimento in secondi: 4-9",
    areYouReady: "Siete pronti",
    closeYourRightNostril: "Chiudi la tua narice destra",
    closeYourLeftNostril: "Chiudi la narice sinistra",

    minutes: "Minuti",
    seconds: "secondi",
    thanks: "Grazie",
    selectSong: "Seleziona una canzone",

    // Last Exercise
    exerciseBegins: "Inizia l'esercizio",
    exercise:"Esercizi",

    // exercises Audio

    setYourPosition: "Imposta la tua posizione.",
    closeYourRightNostril: "Chiudi la narice destra",
    closeYourLeftNostril: "Chiudi la narice sinistra",
    nowInhale: "Ora Inspira",
    nowExhale: "Ora Espira",
    inhaleLeftNostrilAndExhaleRightNostril: "Inspira la narice sinistra ed \n espira la narice destra. Fatto? Pronto ora",
    inhaleLeftNostril: "Inspira la narice sinistra",
    exhaleRightNostril: "Espira la narice destra",
    inhaleRightNostrilAndExhaleLeftNostril: "Inspira la narice destra ed \n espira la narice sinistra. Fatto? Pronto ora",
    inhaleRightNostril: "Inspira la narice destra",
    exhaleLeftNostril: "Espira la narice sinistra",
    bringExerciseAnimation: "In questo esercizio prima inspira la narice sinistra espira la narice destra e poi inspira la narice destra espira la narice sinistra capito? Pronto ora.",
    bringExercise: "In questo esercizio prima..... Inspira la narice sinistra..... Espira la narice destra..... E secondo..... Inspira la narice destra..... Espira la narice sinistra..... capito? Pronto ora.",
  },

  //  Spanish
  // Login Page
  es: {
    login: "Iniciar sesión",
    or: "O",
    signUp: "Regístrate",
    email: 'Email',
    password: 'Contraseña',
    back: 'Espalda',
    typeYourBirthYear: "Type Your Birth Year",


    // Sign UP
    tellUs: 'Cuéntanos un poco sobre ti...',
    name: "Nombre",
    next: "Próximo",
    signUpText: "Por qué preguntamos? Convertirse en Pranic lo ayuda a encontrar el mejor ejercicio de respiración. Esta información no se compartirá y te ayudará a disfrutar más de la aplicación.",
    enterName: "Ingrese su nombre",
    enterEmail: "Ingrese correo electrónico",
    enterGender: "Ingrese género",
    enterAge: "Ingrese edad",
    enterPassword: "Introducir la contraseña",
    enterHeight: "Introducir altura",
    enterWeight: "Ingresar peso",
    // Age Field
    age: "Años",
    yearOfBirth: "Año de nacimiento",
    whichYearYouBorn: "En qué año naciste",
    typeYourBirthYear: "Escriba su año de nacimiento",
    minMax: "Mínima = 1950 A Máxima = 2010",
    submit: "Enviar",
    pleaseTypeCurrectYears: "Por favor, escriba los años correctos",
    alert: "Alerta",
    ok: "OK",
    // Gender Field
    male: "Masculina",
    female: "Hembra",
    custom: "Personalizada",
    gender: "Género",
    selectYourGender: "Selecciona tu género",
    typeYouGender: "Escribe tu género",
    // Weight Field
    weight: "Peso",
    yourWeight: "Su peso kg/lb",
    kilogram: "Kilogramo",
    pounds: "Libra",
    // Height Feild
    height1: "Altura",
    yourHeight: "Tu altura kg/lb",
    centimeter: "Centímetro",
    inches: "Pulgada",


    // Form 2
    form2Heading: "Cómo definirías tu futuro ser?",
    form2Heading2: "Marque uno o más",
    defender: "Defensor",
    manager: "Gerente",
    preserver: "Conservador",
    artist: "Artista",
    producer: "Productor",
    missionary: "Misionero",
    strategist: "Estratega",
    leader: "Líder",
    teacher: "Profesor",
    selectAnyone: "Seleccione al menos uno",


    // Form 3
    form3Heading: "En qué te gustaría trabajar más?",
    form3Heading2: "Marque uno o tantos que desee",
    mind: "Mente",
    body: "Cuerpo",
    emotion: "Emoción",
    ethicBody: "Cuerpo ético",
    form3Footer: "Su sesión crea una base de datos histórica que le pertenece Si comparte su cuenta, los datos recopilados representarán su progreso.",


    // Home

    stateofMindWanted: "Estado mental",
    courseOffered: "Curso ofrecido",
    holdOn: "Espere!",
    areYouSure: "Estás seguro de que quieres volver?",
    firstYouCompleteYourExercise: "No hay espalda por favor complete su ejercicio. Gracias",
    cancel: "Cancelar",
    yes: "si",
    history: "Historia",
    parameter: "Parámetro",
    lastExercice: "Ultimo ejercicio",
    relax: "Relajarse",
    wouldYouLikeToFeelRelax: "Te gustaría sentirte relajado?",
    getFiery: "Ponerse ardiente",
    stopProcrastinationandfindFreedom: "Detenga la procrastinación y encuentre la libertad",
    antiInflammatoryHealing: "Cicatrización antiinflamatoria",
    bringAwarenessBalance: 'Aporta conciencia y equilibrio',
    goDeeper: "Ir más profundo",
    emotionStabilityUpgrade: 'Mejora de la estabilidad de las emociones más profundo',
    elevate: "ELEVATE",
    feelGoodAndStrongInYourBodyUpgrade: "Siéntete bien y fuerte en tu cuerpo Mejora",
    getARaserSharpBrainUpgrade: "Obtenga una actualización de Raser Sharp Brain",
    goSpiritualTouchTheInfiniteUpgrade: "Ir Toque espiritual La actualización infinita",
    wouldYouLikeToFeelMoreRelaxSoFindMoreExercise: "Te gustaría sentirte más relajado así que encuentra más ejercicio?",
    getMorePranayamasFor: "Obtén 4 Pranayama más por 9,99 €",

    // Parameter

    basicInformation: "Información básica",
    profile: "Perfil",
    deviceConnected: "Dispositivo conectado",
    languageofApp: "Idioma de la aplicación",
    languag: "Español",
    notification: "Notificación",
    onceADay: "Una vez al día",
    systemInformation: "Información del sistema",
    appVersion: "Version de aplicacion",
    moreInformation: "Más información",
    sendUsYourFeedback: "Envíenos sus comentarios",
    logout: "Cerrar sesión",
    english: 'Inglés',
    italian: "Italiano",
    spanish: "español",
    french: "francese",
    select: "Seleccione",
    // Profile

    user: "Usuario",
    youAre: "Usted está",
    yourTarget: "Tu objetivo",

    // Exercise
    note: 'Nota',
    noteRelax: 'Quiere relajarse y sentirse relajado. Traiga una agradable energía refrescante en su canal ida nadi que traerá paz interior.',
    noteGetFiery: 'Es hora de estar activo y aprovechar su yo pránico, ponerse ardiente activando su canal Pingala nadi.',
    noteAntiInflammatory: 'La mayoría de las enfermedades comienzan con bloqueos de energía que crean un exceso de calor en el cuerpo llamado inflamación. Trabaje directamente en todas partes de su cuerpo para brindar una sensación de curación refrescante, inhale energía fría y exhale el exceso de calor almacenado.',
    noteStopProcrastination: "Se siente abrumado por todo lo que hay que hacer? Deje de procrastinar, haga este ejercicio todos los días; le dará el poder de atender todo lo que acumuló en el pasado, actuando en el presente y liberándose de la carga abrumadora.",
    noteBringAwareness: "Quiere generar ecuanimidad? El arte de no juzgar y ver la realidad tal como es, este ejercicio te lleva a observar la vida sin tener que reaccionar, en este espacio reside la conciencia del todo de la vida.",
    selectExerciseSong: "Seleccionar canción de ejercicio",
    selectExerciseTimingsInMins: "Seleccionar tiempos de ejercicio en minutos: 1 ,3 ,5 ,7 ,11 ,21 ,31",
    selectInhaleExhaleHoldTimingsInSecs: "Seleccione Inhale / Exhale / Hold Timings en segundos: 4-9",
    minutes: "Minutos",
    seconds: "segundos",
    thanks: "Gracias",
    selectSong: "Selecciona una cancion",

    // Last Exercise
    exerciseBegins: "Comienza el ejercicio",
    exercise:"Ejercicios",


    // exercises Audio

    setYourPosition: "establece tu posición.",
    closeYourRightNostril: "cierra tu fosa nasal derecha",
    closeYourLeftNostril: "cierra tu fosa nasal izquierda",
    nowInhale: "Ahora inhala",
    nowExhale: "Ahora exhala",
    inhaleLeftNostrilAndExhaleRightNostril: "Inhale la fosa nasal izquierda y \n exhale la fosa nasal derecha. Entendido? Ahora preparado",
    inhaleLeftNostril: "Inhalar la fosa nasal izquierda",
    exhaleRightNostril: "Exhale la fosa nasal derecha",
    inhaleRightNostrilAndExhaleLeftNostril: "Inhale la fosa nasal derecha y \n exhale la fosa nasal izquierda. Entendido? Ahora preparado",
    inhaleRightNostril: "Inhalar la fosa nasal derecha",
    exhaleLeftNostril: "Exhale la fosa nasal izquierda",
    bringExerciseAnimation: "En este ejercicio, primero inhala la fosa nasal izquierda, exhala la fosa nasal derecha y, en segundo, inhala la fosa nasal derecha Exhala la fosa nasal izquierda, entendido? Ahora preparado.",
    bringExercise: "En este ejercicio primero..... inhala la fosa nasal izquierda..... Exhale la fosa nasal derecha..... y, en segundo lugar..... inhala la fosa nasal derecha..... Exhale la fosa nasal izquierda..... Entendido? Ahora preparado.",
  },
  //  French
  // Login Page
  fr: {
    login: "S'identifier",
    or: "Ou",
    signUp: "S'inscrire",
    email: 'Email',
    password: 'Mot de passe',
    back: 'Arrière',

    // Sign UP
    tellUs: 'Parlez-nous un peu de vous...',
    name: "Nom",
    next: "Prochain",
    signUpText: "Pourquoi demandons-nous? Devenir Pranic vous aide à trouver le meilleur exercice de respiration. Ces informations ne seront pas partagées et vous aideront à profiter davantage de l'application.",
    enterName: "Entrez le nom",
    enterEmail: "Entrez votre e-mail",
    enterGender: "Entrez le sexe",
    enterAge: "Entrez l'âge",
    enterPassword: "Entrer le mot de passe",
    enterHeight: "Entrez la hauteur",
    enterWeight: "Entrez le poids",
    // Age Field
    age: "Âge",
    yearOfBirth: "Année de naissance",
    whichYearYouBorn: "L'année de votre naissance",
    typeYourBirthYear: "Tapez votre année de naissance",
    minMax: "Le minimum = 1950 À Maximum = 2010",
    submit: "Soumettre",
    pleaseTypeCurrectYears: "Veuillez saisir les années correctes",
    alert: "Alerte",
    ok: "D'accord",
    // Gender Field
    male: "Mâle",
    female: "Femme",
    custom: "Douane",
    gender: "Le sexe",
    selectYourGender: "Sélectionnez votre sexe",
    typeYouGender: "Tapez votre sexe",
    // Weight Field
    weight: "Poids",
    yourWeight: "Votre poids kg/lb",
    kilogram: "Kilogramme",
    pounds: "Livre",
    // Height Feild
    height1: "la taille",
    yourHeight: "Ton poids kg/lb",
    centimeter: "Centimeter",
    inches: "Pouce",

    // Form 2
    form2Heading: "Comment définiriez-vous votre futur être?",
    form2Heading2: "Cochez une ou plusieurs",
    defender: "Défenseur",
    manager: "Directeur",
    preserver: "Conservateur",
    artist: "Artiste",
    producer: "Producteur",
    missionary: "Missionnaire",
    strategist: "Stratège",
    leader: "Chef",
    teacher: "Professeur",
    selectAnyone: "Sélectionnez au moins un",


    // Form 3
    form3Heading: "Sur quoi aimeriez-vous travailler davantage?",
    form3Heading2: "Cochez une ou autant de fois que vous le souhaitez",
    mind: "Esprit",
    body: "Corps",
    emotion: "Émotion",
    ethicBody: "Corps éthique",
    form3Footer: "Votre session crée une base de données historique vous appartenant Si vous partagez votre compte, les données collectées représenteront votre progression.",


    // Home

    stateofMindWanted: "État d'esprit",
    courseOffered: "Cours offert",
    holdOn: "Attendez!",
    areYouSure: "Voulez-vous vraiment revenir en arrière?",
    firstYouCompleteYourExercise: "Il n'y a pas de dos, veuillez compléter votre exercice. Merci",
    cancel: "Annuler",
    yes: "Oui",
    history: "L'histoire",
    parameter: "Paramètre",
    lastExercice: "Dernier exercice",
    relax: "Relax",
    wouldYouLikeToFeelRelax: "Souhaitez-vous vous sentir détendu",
    getFiery: "Obtenez Fiery",
    antiInflammatoryHealing: "Guérison anti-inflammatoire",
    stopProcrastinationandfindFreedom: "Arrêtez la procrastination et retrouvez la liberté",
    bringAwarenessBalance: 'Apportez conscience et équilibre',
    goDeeper: "Aller plus loin",
    emotionStabilityUpgrade: "Amélioration de la stabilité de l'émotion",
    feelGoodAndStrongInYourBodyUpgrade: "Sentez-vous bien et fort dans votre corps",
    getARaserSharpBrainUpgrade: "Obtenez une mise à niveau Raser Sharp Brain",
    goSpiritualTouchTheInfiniteUpgrade: "Go Spiritual Touch The Infinite Upgrade",
    wouldYouLikeToFeelMoreRelaxSoFindMoreExercise: "Souhaitez-vous vous sentir plus détendu alors trouvez plus d'exercice",
    getMorePranayamasFor: "Obtenez 4 Pranayama supplémentaires pour 9,99 €",

    // Parameter

    basicInformation: "Informations de base",
    profile: "Profil",
    deviceConnected: "Appareil connecté",
    languageofApp: "Langue de l'application",
    languag: "Français",
    notification: "Notification",
    onceADay: "Une fois par jour",
    systemInformation: "Informations système",
    appVersion: "Version de l'application",
    moreInformation: "Plus d'information",
    sendUsYourFeedback: "Envoyez-nous vos commentaires",
    logout: "Se déconnecter",
    english: 'Anglais',
    italian: "Italien",
    spanish: "Espagnol",
    french: "Français",
    select: "Sélectionner",

    // Profile

    user: "Utilisateur",
    youAre: "Vous êtes",
    yourTarget: "Votre cible",

    // Exercise
    note: 'Remarque',
    noteRelax: "Vous voulez vous détendre et vous sentir détendu. Apportez une belle énergie de refroidissement dans votre canal ida nadi qui apportera la paix à l'intérieur.",
    noteGetFiery: "Il est temps d'être actif et de puiser dans votre moi pranique, soyez fougueux en activant votre canal Pingala nadi.",
    noteAntiInflammatory: "La plupart des maladies commencent par des blocages énergétiques qui créent un excès de chaleur dans le corps appelé inflammation. Travaillez directement partout dans votre corps pour apporter une sensation de guérison rafraîchissante. Inspirez l'énergie fraîche et expirez l'excès de chaleur stocké.",
    noteStopProcrastination: "Vous vous sentez dépassé à cause de tout ce qui doit être fait? Arrêtez de tergiverser, faites cet exercice tous les jours, cela vous donnera le pouvoir d'assister à tout ce que vous avez accumulé dans le passé, en agissant dans le présent et en vous libérant du fardeau écrasant.",
    noteBringAwareness: "Envie de construire l'équanimité? L'art de ne pas juger et voir la réalité telle qu'elle est, cet exercice vous amène à observer la vie sans avoir à réagir, dans cet espace réside la conscience du tout de la vie.",
    selectExerciseSong: "Sélectionnez un morceau d'exercice",
    selectExerciseTimingsInMins: "Sélectionnez les horaires de l'exercice en minutes: 1 ,3 ,5 ,7 ,11 ,21 ,31",
    selectInhaleExhaleHoldTimingsInSecs: "Sélectionnez les temps d'inspiration / d'expiration / de maintien en secondes: 4-9",
    areYouReady: "Es-tu prêt",
    closeYourRightNostril: "Fermez votre narine droite",
    closeYourLeftNostril: "Fermez votre narine gauche",
    minutes: "minutes",
    seconds: "secondes",
    thanks: "Merci",
    selectSong: "Sélectionnez un morceau",

    // Last Exercise
    exerciseBegins: "L'exercice commence",
    exercise:"Des exercices",

    // exercises Audio

    setYourPosition: "Définissez votre position",
    closeYourRightNostril: "Fermez votre narine droite",
    closeYourLeftNostril: "Fermez votre narine gauche",
    nowInhale: "Maintenant inspirez",
    nowExhale: "Maintenant expirez",
    inhaleLeftNostrilAndExhaleRightNostril: "Inspirez la narine gauche et \n expirez la narine droite. Je l'ai? Prêt maintenant",
    inhaleLeftNostril: "Inspirez la narine gauche",
    exhaleRightNostril: "Expirez la narine droite",
    inhaleRightNostrilAndExhaleLeftNostril: "Inspirez la narine droite et expirez la narine gauche. Je l'ai? Prêt maintenant",
    inhaleRightNostril: "Inspirez la narine droite",
    exhaleLeftNostril: "Expirez la narine gauche",
    bringExerciseAnimation: "Dans cet exercice d'abord, inspirez la narine gauche Expirez la narine droite et deuxième inspirez la narine droite. Expirez la narine gauche je l'ai? Prêt maintenant.",
    bringExercise: "Dans cet exercice d'abord..... Inspirez la narine gauche..... Expirez la narine droite..... Et deuxieme..... Inspirez la narine droite..... Expirez la narine gauche..... je l'ai? Prêt maintenant.",
  }
   
});
