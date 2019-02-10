import React, { useRef, useEffect } from 'react'
import { Link } from '@reach/router'
import { navigate } from '@reach/router'

const clickListener = event => {
  const {
    defaultPrevented,
    button,
    metaKey,
    altKey,
    ctrlKey,
    shiftKey,
    target: { href },
  } = event
  const shouldNavigate =
    !defaultPrevented &&
    button === 0 &&
    !(metaKey || altKey || ctrlKey || shiftKey)
  if (shouldNavigate) {
    event.preventDefault()
    navigate(href)
  }
}

// @ts-ignore
const DangerousHtml = ({ html, ...props }) => {
  // @ts-ignore
  const ref = useRef()

  useEffect(() => {
    const anchors = ref.current.querySelectorAll('a')
    const processAnchors = op =>
      anchors.forEach(a => {
        const hostname = window ? window.location.hostname : ''
        const isLocal = hostname === a.hostname || !a.hostname.length
        console.log(hostname, a.hostname)
        if (isLocal) a[op]('click', clickListener)
      })
    processAnchors('addEventListener')
    return () => processAnchors('removeEventListener')
  }, [ref.current])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} {...props} />
}
export default DangerousHtml
