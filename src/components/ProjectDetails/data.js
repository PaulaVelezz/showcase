import IMGP1 from '../../assets/Mp1.webp';
import IMGP2 from '../../assets/Mp2.webp';
import IMGP3 from '../../assets/Mp3.webp';
import IMGP4 from '../../assets/Mp4.webp';
import BG2 from '../../assets/BG2.webp';
import BG3 from '../../assets/BG3.webp';
import BG4 from '../../assets/BG4.webp';
import P11 from '../../assets/p1_1.webp';
import P12 from '../../assets/p1_2.webp';
import P13 from '../../assets/p1_3.webp';
import P14 from '../../assets/p1_4.webp';
import P21 from '../../assets/p2_1.webp';
import P22 from '../../assets/p2_2.webp';
import P23 from '../../assets/p2_3.webp';
import P24 from '../../assets/p2_4.webp';
import P31 from '../../assets/p3_1.webp';
import P32 from '../../assets/p3_2.webp';
import P33 from '../../assets/p3_3.webp';
import P34 from '../../assets/p3_4.webp';
import P41 from '../../assets/p4_1.webp';
import P42 from '../../assets/p4_2.webp';
import P43 from '../../assets/p4_3.webp';
import P44 from '../../assets/p4_4.webp';


const projects = [
    {
        id: 1,
        title: 'EduClass',
        categories: ['Web Development'],
        desc: 'Development of an educational management platform. One of the main purposes of the application is to optimize the communication and monitoring processes between the institution and teachers with students. Providing transparency, comfort and immediacy to users.' ,
        tags: ['HTML5', 'JavaScript', 'React.js', 'Vite.js', 'NextUI', 'TailwindCSS', 'Axios', 'Formik', 'YUP', 'React-Router-Dom', 'JWT', 'react-simple-chatbot'],
        img: IMGP1,
        BGimg: IMGP1,
        pageDesc:'Educational management platform that optimizes communication and monitoring processes between the institution, teachers and students. Providing transparency, comfort and immediacy to users. With this tool, it is possible to overcome the limitations present in traditional communication, reducing incoherent messages and loss of information.',
        bullets: [
            'Section for monitoring attendance, absences and withdrawals, with their respective metrics, in addition to having a section dedicated to uploading certificates to justify absences.',
            'Section of filtered notifications of a general type (involving the entire institution) and by current membership course.',
            'A notification section about school activities or events, the requirements to attend them, and also have a way to reject or confirm authorizations if necessary.',
            'Tracking section for academic grades filtered by subjects.',
            'School calendar that integrates course schedules, modifications to them and school activities or events.'
        ],
        imgOne: P11, 
        imgTwo: P12, 
        imgThree: P13, 
        imgFour: P14,
    },
    {
        id: 2,
        title: 'Reparame',
        categories: ['Web Development'],
        desc: 'Development of a WebApp that connects service providers with clients in real time, is an innovative project aimed at promoting the inclusion of manual and technical jobs in the digitalized era. With a focus on digitalization and connectivity, this application promotes accessibility and convenience by providing an easy and quick way to find help for home tasks.',
        tags: ['HTML5', 'CSS3', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'Axios', 'JWT', 'Redux', 'Vercel', 'Figma', 'Trello', 'Slack'],
        img: IMGP2,
        BGimg: BG2,
        pageDesc:'A WebApp that connects reliable service providers with clients in real time, offering quick solutions to home problems. Reparame offers a variety of services from gas fitters and electricians to painters, ready to address your needs. Additionally, a positive and safe experience is guaranteed through a rating and comment system.',
        bullets: [
            'Filtering services by category, budget range and rating ranking.',
            'Review system to qualify verified providers.',
            'A history of tickets in progress, completed and canceled, with all the necessary data to quickly identify them.',
        ],
        imgOne: P21, 
        imgTwo: P22, 
        imgThree: P23, 
        imgFour: P24,
    },
    {
        id: 3,
        title: 'Learn With Me',
        categories: ['Web Development'],
        desc: 'Development of a virtual learning platform, with content adapted according to the users type of cognitive learning. Providing a highly interactive and personalized learning experience.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Vercel', 'Figma', 'Trello', 'Miro', 'Slack'],
        img: IMGP3,
        BGimg: BG3,
        pageDesc:'Development of a virtual learning platform, which has adapted and specialized content according to the users type of cognitive learning. Providing a highly interactive and personalized learning experience. In this way, a successful incorporation of knowledge is guaranteed.',
        bullets: [
            'It has an onboarding section of the application with an exhaustive form so that, according to what the user answers, it shows what type of cognitive learning is most likely.',
            'Section to view all the courses the user is taking and their progress.',
            'Section with a roadmap designed to easily visualize the contents of each course offered.',
            'Dashboard section where the user can view from the progress of each course to upcoming deadlines.',
        ],
        imgOne: P31, 
        imgTwo: P32, 
        imgThree: P33, 
        imgFour: P34,
    },
    {
        id: 4,
        title: 'Club Focaccia',
        categories: ['UI Design', 'Web Development'],
        desc: 'Development of a landing page. Designed to order food quickly, and at the same time very intuitive for the customer user. Providing you with all the information necessary for a purchase process.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux Toolkit', 'Vite.js', 'Styled-Components', 'Figma'],
        img: IMGP4,
        BGimg: BG4,
        pageDesc:'Development of a landing page for a store specialized in the sale of focaccias. With a highly intuitive user experience and a modern user interface adapted for all devices.', 
        bullets: [
            'It has order customization options to adapt to customer preferences.',
            'Mobile optimization for a seamless shopping experience on any screen size.',
            'Customer opinion section with ratings, offering the user a more informed purchase.',
            'It has filtering by product category. streamlining the purchasing process.',
        ],
        imgOne: P41, 
        imgTwo: P42, 
        imgThree: P43, 
        imgFour: P44,
    },
    // {
    //     id: 5,
    //     title: 'The Blessed Bean',
    //     categories: ['UI Design', 'Web Development'],
    //     desc: 'Desarrollo de tienda e-commerce.',
    //     tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux Toolkit','Formik', 'YUP', 'Vite.js', 'Styled-Components'],
    //     img: IMGP5,
    //     BGimg: BG5,
    //     pageDesc:'Desarrollo de una tienda e-commerce especializada en la venta de una amplia variedad de cafes. Interfaz minimalista y moderna.',
    //     bullets: [
    //         'bullet número 1',
    //         'bullet número 2',
    //         'bullet número 3',
    //         'bullet número 4',
    //     ]
    // },
];

export default projects;