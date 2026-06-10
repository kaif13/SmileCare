import { useEffect } from 'react'
import { Sparkles } from 'lucide-react'

function StartupAnimation({ onComplete }) {
  useEffect(() => {
    document.body.classList.add('startup-active')

    const timer = window.setTimeout(onComplete, 2400)

    return () => {
      window.clearTimeout(timer)
      document.body.classList.remove('startup-active')
    }
  }, [onComplete])

  return (
    <div className="startup" role="status" aria-label="Loading Smile Care Dental Studio">
      <div className="startup-glow startup-glow-one" />
      <div className="startup-glow startup-glow-two" />

      <div className="startup-content">
        <div className="startup-mark">
          <Sparkles size={34} strokeWidth={1.8} />
        </div>

        <div className="startup-name">
          <span>Smile Care</span>
          <small>Dental Studio</small>
        </div>

        <svg className="startup-smile" viewBox="0 0 180 34" aria-hidden="true">
          <path d="M8 7c25 27 139 27 164 0" />
        </svg>
      </div>
    </div>
  )
}

export default StartupAnimation
