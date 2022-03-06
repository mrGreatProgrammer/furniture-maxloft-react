import React from 'react'
import AboutCompany from '../AbouyCompany/AboutCompany'
import Catalog from '../Catalog/Catalog'
import Contacts from '../Contacts/Contacts'
import OurAdventages from '../OurAdventages/OurAdventages'
import './Main.css'

function Main() {
  return (
    <main>
        <AboutCompany />
        <Catalog />
        <OurAdventages />
        <Contacts />
    </main>
  )
}

export default Main