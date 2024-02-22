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
        "slot": "5:30 - 6:15 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "5:45 - 6:30 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:00 - 6:45 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:15 - 7:00 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:30 - 7:15 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "6:45 - 7:30 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:00 - 7:45 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:15 - 8:00AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:30 - 8:15 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "7:45 - 8:30 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:00 - 8:45 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:15 - 9:00 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:30 - 9:15 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "8:45 - 9:30 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:00 - 9:45 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:15 - 10:00 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:30 - 10:15 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "9:45 - 10:30 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:00 - 10:45 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:15 - 11:00 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:30 - 11:15 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "10:45 - 11:30 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "11:00 - 11:45 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "11:15 - 12:00 AM",
        "timeOfDay": "Morning"
    },
    {
        "slot": "12:00 - 12:45 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "12:15 - 1:00 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "12:30 - 1:15 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "12:45 - 1:30 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:00 - 1:45 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:15 - 2:00 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:30 - 2:15 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "1:45 - 2:30 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:00 - 2:45 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:15 - 3:00 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:30 - 3:15 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "2:45 - 3:30 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:00 - 3:45 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:15 - 4:00 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:30 - 4:15 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "3:45 - 4:30 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:00 - 4:45 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:15 - 5:00 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:30 - 5:15 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "4:45 - 5:30 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "5:00 - 5:45 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "5:15 - 6:00 PM",
        "timeOfDay": "Afternoon"
    },
    {
        "slot": "5:30 - 6:15 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "5:45 - 6:30 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:00 - 6:45 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:15 - 7:00 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:30 - 7:15 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "6:45 - 7:30 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:00 - 7:45 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:15 - 8:00 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:30 - 8:15 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "7:45 - 8:30 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:00 - 8:45 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:15 - 9:00 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:30 - 9:15 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "8:45 - 9:30 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:00 - 9:45 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:15 - 10:00 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:30 - 10:15 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "9:45 - 10:30 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:00 - 10:45 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:15 - 11:00 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:30 - 11:15 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "10:45 - 11:30 PM",
        "timeOfDay": "Evening"
    },
    {
        "slot": "11:00 - 11:45 PM",
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