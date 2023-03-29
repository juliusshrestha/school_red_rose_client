import router, { Router } from 'next/router'
import { useEffect, useState } from 'react'

const checkToken = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action

    var now = new Date().getTime()

    var hours = 1 // to clear the localStorage after 1 hour
    // (if someone want to clear after 8hrs simply change hours=8)
    var now = new Date().getTime()
    var setupTime = localStorage.getItem('setupTime')
    if (setupTime == null) {
      localStorage.setItem('setupTime', now)
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now)
      }
      if (!localStorage.getItem('token')) {
        router.push('/pages/login/')
      }
    }
  }
}

export default checkToken
