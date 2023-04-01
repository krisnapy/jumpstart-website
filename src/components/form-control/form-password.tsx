import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Controller, useController, useFormContext } from 'react-hook-form'

type FormPasswordType = {
  label?: string
  name: string
  type?: string
  placeholder?: string
}

export const FormPassword = (props: FormPasswordType) => {
  const { label, name, type = 'password', placeholder } = props

  const { control } = useFormContext()

  const {
    field: { value, onChange },
  } = useController({ name, control })

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Form.Group className='input-group-merge'>
      <Form.Label>{label}</Form.Label>
      <Form.Group className='input-group'>
        <Controller
          name={name}
          control={control}
          render={() => (
            <Form.Control
              value={value || ''}
              onChange={onChange}
              type={!showPassword ? type : 'text'}
              id={`pass-${name}`}
              name={name}
              placeholder={placeholder}
              aria-describedby='password'
            />
          )}
        />
        <div
          className='input-group-text cursor-pointer'
          onClick={() => setShowPassword(!showPassword)}
        >
          <i className={`mdi ${showPassword ? 'mdi-eye' : 'mdi-eye-off  '}`}></i>
        </div>
      </Form.Group>
    </Form.Group>
  )
}
