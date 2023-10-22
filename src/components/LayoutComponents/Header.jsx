'use client';

import React from "react";

function Header(props) {

     const HSThemeAppearance = {
          init() {
              const defaultTheme = 'default'
              let theme = localStorage.getItem('hs_theme') || defaultTheme
      
              if (document.querySelector('html').classList.contains('dark')) return
              this.setAppearance(theme)
          },
          _resetStylesOnLoad() {
              const $resetStyles = document.createElement('style')
              $resetStyles.innerText = `*{transition: unset !important;}`
              $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
              document.head.appendChild($resetStyles)
              return $resetStyles
          },
          setAppearance(theme, saveInStore = true, dispatchEvent = true) {
              const $resetStylesEl = this._resetStylesOnLoad()
      
              if (saveInStore) {
                  localStorage.setItem('hs_theme', theme)
              }
      
              if (theme === 'auto') {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
              }
      
              document.querySelector('html').classList.remove('dark')
              document.querySelector('html').classList.remove('default')
              document.querySelector('html').classList.remove('auto')
      
              document.querySelector('html').classList.add(this.getOriginalAppearance())
      
              setTimeout(() => {
                  $resetStylesEl.remove()
              })
      
              if (dispatchEvent) {
                  window.dispatchEvent(new CustomEvent('on-hs-appearance-change', {detail: theme}))
              }
          },
          getAppearance() {
              let theme = this.getOriginalAppearance()
              if (theme === 'auto') {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
              }
              return theme
          },
          getOriginalAppearance() {
              const defaultTheme = 'default'
              return localStorage.getItem('hs_theme') || defaultTheme
          }
      }
      HSThemeAppearance.init()
      
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
              HSThemeAppearance.setAppearance('auto', false)
          }
      })
      
      window.addEventListener('load', () => {
          const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]')
          const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]')
      
          $clickableThemes.forEach($item => {
              $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item))
          })
      
          $switchableThemes.forEach($item => {
              $item.addEventListener('change', (e) => {
                  HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')
              })
      
              $item.checked = HSThemeAppearance.getAppearance() === 'dark'
          })
      
          window.addEventListener('on-hs-appearance-change', e => {
              $switchableThemes.forEach($item => {
                  $item.checked = e.detail === 'dark'
              })
          })
      })

     return (
          <>
               <header class="flex  sticky top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
                    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                         <div class="flex items-center justify-between">
                              <a class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" href="#">
                                   <div style={{
                                        "background-image": "url('https://ui-avatars.com/api/?name=A+M&color=FFFFFF&background=09090b')",
                                   }} class="fi-avatar bg-cover bg-center h-9 w-9 fi-user-avatar "></div>
                                   {props.title}
                              </a>
                              <div class="sm:hidden">
                                   <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
                                        <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                        <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                   </button>
                              </div>
                         </div>

                         <div id="navbar-image-and-text-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                              
                              <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                              <a class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="#!" data-hs-theme-click-value="dark">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                                        </svg>
                                   </a>
                                   <a class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="#!" data-hs-theme-click-value="light">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                        </svg>
                                   </a>
                                   <a class="font-medium text-blue-500" href="#" aria-current="page">Calculadoras</a>
                                   <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">{props.subtitle}</a>
                                   <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">{props.subtitle}</a>
                                   <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">{props.subtitle2}</a>
                                   <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">acercade</a>
                              </div>
                         </div>
                    </nav>
               </header>




          </>
     );
}

export default Header;

