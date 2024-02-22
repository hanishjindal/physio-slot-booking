import { Jockey_One } from 'next/font/google';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiGooglemaps } from "react-icons/si";

export const MENU_DATA = [
    {
        text: "Home",
        label: "",
        protected: false,
        link: "/"
    },
    {
        text: "About",
        label: "about",
        protected: false,
        link: "/"
    },
    {
        text: "Contact",
        label: "contact",
        protected: false,
        link: "/"
    },
    {
        text: "Portal",
        label: "portal",
        protected: true,
        link: "/portal"
    }
];

export const FILTER = [
    'All',
    'Morning',
    'Afternoon',
    'Evening'
]

export const DAYS = [
    {
        day: "MONDAY",
        label: "monday"
    },
    {
        day: "TUESDAY",
        label: "tuesday"
    },
    {
        day: "WEDNESDAY",
        label: "wednesday"
    },
    {
        day: "THURSDAY",
        label: "thursday"
    },
    {
        day: "FRIDAY",
        label: "friday"
    },
    {
        day: "SATURDAY",
        label: "saturday"
    },
    {
        day: "SUNDAY",
        label: "sunday"
    }
];

export const SCHEDULE = [
    {
        "slot": "5:30 - 6:14 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "5:45 - 6:29 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:00 - 6:44 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:15 - 6:59 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:30 - 7:14 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:45 - 7:29 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:00 - 7:44 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:15 - 7:59 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:30 - 8:14 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:45 - 8:29 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:00 - 8:44 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:15 - 8:59 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:30 - 9:14 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:45 - 9:29 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:00 - 9:44 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:15 - 9:59 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:30 - 10:14 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:45 - 10:29 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:00 - 10:44 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:15 - 10:59 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:30 - 11:14 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:45 - 11:29 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "11:00 - 11:44 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "11:15 - 11:59 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "12:00 - 12:44 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "12:15 - 12:59 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "12:30 - 1:14 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "12:45 - 1:29 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:00 - 1:44 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:15 - 1:59 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:30 - 2:14 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:45 - 2:29 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:00 - 2:44 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:15 - 2:59 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:30 - 3:14 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:45 - 3:29 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:00 - 3:44 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:15 - 3:59 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:30 - 4:14 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:45 - 4:29 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:00 - 4:44 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:15 - 4:59 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:30 - 5:14 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:45 - 5:29 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "5:00 - 5:44 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "5:15 - 5:59 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "5:30 - 6:14 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "5:45 - 6:29 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:00 - 6:44 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:15 - 6:59 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:30 - 7:14 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:45 - 7:29 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:00 - 7:44 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:15 - 7:59 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:30 - 8:14 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:45 - 8:29 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:00 - 8:44 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:15 - 8:59 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:30 - 9:14 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:45 - 9:29 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:00 - 9:44 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:15 - 9:59 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:30 - 10:14 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:45 - 10:29 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:00 - 10:44 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:15 - 10:59 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:30 - 11:14 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:45 - 11:29 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "11:00 - 11:44 PM",
        "timeOfDay": "Evening"
    }
];

export const FOOTER_CONFIG = {
    footerIntro: `YourPhysio is now FixHealth`,
    list: [
    ],
    privacyTerm: [
        {
            title: 'Terms of Service',
            // link: '/terms-of-service'
            link: '/'
        },
        {
            title: 'Privacy Policy',
            // link: '/privacy-policy'
            link: '/'
        },
        {
            title: 'Refund Policy',
            // link: '/refund-policy'
            link: '/'
        },
        {
            title: 'User Guidelines',
            // link: '/user-guidelines'
            link: '/'
        }
    ]

};



export const SOCIAL_LINKS = [
    {
        icon: <BsFacebook />,
        link: ''
    },
    {
        icon: <BsTwitter />,
        link: ''
    },
    {
        icon: <BsInstagram />,
        link: ''
    },
    {
        icon: <BsYoutube />,
        link: ''
    },
    {
        icon: <SiGooglemaps />,
        link: ''
    },
]