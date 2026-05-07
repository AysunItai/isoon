import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { InlineWidget } from 'react-calendly'
import './BookingModal.css'

/** Replace with your live Calendly scheduling URL when ready */
export const CALENDLY_BOOKING_URL =
  'https://calendly.com/aysun-itai/new-meeting'

/**
 * Centered modal with Calendly embed (no inline widget on the page).
 * @param {{ isOpen: boolean; onClose: () => void }} props
 */
export function BookingModal({ isOpen, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modal = (
    <div className="booking-modal-root">
      <div
        className="booking-modal-backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className="booking-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="booking-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
        <h2 id="booking-modal-title" className="booking-modal-title">
          Schedule a consultation
        </h2>
        <p className="booking-modal-lede">
          Pick a time that works for you — we&apos;ll walk through AutoEmail AI.
        </p>
        <div className="booking-modal-calendly">
          <InlineWidget
            url={CALENDLY_BOOKING_URL}
            /* Keep default embed class so bundled Calendly CSS applies */
            className="calendly-inline-widget booking-modal-cal-widget"
            styles={{
              width: '100%',
              height: '700px',
              minHeight: '600px',
            }}
          />
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
