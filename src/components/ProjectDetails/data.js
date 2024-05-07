import IMGP1 from '../../assets/Mp1.webp';
import IMGP2 from '../../assets/Mp2.webp';
import IMGP3 from '../../assets/Mp3.webp';
import IMGP4 from '../../assets/Mp4.webp';
import IMGP5 from '../../assets/Mp5.webp';

const projects = [
    {
        id: 1,
        title: 'EduClass',
        categories: ['Web Development'],
        desc: 'Desarrollo de una plataforma de gestión educativa con el fin de optimizar los procesos de comunicación y seguimiento entre la institución y docentes con estudiantes. Brindando transparencia, comodidad e inmediatez a los usuarios.' ,
        tags: ['HTML5', 'CSS3', 'Figma', 'JavaScript', 'React.js', 'Vite.js', 'NextUI', 'TailwindCSS', 'Axios', 'React-Router-Dom', 'JWT'],
        img: IMGP1,
        BGimg: IMGP1,
        pageDesc:'Plataforma de gestión educativa que optimiza los procesos de comunicación y seguimiento entre la institución, docentes y estudiantes. Brindando transparencia, comodidad e inmediatez a los usuarios. Con esta herramienta se logran superar las limitaciones presentes en las comunicación tradicionales, reduciendo mensajes incoherentes y pérdida de información.',
        bullets: [
            'Sección de seguimiento de asistencias, ausencias y retiros, métricas de las mismas, ademas de contar con una sección dedicada a la carga de certificados para justificar ausencias.',
            'Sección de notificaciones filtradas de tipo general (que involucran a toda la institución) y por curso de pertenencia.',
            'Sección de notificaciones de las actividades o eventos escolares, los requisitos para asistir a las mismas, acompañadas por modales para rechazar o confirmar las autorización en caso de ser necesaria.',
            'Sección de seguimiento de las notas académicas filtradas por asignaturas.',
            'Calendario escolar que integra horarios de cursado, modificaciones en los mismos y actividades o eventos escolares.'
        ]
    },
    {
        id: 2,
        title: 'Reparame',
        categories: ['Web Development'],
        desc: 'Desarrollo de una WebApp que conecta a prestadores de servicios con clientes en tiempo real, ofreciendo soluciones rápidas a problemas del hogar.',
        tags: ['HTML5', 'CSS3', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'DaisyUI'],
        img: IMGP2,
        BGimg: IMGP1,
        pageDesc:'lorem lorem lorem lorem lorem',
        bullets: [
            'bullet número 1',
            'bullet número 2',
            'bullet número 3',
            'bullet número 4',
        ]
    },
    {
        title: 'Learn With Me',
        categories: ['Web Development'],
        desc: 'Desarrollo de una plataforma de aprendizaje virtual, con contenido adaptado según el tipo de aprendizaje cognitivo del usuario. Brindando una experiencia de aprendizaje altamente interactiva y personalizada.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TailwindCSS'],
        img: IMGP3,
        BGimg: IMGP1,
        pageDesc:'lorem lorem lorem lorem lorem',
        bullets: [
            'bullet número 1',
            'bullet número 2',
            'bullet número 3',
            'bullet número 4',
        ]
    },
    {
        title: 'E-commerce',
        categories: ['UI Design', 'Web Development'],
        desc: 'Desarrollo de tienda e-commerce.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux Toolkit', 'Vite.js', 'Styled-Components'],
        img: IMGP4,
        BGimg: IMGP1,
        pageDesc:'lorem lorem lorem lorem lorem',
        bullets: [
            'bullet número 1',
            'bullet número 2',
            'bullet número 3',
            'bullet número 4',
        ]
    },
    {
        title: 'E-commerce',
        categories: ['UI Design', 'Web Development'],
        desc: 'Desarrollo de tienda e-commerce.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux Toolkit','Formik', 'YUP', 'Vite.js', 'Styled-Components'],
        img: IMGP5,
        BGimg: IMGP1,
        pageDesc:'lorem lorem lorem lorem lorem',
        bullets: [
            'bullet número 1',
            'bullet número 2',
            'bullet número 3',
            'bullet número 4',
        ]
    },
];

export default projects;