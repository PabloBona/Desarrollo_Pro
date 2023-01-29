import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import { ActionButton } from '../../components/buttons/ActionButton';
import { Input } from '../../components/forms/Input';
import { Select } from '../../components/forms/Select';
import { TextArea } from '../../components/forms/TextArea';

const CreateEventPage = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      titulo_publicacion: '',
      type: '',
      category: '',
      description: '',
      reference: '',
    },
  });
  const onSubmit = (data: { titulo_publicacion: string }) => {
    console.log(data);
    reset();
  };

  return (
    <div className="grid grid-cols-12 gap-12 md:gap-4 h-screen">
      <div className="bg-app-blue col-span-full md:col-span-4 flex flex-col items-center justify-around gap-8 p-4 ">
        <Link href={'/'}>
          <Logo />
        </Link>
        <div className="max-w-[300px]">
          <h2 className="text-app-yellow app-title-3 pb-3">
            ¡Bienvenido, creador!
          </h2>
          <p className="text-white">
            A continuación puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
        </div>
        <div className="w-full xs:w-[300px] mx-auto">
          <p className="text-white text-left w-full">Ayuda</p>
        </div>
      </div>
      <div className="col-span-full md:col-span-8  flex items-center justify-center p-4">
        <div className="w-full sm:w-[500px]">
          <div className="pb-6">
            <h2 className="app-title-2">Publicación</h2>
            <span className="app-subtitle-2"> Información básica</span>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Controller
                name="titulo_publicacion"
                control={control}
                rules={{ required: 'This is required.' }}
                render={({ field }) => (
                  <Input label="Título de la publicación" {...field} />
                )}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: 'This is required.' }}
                  render={({ field }) => (
                    <Select label="Selecciona el tipo" {...field}>
                      <option value=""></option>
                      <option>cat 1</option>
                      <option>cat 2</option>
                      <option>cat 3</option>
                      <option>cat 4</option>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: 'This is required.' }}
                  render={({ field }) => (
                    <Select label="Selecciona la categoría" {...field}>
                      <option value=""></option>
                      <option>cat 1</option>
                      <option>cat 2</option>
                      <option>cat 3</option>
                      <option>cat 4</option>
                    </Select>
                  )}
                />
              </div>
            </div>
            <div>
              <Controller
                name="description"
                control={control}
                rules={{ required: 'This is required.' }}
                render={({ field }) => (
                  <TextArea
                    rows={5}
                    label="¿Por qué lo recomiendas?"
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="reference"
                control={control}
                rules={{ required: 'This is required.' }}
                render={({ field }) => (
                  <Input label="Link de referencia" {...field} />
                )}
              />
            </div>

            <div className="text-center">
              <ActionButton className="!rounded-3xl px-6">
                Siguiente
              </ActionButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
