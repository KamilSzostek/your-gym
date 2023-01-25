import Regular from '../assets/offer/pricing-cards/regular.png';
import Student from '../assets/offer/pricing-cards/student.png';
import Senior from '../assets/offer/pricing-cards/senior.png';

export interface IPeriod {
    period: string;
    price: string;
}
export interface IPricing {
    type: string;
    icon: string;
    periods: IPeriod[];
}

export const pricing: IPricing[] = [
    {
        type: 'zwykły',
        icon: Regular,
        periods: [{
            period: 'rok',
            price: '100',
        },
        {
            period: 'półroku',
            price: '120',
        },
        {
            period: 'trzy miesiące',
            price: '150'
        }
        ]
    },
    {
        type: 'student',
        icon: Student,
        periods: [{
            period: 'rok',
            price: '80',
        },
        {
            period: 'półroku',
            price: '100',
        },
        {
            period: 'trzy miesiące',
            price: '120'
        }
        ]
    },
    {
        type: 'senior',
        icon: Senior,
        periods: [{
            period: 'rok',
            price: '70',
        },
        {
            period: 'półroku',
            price: '90',
        },
        {
            period: 'trzy miesiące',
            price: '110'
        }
        ]
    }
]