const words = [
	"abría",
	"acoja",
	"acojo",
	"acres",
	"actúo",
	"acuna",
	"acune",
	"acuno",
	"acuná",
	"acuné",
	"acunó",
	"acuña",
	"acuñe",
	"acuño",
	"acuñá",
	"acuñé",
	"acuñó",
	"afeas",
	"afeás",
	"aguda",
	"agudo",
	"alajú",
	"albos",
	"algas",
	"alhajú",
	"aliás",
	"almas",
	"alojo",
	"alojá",
	"alojó",
	"altas",
	"altos",
	"alías",
	"amina",
	"aminá",
	"ancas",
	"andas",
	"andes",
	"andés",
	"anima",
	"animá",
	"aojar",
	"aojas",
	"aojos",
	"aojás",
	"apoda",
	"apodo",
	"apodá",
	"apodó",
	"apuré",
	"arces",
	"arcos",
	"ardan",
	"ardas",
	"ardes",
	"ardás",
	"ardés",
	"arias",
	"arios",
	"arlos",
	"armes",
	"armés",
	"arpas",
	"Aruba",
	"aruñe",
	"aruño",
	"aruñé",
	"aruñó",
	"aréis",
	"asees",
	"aseos",
	"asiló",
	"asiré",
	"asolo",
	"aséis",
	"asían",
	"asías",
	"atoja",
	"atojo",
	"atojá",
	"atojó",
	"avale",
	"avara",
	"azoté",
	"aérea",
	"bacán",
	"bagas",
	"bagás",
	"bajas",
	"bajás",
	"balas",
	"bares",
	"basca",
	"bascá",
	"baste",
	"basté",
	"bates",
	"batís",
	"bayas",
	"bañes",
	"bañés",
	"bebed",
	"bebes",
	"bebés",
	"besen",
	"beses",
	"besos",
	"besés",
	"betas",
	"bodas",
	"bojar",
	"bojas",
	"bojos",
	"bojás",
	"bolar",
	"bondi",
	"bonos",
	"borre",
	"borré",
	"botad",
	"botan",
	"botas",
	"boten",
	"botes",
	"botás",
	"botés",
	"bruta",
	"bríos",
	"bulas",
	"buses",
	"caceo",
	"cagas",
	"cagás",
	"cajas",
	"callo",
	"calló",
	"calme",
	"calmé",
	"campó",
	"canas",
	"canes",
	"cansa",
	"cansá",
	"capas",
	"capes",
	"cappa",
	"capás",
	"capés",
	"cargó",
	"caros",
	"casan",
	"casas",
	"casca",
	"cascá",
	"cascó",
	"casos",
	"Catar",
	"cause",
	"causé",
	"cavas",
	"cavos",
	"cazan",
	"cazas",
	"cazos",
	"caída",
	"caído",
	"cañas",
	"cañeo",
	"cañás",
	"cañís",
	"ceded",
	"cedes",
	"cedés",
	"cefos",
	"celes",
	"cenas",
	"cepas",
	"ceras",
	"cercó",
	"cerdo",
	"ceros",
	"cerrá",
	"cerró",
	"chefs",
	"Chile",
	"China",
	"chiís",
	"chocó",
	"chuzá",
	"ciega",
	"cines",
	"clava",
	"clavá",
	"clavó",
	"clubs",
	"coces",
	"cocés",
	"codeo",
	"coged",
	"cogen",
	"coger",
	"coges",
	"cogés",
	"cogía",
	"cojas",
	"cojos",
	"cojás",
	"colas",
	"coles",
	"colás",
	"colón",
	"coman",
	"comed",
	"comes",
	"comés",
	"conos",
	"copas",
	"copos",
	"copás",
	"coral",
	"coras",
	"Corea",
	"corea",
	"coreá",
	"corra",
	"corre",
	"corro",
	"corré",
	"corrí",
	"corsa",
	"cosas",
	"coses",
	"costó",
	"cosás",
	"cosés",
	"coños",
	"creas",
	"crees",
	"creme",
	"cremé",
	"creés",
	"croar",
	"cruje",
	"críen",
	"cubas",
	"cucos",
	"cuida",
	"cuide",
	"cuidá",
	"cuidé",
	"culos",
	"culta",
	"cunas",
	"cunás",
	"cural",
	"curdo",
	"cures",
	"curio",
	"cursó",
	"curés",
	"cuñas",
	"cuñás",
	"dagas",
	"datos",
	"debas",
	"debed",
	"debes",
	"debés",
	"dedos",
	"densa",
	"dijes",
	"diles",
	"doman",
	"domas",
	"domes",
	"domos",
	"domás",
	"domés",
	"donan",
	"donas",
	"dones",
	"donés",
	"dores",
	"doria",
	"dorio",
	"dotas",
	"dotes",
	"dotás",
	"dotés",
	"drupa",
	"Dubai",
	"Dubái",
	"dudan",
	"dunas",
	"dures",
	"duros",
	"durés",
	"dúhos",
	"echas",
	"eches",
	"echos",
	"echés",
	"edita",
	"editá",
	"eleve",
	"ellos",
	"emana",
	"emaná",
	"emoji",
	"emoyi",
	"emúes",
	"enoja",
	"enojo",
	"enojá",
	"entes",
	"envío",
	"erizo",
	"errar",
	"erres",
	"errés",
	"espiá",
	"estad",
	"estas",
	"euros",
	"evita",
	"evitá",
	"falle",
	"fallé",
	"falos",
	"faltá",
	"ferio",
	"fetos",
	"fijas",
	"fijás",
	"filas",
	"files",
	"filás",
	"firmé",
	"focos",
	"fomes",
	"forcé",
	"forme",
	"fosos",
	"fotos",
	"frías",
	"fugas",
	"fugás",
	"fumes",
	"fumés",
	"Gabón",
	"gafas",
	"galas",
	"Gales",
	"galos",
	"ganes",
	"ganás",
	"ganés",
	"gases",
	"gastó",
	"gatos",
	"genes",
	"gimen",
	"gimes",
	"giras",
	"giros",
	"girás",
	"godas",
	"godos",
	"goles",
	"gorra",
	"grabe",
	"grabé",
	"grave",
	"gravé",
	"grite",
	"gritá",
	"grité",
	"groar",
	"grúas",
	"gurús",
	"güera",
	"habas",
	"habed",
	"hablas",
	"hablá",
	"hablás",
	"habrá",
	"habré",
	"había",
	"hacen",
	"haces",
	"hacés",
	"hacía",
	"hagan",
	"hagas",
	"hagás",
	"Haití",
	"halan",
	"halas",
	"hallo",
	"hallá",
	"halás",
	"harte",
	"harán",
	"harás",
	"haría",
	"hastío",
	"hayan",
	"hayas",
	"hayás",
	"heces",
	"hecha",
	"hecho",
	"hemos",
	"hiero",
	"hijas",
	"hilan",
	"hilos",
	"hinca",
	"hipos",
	"hoces",
	"hocés",
	"hojas",
	"huera",
	"huero",
	"hunas",
	"hunos",
	"hurgo",
	"husos",
	"ibais",
	"ideas",
	"ideás",
	"iglús",
	"India",
	"intis",
	"iréis",
	"irían",
	"irías",
	"isbas",
	"islas",
	"jalón",
	"Japón",
	"jefes",
	"jemal",
	"jemes",
	"jerga",
	"jodas",
	"jodes",
	"jodás",
	"jodés",
	"jonia",
	"joyel",
	"jugos",
	"jujeo",
	"jures",
	"jurés",
	"kanes",
	"Kenia",
	"kunas",
	"kurda",
	"labia",
	"labre",
	"labré",
	"lacra",
	"lados",
	"ladro",
	"ladró",
	"lagos",
	"lamas",
	"lamen",
	"lames",
	"lamás",
	"lamés",
	"lapas",
	"larga",
	"latas",
	"latás",
	"lazan",
	"lazos",
	"legas",
	"legos",
	"lejos",
	"lemas",
	"lenta",
	"leves",
	"levés",
	"leyes",
	"leías",
	"Libia",
	"libia",
	"libré",
	"libró",
	"lides",
	"limas",
	"linda",
	"liras",
	"lises",
	"locas",
	"locha",
	"locos",
	"lomos",
	"lores",
	"loros",
	"losas",
	"losás",
	"loteo",
	"lozas",
	"luces",
	"luche",
	"lucho",
	"luché",
	"luchó",
	"lunas",
	"lusas",
	"lusos",
	"maceo",
	"magos",
	"Maine",
	"malas",
	"males",
	"malos",
	"Malta",
	"malís",
	"mamas",
	"mamás",
	"manas",
	"manca",
	"mancá",
	"mancó",
	"manda",
	"manos",
	"manás",
	"mapas",
	"marcó",
	"mares",
	"Marín",
	"masco",
	"mases",
	"masés",
	"matas",
	"matás",
	"mayas",
	"mayás",
	"mazos",
	"mañas",
	"meaba",
	"mecen",
	"meces",
	"mecés",
	"menes",
	"mentá",
	"menés",
	"menús",
	"meros",
	"mesas",
	"mesen",
	"meses",
	"mesás",
	"mesés",
	"metas",
	"metes",
	"metás",
	"mezas",
	"mezás",
	"midas",
	"midás",
	"migro",
	"miles",
	"minas",
	"mines",
	"minás",
	"minés",
	"miras",
	"miren",
	"mires",
	"mirás",
	"misad",
	"misas",
	"mista",
	"mistá",
	"misás",
	"mitos",
	"modas",
	"modos",
	"mofes",
	"mofés",
	"mojar",
	"mojas",
	"mojos",
	"mojás",
	"molas",
	"moles",
	"molás",
	"molés",
	"monas",
	"monos",
	"monté",
	"montó",
	"moras",
	"mores",
	"moros",
	"morro",
	"morás",
	"morés",
	"Moscú",
	"moved",
	"mozas",
	"moños",
	"mucas",
	"mucos",
	"mudas",
	"mudás",
	"mueve",
	"mugen",
	"muges",
	"mugid",
	"mugió",
	"mugís",
	"mujan",
	"mujas",
	"mulas",
	"multe",
	"multá",
	"multé",
	"muros",
	"musás",
	"nabos",
	"nadas",
	"nades",
	"nadés",
	"Nauru",
	"Naurú",
	"naves",
	"nazis",
	"necia",
	"Nepal",
	"niños",
	"nomos",
	"nubes",
	"nucas",
	"nudas",
	"nudos",
	"nulas",
	"nulos",
	"Níger",
	"obras",
	"odias",
	"odios",
	"ogros",
	"ollas",
	"omaní",
	"ombús",
	"ondas",
	"onzas",
	"opera",
	"operá",
	"orcas",
	"orden",
	"ornan",
	"oseas",
	"oseás",
	"otras",
	"ovulo",
	"ovuló",
	"pacas",
	"pacen",
	"pacés",
	"pajas",
	"pajes",
	"palas",
	"palme",
	"palmá",
	"palmé",
	"palos",
	"palpa",
	"panes",
	"papúa",
	"papús",
	"paras",
	"parda",
	"paren",
	"pares",
	"parta",
	"partí",
	"parás",
	"París",
	"parís",
	"pasas",
	"pasen",
	"pases",
	"pasás",
	"pasés",
	"patos",
	"pañal",
	"pecas",
	"peces",
	"pedos",
	"pegas",
	"pegue",
	"penan",
	"penas",
	"penda",
	"pende",
	"penen",
	"penes",
	"pensá",
	"pensé",
	"penás",
	"penés",
	"peras",
	"perdí",
	"peros",
	"pesad",
	"pesas",
	"pescá",
	"pesen",
	"peses",
	"pesos",
	"pesás",
	"pesés",
	"petas",
	"petás",
	"peáis",
	"peñas",
	"pican",
	"pidas",
	"pides",
	"pidás",
	"pines",
	"pipas",
	"pisad",
	"pises",
	"planta",
	"plena",
	"pleno",
	"pobló",
	"pocas",
	"pocos",
	"podas",
	"poded",
	"poder",
	"podes",
	"podrá",
	"podré",
	"podáis",
	"podás",
	"podés",
	"podía",
	"poned",
	"ponen",
	"poner",
	"pones",
	"ponga",
	"ponés",
	"ponía",
	"porfa",
	"posee",
	"posen",
	"poses",
	"poseé",
	"posos",
	"posés",
	"potos",
	"pozos",
	"prado",
	"preña",
	"preño",
	"preñá",
	"preñó",
	"pueda",
	"puede",
	"puedo",
	"pujan",
	"pujas",
	"pujen",
	"pujás",
	"pulen",
	"pumas",
	"puras",
	"purgá",
	"puros",
	"putas",
	"Qatar",
	"queme",
	"quemá",
	"quemé",
	"queré",
	"quise",
	"quiso",
	"Quito",
	"quito",
	"quitó",
	"rabiá",
	"rabos",
	"rabón",
	"ramos",
	"rapas",
	"rapás",
	"rasco",
	"raspá",
	"ratas",
	"ratos",
	"raéis",
	"reces",
	"recés",
	"redes",
	"rejas",
	"remos",
	"rento",
	"rentá",
	"rentó",
	"reses",
	"reste",
	"resté",
	"restó",
	"retes",
	"retos",
	"retés",
	"reyes",
	"rezan",
	"rezas",
	"rezás",
	"reúna",
	"rices",
	"rifas",
	"rimas",
	"rimen",
	"rimes",
	"rimás",
	"rinda",
	"roban",
	"rocas",
	"rodas",
	"rodás",
	"rojas",
	"rojos",
	"romas",
	"romos",
	"rones",
	"rotas",
	"rotos",
	"rotás",
	"rubís",
	"rugen",
	"ruges",
	"rugió",
	"rugís",
	"rujan",
	"runas",
	"rusas",
	"Rusia",
	"rusos",
	"ruñas",
	"ruñás",
	"sabia",
	"sabía",
	"sacan",
	"sacas",
	"sacos",
	"sajón",
	"salga",
	"salgo",
	"salgá",
	"salgó",
	"salta",
	"saltá",
	"saltó",
	"salva",
	"salís",
	"Samoa",
	"sanad",
	"sanas",
	"sanás",
	"sapos",
	"saudí",
	"sañas",
	"sedes",
	"sedés",
	"sentá",
	"senté",
	"sentó",
	"sepas",
	"seres",
	"seria",
	"seriá",
	"serró",
	"serán",
	"serás",
	"sería",
	"setas",
	"señás",
	"siega",
	"siego",
	"sigan",
	"Siria",
	"siria",
	"siseo",
	"soban",
	"sobas",
	"sobes",
	"sobés",
	"soles",
	"solés",
	"solía",
	"sonad",
	"sonar",
	"sonás",
	"soñad",
	"soñar",
	"soñás",
	"soñés",
	"subas",
	"subes",
	"sucia",
	"sucre",
	"sudan",
	"sudar",
	"sudas",
	"Sudán",
	"sudás",
	"suela",
	"suena",
	"suene",
	"sueno",
	"sueña",
	"sueñe",
	"sueño",
	"Suiza",
	"suiza",
	"sumas",
	"sumás",
	"supón",
	"sushi",
	"sáxeo",
	"súper",
	"tabús",
	"tacos",
	"talas",
	"talás",
	"talés",
	"tapas",
	"tapes",
	"tapás",
	"tapés",
	"tardé",
	"Tejas",
	"tejas",
	"temas",
	"temen",
	"temes",
	"temás",
	"temés",
	"tened",
	"tenga",
	"tengo",
	"tenia",
	"tensa",
	"tensá",
	"tensó",
	"tenés",
	"tenía",
	"terca",
	"terse",
	"tersé",
	"testá",
	"tetar",
	"tetas",
	"tetás",
	"Texas",
	"teñía",
	"tiene",
	"tipos",
	"tiras",
	"tiros",
	"tirás",
	"tisús",
	"titán",
	"tocás",
	"togas",
	"togás",
	"tomad",
	"toman",
	"tomas",
	"tomes",
	"tomás",
	"Tonga",
	"tonos",
	"tonta",
	"topos",
	"torpe",
	"tosed",
	"traed",
	"traen",
	"traer",
	"traes",
	"tragá",
	"trajo",
	"traés",
	"traía",
	"tríos",
	"tumbá",
	"tólar",
	"Túnez",
	"untes",
	"unías",
	"urdas",
	"urnas",
	"usaos",
	"usate",
	"uséis",
	"uñoso",
	"vacan",
	"vacas",
	"vagas",
	"vagos",
	"vagás",
	"valga",
	"valgo",
	"vamos",
	"vasca",
	"vasta",
	"vates",
	"vayan",
	"vayas",
	"vayás",
	"veces",
	"vecés",
	"vedas",
	"veles",
	"velos",
	"velés",
	"vemos",
	"venas",
	"vendé",
	"verás",
	"veréis",
	"vería",
	"vetas",
	"veían",
	"veías",
	"vidas",
	"viera",
	"vigas",
	"vinos",
	"vires",
	"vivás",
	"volar",
	"volás",
	"votad",
	"votan",
	"votas",
	"voten",
	"votes",
	"votos",
	"votás",
	"votés",
	"vudús",
	"vídeo",
	"wikis",
	"wones",
	"yates",
	"yemas",
	"Yemen",
	"yendo",
	"yenes",
	"yesca",
	"yogur",
	"yugos",
	"zacas",
	"zarca",
	"zares",
	"zetas",
	"zonas",
	"zorro",
	"zulús",
	"zurda",
	"zurro",
	"ácida",
	"ácido",
	"ácima",
	"ácimo",
	"áfila",
	"áfilo",
	"ámbar",
	"ánima",
	"ápoda",
	"ápodo",
	"árabe",
	"árbol",
	"árida",
	"árido",
	"ática",
	"ático",
	"átomo",
	"átona",
	"átono",
	"áurea",
	"áureo",
	"ávara",
	"ávaro",
	"ávida",
	"ávido",
	"Ébola",
	"épale",
	"épica",
	"épico",
	"época",
	"ética",
	"ético",
	"éxito",
	"ícono",
	"ígnea",
	"ígneo",
	"ñames",
	"ñutas",
	"ñutos",
	"ñutás",
	"óbolo",
	"ócrea",
	"óhmica",
	"óhmico",
	"ópera",
	"ópimo",
	"órale",
	"óseas",
	"óseos",
	"ótica",
	"ótico",
	"óvida",
	"óvido",
	"óvolo",
	"újule",
	"única",
	"único",
	"úrica",
	"úrico",
	"úsate",
	"úsese",
];

export default words;