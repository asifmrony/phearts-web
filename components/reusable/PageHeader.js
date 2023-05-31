import React from 'react'

export default function PageHeader({ subtitle, title, background }) {
    const bg = background === 'blue' ? 'bg-themeblue' : background === 'green' ? 'bg-themegreen' : 'page-header__bg'
    return (
        <div className={`text-center py-32 ${bg}`}>
            <p className='text-sm uppercase text-blackshadow mb-2'>{subtitle}</p>
            <h2 className='font-heading text-white uppercase'>{title}</h2>
        </div>
    )
}
