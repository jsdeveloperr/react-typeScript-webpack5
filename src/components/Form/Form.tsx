import React from 'react';
import { FormProvider, SubmitHandler, useFormContext } from 'react-hook-form';

type FormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

const Form = ({ children, onSubmit }: FormProps) => {
  const methods = useFormContext();

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        {children}
      </FormProvider>
    </form>
  );
};

export default Form;
