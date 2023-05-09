import { jsx } from 'theme-ui'
import React, { useCallback } from 'react'
import Sticky from 'react-stickynode'
import { useStickyState } from '../context/app/app.provider'
import { Waypoint } from 'react-waypoint'
import { useStickyDispatch } from '../context/app/app.provider'
import Header from '../../layouts/components/header/header'
import Footer from '../../layouts/components/footer/footer'
import 'rc-drawer/assets/index.css'
import 'react-modal-video/css/modal-video.min.css'
import 'swiper/swiper-bundle.min.css'
import 'typeface-dm-sans'

export default function Layout({ children }) {
  const isSticky = useStickyState('isSticky')
  const dispatch = useStickyDispatch()

  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [dispatch])

  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [dispatch])

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      setSticky()
    }
    if (currentPosition === 'below') {
      removeSticky()
    }
  }

  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={991}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        // onLeave={setSticky}
        onPositionChange={onWaypointPositionChange}
      />

      <main
        sx={{
          variant: 'layout.main'
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}
