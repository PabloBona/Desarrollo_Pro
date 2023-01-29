import { Controller, useForm } from 'react-hook-form';
import { ActionButton } from '../../components/buttons/ActionButton';
import { Input } from '../../components/forms/Input';

const CreateEventPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      first_name: '',
    },
  });
  const onSubmit = (data: { first_name: string }) => {
    console.log(data);
  };

  return (
    <div className="py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="first_name"
          control={control}
          rules={{ required: 'This is required.' }}
          render={({ field }) => <Input label="Nombre completo" {...field} />}
        />

        <div>
          <ActionButton>Enviar</ActionButton>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
