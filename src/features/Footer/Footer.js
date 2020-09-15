import React from 'react'
import './Footer.scss'

import { GridContainer } from '../../base'

function Footer({}) {
  return (
    <footer className="mt-xl ds-footer">
      <GridContainer gridSize={2} className="justify-content-center">
        <div className="pl-10 display-flex align-items-center">
          Copyright © {new Date().getFullYear()} Wisconsin School Music Association
        </div>
        <div className="pr-10  display-flex align-items-center justify-content-flex-end">
          <a href="">wsmamusic.org</a>
        </div>
      </GridContainer>
    </footer>
  )
}

export default Footer
