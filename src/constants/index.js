import { File, Collab, AccessAnywhere, Security, Person1, Person2, Person3, Phone, Email, Location, Facebook, Twitter, Instagram } from '../assets'

export const navItems = [
    {
        title: "Features",
        id: "features",
    },
    {
        title: "Team",
        id: "team",
    },
    {
        title: "Sign In",
        id: "sign-in"
    },
]

export const bulletPoints = [
    {
        imgUrl: AccessAnywhere,
        title: "Access your files, anywhere",
        subtitle: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        id: "access"
    },
    {
        imgUrl: Security,
        title: "Security you can trust",
        subtitle: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        id: "security"
    },
    {
        imgUrl: Collab,
        title: "Real-time collaboration",
        subtitle: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        id: "collab"
    },
    {
        imgUrl: File,
        title: "Store any type of file",
        subtitle: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        id: "file"
    }
]

export const testimonials = [
    {
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        imgUrl: Person1,
        name: "Satish Patel",
        job: "Founder & CEO, Huddle",
        quote: "active"
    },
    {
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        imgUrl: Person2,
        name: "Bruce McKenzie",
        job: "Founder & CEO, Huddle",
        quote: ""
    },
    {
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        imgUrl: Person3,
        name: "Iva Boyd",
        job: "Founder & CEO, Huddle",
        quote: ""
    }
]

export const footer = [
    {
        id: "footer", 

        locations: [
            {
                imgUrl: Location,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                id: "location"
            }
        ],

        contacts: [
            {
                imgUrl: Phone,
                text: "+1-543-123-4567",
                id: "phone",
            },
            {
                imgUrl: Email,
                text: "example@fylo.com",
                id: "email",
            }
        ],

        footerLinks1: [
            {
                title: "About Us",
            },
            {
                title: "Jobs",
            },
            {
                title: "Press",
            },
            {
                title: "Blog",
            }
        ],

        footerLinks2: [
            {
                title: "Contact Us",
            },
            {
                title: "Terms",
            },
            {
                title: "Privacy",
            }
        ],
        
        socialIcons: [
            {
                imgUrl: Facebook,
                id: "facebook",
            },
            {
                imgUrl: Twitter, 
                id: "twitter",
            },
            {
                imgUrl: Instagram,
                id: "instagram",
            }
        ],
    }    
]




