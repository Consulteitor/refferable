/**
 * Sectores para las páginas programáticas del checker.
 * Derivados de los targetProfiles de la home: SaaS/tecnología B2B, servicios
 * profesionales y consultoría, formación, ecommerce especializado, salud,
 * finanzas y legal.
 */
export type Sector = {
  slug: string;
  name: string;
  /** Categoría precargada en el formulario del checker. */
  defaultCategory: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  exampleQuestions: string[];
  stake: string;
};

export const sectors: Sector[] = [
  {
    slug: "saas-b2b",
    name: "SaaS y tecnología B2B",
    defaultCategory: "software B2B",
    title: "¿Qué dice ChatGPT de tu SaaS? Compruébalo gratis",
    description:
      "Comprueba si ChatGPT, Perplexity y otros motores de IA mencionan tu SaaS cuando un comprador pregunta por soluciones de tu categoría. Test gratuito.",
    h1: "¿Qué dice la IA de tu SaaS?",
    intro:
      "En SaaS el comprador llega a la demo con una lista corta ya hecha, y cada vez más esa lista la escribe una IA. Si cuando alguien pregunta por herramientas de tu categoría el modelo cita a tus competidores y a ti no, pierdes el deal antes de saber que existía.",
    exampleQuestions: [
      "¿Cuáles son las mejores herramientas de [tu categoría] para pymes?",
      "¿Qué alternativas hay a [tu competidor principal]?",
      "¿Qué software de [tu categoría] me recomiendas para una empresa de 50 empleados?",
    ],
    stake:
      "Ciclos de compra largos, varios decisores y mucha fase de investigación: el terreno donde una recomendación de IA pesa más.",
  },
  {
    slug: "consultoria",
    name: "Servicios profesionales y consultoría",
    defaultCategory: "consultoría",
    title: "¿Qué dice ChatGPT de tu consultora? Compruébalo gratis",
    description:
      "Comprueba si la IA menciona tu consultora o despacho profesional cuando alguien pregunta a quién contratar. Test gratuito con preguntas reales de cliente.",
    h1: "¿Qué dice la IA de tu consultora?",
    intro:
      "En servicios profesionales la confianza es el producto. Cuando un directivo pregunta a ChatGPT qué consultora contratar y el modelo responde con tres nombres, esos tres nombres tienen una reunión y tú no. No hace falta que la IA te recomiende: basta con que ni siquiera te conozca.",
    exampleQuestions: [
      "¿Qué consultoras de [tu especialidad] son más recomendables en España?",
      "¿A quién puedo contratar para [el problema que resuelves]?",
      "¿Qué opiniones hay sobre [tu firma]?",
    ],
    stake:
      "Si tu negocio vive de la reputación, lo que un modelo de lenguaje dice de ti ya es parte de esa reputación.",
  },
  {
    slug: "formacion",
    name: "Formación",
    defaultCategory: "formación",
    title: "¿Qué dice ChatGPT de tu centro de formación? Compruébalo gratis",
    description:
      "Comprueba si ChatGPT y Perplexity mencionan tu escuela, academia o programa formativo cuando alguien compara dónde estudiar. Test gratuito.",
    h1: "¿Qué dice la IA de tu centro de formación?",
    intro:
      "Elegir dónde formarse es una decisión investigada: se comparan programas, precios, salidas y opiniones. Esa comparación ya empieza muchas veces en una conversación con IA. Si el modelo recomienda otros centros al describir tu especialidad, el alumno llega a tu web con la decisión medio tomada, o no llega.",
    exampleQuestions: [
      "¿Cuál es el mejor máster de [tu especialidad] en España?",
      "¿Qué academias de [tu tema] merecen la pena?",
      "¿[Tu escuela] es buena opción? ¿Qué opiniones tiene?",
    ],
    stake: "Matrículas de miles de euros que se deciden tras semanas de investigación con IA de por medio.",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce especializado",
    defaultCategory: "tienda online especializada",
    title: "¿Qué dice ChatGPT de tu tienda online? Compruébalo gratis",
    description:
      "Comprueba si los motores de IA mencionan tu ecommerce cuando alguien pregunta dónde comprar productos de tu nicho. Test gratuito con preguntas reales.",
    h1: "¿Qué dice la IA de tu tienda online?",
    intro:
      "En ecommerce generalista compites con Amazon y poco más hay que hablar. En ecommerce especializado no: cuando alguien pregunta a la IA dónde comprar material técnico, productos de nicho o marcas concretas, el modelo sí recomienda tiendas específicas. La pregunta es si la tuya está en esa respuesta.",
    exampleQuestions: [
      "¿Dónde comprar [tu tipo de producto] online en España?",
      "¿Qué tiendas de [tu nicho] son fiables?",
      "¿[Tu tienda] es de fiar? ¿Qué opiniones tiene?",
    ],
    stake: "El tráfico de recomendación conversacional convierte mejor que el de búsqueda: llega con la decisión casi hecha.",
  },
  {
    slug: "salud",
    name: "Salud",
    defaultCategory: "clínica o servicio de salud",
    title: "¿Qué dice ChatGPT de tu clínica? Compruébalo gratis",
    description:
      "Comprueba si ChatGPT y Perplexity mencionan tu clínica o servicio de salud cuando un paciente pregunta dónde tratarse. Test gratuito.",
    h1: "¿Qué dice la IA de tu clínica?",
    intro:
      "Los pacientes investigan más que nunca antes de pedir cita: tratamientos, precios, opiniones y a quién acudir. Las IAs responden a esas preguntas con nombres concretos de clínicas y profesionales. En un sector donde la confianza lo es todo, no aparecer — o aparecer mal descrito — tiene coste directo en primeras visitas.",
    exampleQuestions: [
      "¿Cuál es la mejor clínica de [tu especialidad] en [tu ciudad]?",
      "¿Dónde puedo tratarme [el problema que tratas] con garantías?",
      "¿Qué opiniones tiene [tu clínica]?",
    ],
    stake: "Decisiones de alto valor emocional y económico, tomadas tras investigar. Exactamente donde la IA ya participa.",
  },
  {
    slug: "finanzas-legal",
    name: "Finanzas y legal",
    defaultCategory: "servicios financieros o legales",
    title: "¿Qué dice ChatGPT de tu despacho o firma financiera? Compruébalo gratis",
    description:
      "Comprueba si la IA menciona tu despacho de abogados, asesoría o firma financiera cuando alguien pregunta a quién confiar su caso. Test gratuito.",
    h1: "¿Qué dice la IA de tu firma?",
    intro:
      "Nadie contrata un abogado o un asesor financiero sin comparar. Y cada vez más esa comparación empieza preguntando a una IA quién es de fiar para un caso concreto. Los modelos citan despachos y firmas con nombre y apellido. Si describen tu especialidad citando a otros, el cliente ya tiene una lista y tú no estás en ella.",
    exampleQuestions: [
      "¿Qué despacho de [tu especialidad] me recomiendas en [tu ciudad]?",
      "¿Qué asesoría es mejor para [el caso que resuelves]?",
      "¿[Tu firma] es recomendable? ¿Qué se dice de ella?",
    ],
    stake: "Servicios de confianza pura, honorarios altos y clientes que investigan a fondo antes de la primera llamada.",
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
