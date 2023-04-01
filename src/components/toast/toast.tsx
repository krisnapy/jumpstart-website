import { useState } from 'react'
import { ToastContainer, ToastHeader, Toast as RBToast, ToastBody } from 'react-bootstrap'

type ToastType = {
  header?: any
  body?: any
  toastToggle?: boolean
  variant?: string
}

export const Toast = ({ body, header, toastToggle = false, variant = 'primary' }: ToastType) => {
  const [toastVisible, setToastVisible] = useState(toastToggle)

  return (
    <ToastContainer>
      <RBToast
        bg={variant}
        show={toastVisible}
        onClose={() => setToastVisible(false)}
        className='bs-toast'
      >
        <ToastHeader className={`bg-${variant}`}>
          <i className='bx bx-bell me-2'></i>
          <div className='me-auto fw-semibold'>{header}</div>
        </ToastHeader>
        <ToastBody>{body}</ToastBody>
      </RBToast>
    </ToastContainer>
  )
}
