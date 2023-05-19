import { Inter, Poppins } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const poppins = Poppins({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-poppins'
})

export const poppinsBold = Poppins({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-poppins'
})