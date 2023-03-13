import { Data, Job } from "./types";

const aboutInfo = "Hola  me llamo Daniel, soy un desarrollador web que empezó a conocer este mundillo en el 2020 y pude empezar a desempeñarme profesionalmente como dev en septiembre 2022, específicamente en el área fintech.\nConsidero que mi fuerte es la adaptabilidad y la iniciativa.\nSi bien ahora me desempeño como fullstack, me gustaría poder especializarme en el frontend, mi tecnología fuerte es React.\nMe encanta involucrarme en proyectos desafiantes que me impulsen a aprender cosas nuevas y eso es lo que siempre intento buscar.\nPodés contactarme por cualquiera de mis redes que se ven en la parte superior de la página!";

const jobs: Job[] = [
    {
        title: 'Fullstack developer', 
        since: 'Sep-2022', 
        until: 'Actualidad', 
        implemenented_stack: [
            "Angular", 
            "Nest JS", 
            "SQL Server", 
            "Sass", 
            "Java",
            "Keycloak",
            "Agile",
        ], 
        achievements: [
            'Desarrollo de features para el frontend y backend de una aplicación para usuarios "brokers" destinada a poder operar con Cedears.', 
            'Refactorización de los templates usados por el SSO.', 
            'Mejora en la performance de las consultas a la base de datos.', 
            'Refactorización de procesos del lado del servidor.', 
            'Refactorización de la UI/UX.'
        ], 
        company: "IT Resources",
    }
];

export const data: Data = {
    about: aboutInfo,
    experience: jobs,
    projects: [],
    stack: {
        laguanges: [
            {
                laguange_name: "javascript", 
                icon_url: "javascript-icon-96.png"
            },
            {
                laguange_name: "Node", 
                icon_url: "node-icon-96.png"
            },
            {
                laguange_name: "React", 
                icon_url: "react-icon-480.png"
            },
            {
                laguange_name: "Express", 
                icon_url: "express-icon-100.png"
            },
            {
                laguange_name: "Nest", 
                icon_url: "nest-icon-96.png"
            },
            {
                laguange_name: "CSS 3", 
                icon_url: "css-icon-96.png"
            },
            {
                laguange_name: "HTML 5", 
                icon_url: "html-icon-96.png"
            }
        ],
        techlonogies: [
            {
                technology_name: "SQL Server", 
                icon_url: "sql-server-icon-96.png"
            },
            {
                technology_name: "MySQL", 
                icon_url: "mysql-icon-96.png"
            },
            {
                technology_name: "Git", 
                icon_url: "git-icon-96.png"
            },
            {
                technology_name: "GitLab", 
                icon_url: "gitlab-icon-96.png"
            },
            {
                technology_name: "Github", 
                icon_url: "github-icon-100.png"
            },
            {
                technology_name: "Linux", 
                icon_url: "linux-icon-96.png"
            },
            {
                technology_name: "Bash", 
                icon_url: "bash-icon-96.png"
            }
        ]
    },
}