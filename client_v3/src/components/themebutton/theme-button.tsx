"use client"
import React from 'react'
import $ from 'jquery'

export default function ThemeButton() {
    return (
        <div className='w-[100%] flex justify-end'>
            <button onClick={() => {
            const app = $('#app')
            if (app.hasClass('light-theme')) {
                app.removeClass('light-theme')
                app.addClass('dark-theme')
            } else {
                app.removeClass('dark-theme')
                app.addClass('light-theme')
            }
        }}>
            Dark/Light
        </button>
        </div>
    )
}