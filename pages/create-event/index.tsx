import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BiPlus } from 'react-icons/bi';
import Logo from '../../components/assets/logo/Logo';
import { ActionButton } from '../../components/buttons/ActionButton';
import { Input } from '../../components/forms/Input';
import { Select } from '../../components/forms/Select';
import { TextArea } from '../../components/forms/TextArea';
import { useCategories } from '../../lib/services/categories.services';
import { createPublication } from '../../lib/services/publications.service';
import { useTags } from '../../lib/services/tags.services';

const CreateEventPage = () => {
  const [formStep, setFormStep] = useState(0);
  const [currentFile, setCurrentFile] = useState<string | Blob>('');
  const [imageURL, setImageURL] = useState<string>();
  const { data: tags } = useTags();
  const { data: categories } = useCategories();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      title: '',
      tags: '',
      publication_type_id: '',
      description: '',
      urlShare: '',
    },
    mode: 'onChange',
  });
  const router = useRouter();
  const onSubmit = (data: any) => {
    if (isValid) {
      setFormStep(1);
      console.log(data);
    }
  };

  const handleImageChangue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCurrentFile(file);
      setImageURL(URL.createObjectURL(file));
    }
    console.log(currentFile);
  };

  const onPublish = () => {
    if (imageURL) {
      createPublication(getValues())
        .then((resp) => {
          alert('event publish');
          router.push('/profile');
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      <div className="col-span-full relative md:col-span-8 flex items-center flex-col pt-[10vh] px-5">
        <div className="w-full h-3 rounded-lg bg-app-grayLight max-w-[600px] mx-auto mb-3">
          <div
            className={`transition-all duration-700 h-3 rounded-lg bg-app-blue ${
              formStep === 0 && '!w-1/2'
            } ${formStep === 1 && '!w-full'}`}
          ></div>
        </div>
        {formStep === 0 && (
          <div className="p-4 flex-grow w-full ">
            <div className="max-w-[600px] mx-auto ">
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
                    name="title"
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
                      name="publication_type_id"
                      control={control}
                      rules={{ required: 'This is required.' }}
                      render={({ field }) => (
                        <Select label="Selecciona el tipo" {...field}>
                          {categories?.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </div>
                  <div>
                    <Controller
                      name="tags"
                      control={control}
                      rules={{ required: 'This is required.' }}
                      render={({ field }) => (
                        <Select label="Selecciona la categoría" {...field}>
                          {tags?.map((tag) => (
                            <option key={tag.id} value={tag.id}>
                              {tag.name}
                            </option>
                          ))}
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
                    name="urlShare"
                    control={control}
                    rules={{ required: 'This is required.' }}
                    render={({ field }) => (
                      <Input label="Link de referencia" {...field} />
                    )}
                  />
                </div>

                <div className="text-center pt-12">
                  <ActionButton
                    disabled={!isValid}
                    className="!rounded-3xl px-6"
                  >
                    Siguiente
                  </ActionButton>
                </div>
              </form>
            </div>
            <button
              onClick={() => router.back()}
              className="absolute -top-5 left-4 xs:top-8 sm:left-8 text-app-blue font-medium"
            >
              Back
            </button>
          </div>
        )}

        {formStep === 1 && (
          <div className="col-span-full md:col-span-8  p-4">
            <div className="w-full sm:w-[600px]">
              <div className="pb-6">
                <h2 className="app-title-2">Fotos</h2>
                <span className="app-subtitle-2">
                  {' '}
                  Selecciona máximo tres fotos para crear una galería
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="min-h-[250px] w-full gap-5 sm:w-[600px] border border-app-grayDark rounded-xl grid grid-cols-3 p-6">
                  <label
                    style={
                      imageURL
                        ? {
                            backgroundImage: `url(${imageURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : {}
                    }
                    className={`bg-app-grayLight h-[206px] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105`}
                  >
                    <BiPlus className="text-app-blue font-medium text-xl" />
                    <input
                      onChange={handleImageChangue}
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                  <label className="bg-app-grayLight h-[206px] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105">
                    <BiPlus className="text-app-blue font-medium text-xl" />
                    <input type="file" className="hidden" accept="image/*" />
                  </label>

                  <label className="bg-app-grayLight h-[206px] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105">
                    <BiPlus className="text-app-blue font-medium text-xl" />
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
                <div className="text-center pt-12">
                  <ActionButton
                    disabled={!imageURL}
                    onClick={onPublish}
                    className="!rounded-3xl px-6"
                  >
                    Publicar
                  </ActionButton>
                </div>
              </div>
            </div>
            <button
              onClick={() => setFormStep((prev) => prev - 1)}
              className="absolute -top-5 left-4 sm:top-8 sm:left-8 text-app-blue font-medium"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEventPage;
