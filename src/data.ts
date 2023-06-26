import { Data, Job, Project } from "./types";

const aboutInfo = "Técnico en informática. \n Trabajando de manera profesional desde septiembre 2022, específicamente en el área fintech.\nMis fuertes: adaptabilidad e iniciativa.\nSi bien ahora me desempeño como fullstack, me gustaría poder especializarme en el frontend, actualmente mi tecnología fuerte es React.\nMe encanta involucrarme en proyectos desafiantes que me impulsen a aprender cosas nuevas.\nContáctame!";

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
const projects: Project[] = [
    {
        deploy: "https://maquetado-meli-detalles-producto.vercel.app/",
        description: "Copia de la UI de la pantalla de un producto de E-Commerce Mercado Libre",
        imgPreview: "meli_ss.png",
        repo: "https://github.com/dbdv/maquetado-meli-detalles-producto",
        stack: ["React", "CSS", "HTML"],
        title: "Mercado Libre UI"
    },
    {
        description: "Aplicación fullstack hecha con Node, usando Express y PUG para las templates. La misma cuenta con un sistema de gestión interno de usuarios, manejo de fechas y horarios, funcionalidades por tipo de usuario y conexión a una base de datos MySQL.",
        imgPreview: "attendances.png",
        repo: "https://github.com/dbdv/to-do_using_pug",
        stack: ["Node", "Express", "MySQL", "PUG", "CSS", "HTML"],
        title: "Gestión de asistencias universitaria"
    },
    {
        description: "La típica ToDo, pero encarada como una server app.",
        imgPreview: "todo_db.png",
        repo: "https://github.com/dbdv/to-do_using_pug",
        stack: ["Node", "Express", "MySQL", "PUG", "CSS", "HTML"],
        title: "La típica ToDo app... pero con Node!"
    },
    {
        title: "Reto 30 días de código @Goncy Pozzo",
        imgPreview: "adviency.png",
        repo: "https://github.com/dbdv/adviency_10",
        deploy: "https://lista-de-regalos-adviency-10.vercel.app/",
        stack: ["React", "CSS", "HTML"],
        description: "Este proyecto forma parte del reto de 30 días de código de Goncy Pozzo. La idea era rehacer la misma aplicación desde 0 durante 30 días e ir agregando funcionalidades de manera incremental."
    },
]

export const data: Data = {
    about: aboutInfo,
    experience: jobs,
    projects: projects,
    stack: {
        laguanges: [
            {
                laguange_name: "angular", 
                icon_url: "angular-icon-96.png"
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