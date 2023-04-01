import { Form } from 'react-bootstrap'
import { Controller, useFormContext } from 'react-hook-form'

type FormControlType = {
  label: string
  name: string
  type?: string
  placeholder?: string
}

export const FormControl = (props: FormControlType) => {
  const { label, name, type, placeholder } = props

  const { control } = useFormContext()

  return (
    <Form.Group className='input-group-merge'>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Form.Control
            value={value || ''}
            type={type}
            onChange={onChange}
            id={`input-${name}`}
            name={name}
            placeholder={placeholder}
          />
        )}
      />
    </Form.Group>
  )
}
