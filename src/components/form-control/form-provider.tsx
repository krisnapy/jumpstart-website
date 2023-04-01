import React from 'react'
import { Form } from 'react-bootstrap'
import { FieldValues, FormProvider as Provider, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormProviderProps<FormState extends FieldValues> = {
  methods: UseFormReturn<FormState, any>
  onSubmit: SubmitHandler<FormState>
  children: React.ReactNode
}

export const FormProvider = <FormState extends Record<string, any>>(
  props: FormProviderProps<FormState>
) => {
  const {
    methods,
    methods: { handleSubmit },
    onSubmit,
    children,
  } = props

  return (
    <Provider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>{children}</Form>
    </Provider>
  )
}
