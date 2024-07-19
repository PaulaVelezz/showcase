import IMGP1 from '../../assets/Mp1.webp';
import IMGP2 from '../../assets/Mp2.webp';
import IMGP3 from '../../assets/Mp3.webp';
import IMGP4 from '../../assets/Mp4.webp';
import IMGP5 from '../../assets/Mp5.webp';
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
import P51 from '../../assets/p5_1.webp';
import P52 from '../../assets/p5_2.webp';
import P53 from '../../assets/p5_3.webp';
import P54 from '../../assets/p5_4.webp';


const projects = [
    {
        id: 0,
        title: 'Saas Landing Page',
        categories: ['Web Development'],
        desc: 'Development of a landing page for a SaaS product. By prioritizing user experience, I ensure that the landing page not only showcases the products value but also guides visitors seamlessly toward conversion, ultimately driving success for the SaaS product.',
        tags: ['HTML5', 'JavaScript', 'React.js', 'Vite.js', 'TailwindCSS', 'Framer-Motion', 'React-Router-Dom', 'prop-types', 'Figma'],
        img: IMGP5,
        BGimg: IMGP5,
        pageDesc:'Development of a landing page, with a highly intuitive user experience and a modern user interface adapted for all devices. In this way, a successful incorporation of knowledge is guaranteed.',
        bullets: [
            'Clean and Efficient Code: The landing page design is built on a foundation of clean, efficient code. This ensures optimal performance, fast loading times, and a smooth user experience across all devices.',
            'User-Centered Design: By meticulously crafted the pages layout and flow with the user in mind. The intuitive navigation, clear calls to action, and user-friendly interface make it easy for visitors to find what they need.',
            'Responsive and Adaptive: The landing page is designed to be responsive and adaptive to all devices. This ensures that it can be used on any device and any screen size.',
            'Focus on optimization: It is optimized to ensure that it loads quickly and efficiently across all devices.',
        ],
        imgOne: P51, 
        imgTwo: P52, 
        imgThree: P53, 
        imgFour: P54,
    },
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
        desc: 'Development of a WebApp that connects service providers with clients in real time. Bridging the gap between digitalization and traditional trades, making it easy and convenient to find help for any home task, from plumbing to painting.',
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
        desc: 'Development of a virtual learning platform, with a focus on providing a learning environment where the content adapts to the users type of cognitive learning, making learning engaging, interactive, effective, and truly personalized.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Vercel', 'Figma', 'Trello', 'Miro', 'Slack'],
        img: IMGP3,
        BGimg: BG3,
        pageDesc:'Development of a virtual learning platform, which offers a tailored learning paths and content adapt to individual learning styles, ensuring optimal understanding and engagement. Utilizing adaptive learning technology, it caters to visual, auditory, kinesthetic, and other learning styles, maximizing comprehension.',
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
        desc: 'Development of a landing page. Designed to simplify the food ordering process, this landing page offers an intuitive and user-friendly experience. With clear information about menu items, pricing, and delivery options, customers can easily make informed decisions.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux Toolkit', 'Vite.js', 'Styled-Components', 'Figma'],
        img: IMGP4,
        BGimg: BG4,
        pageDesc:'Development of a landing page for a store specialized in the sale of focaccias. Enjoy a smooth and efficient food ordering experience, designed to eliminate confusion and ensure a stress-free purchase.', 
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