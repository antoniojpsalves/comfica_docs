import { useForm } from 'react-hook-form';

interface FormData {
  Email: string;
  Senha: string;
}

export function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="flex flex-col items-center justify-center w-full h-full">

        <h1 className="text-gray-700 font-bold text-2xl mb-6">Comfica Docs</h1>
        <div className='relative mt-2 w-80'>
          <input id="Email"
            className='peer rounded-md w-full px-4 py-3 text-sm text-gray-700 border-gray-200 border-2 focus:bg-white bg-white placeholder-shown:bg-gray-200 focus:outline-blue-500 focus:bg-whiteplaceholder-shown:border-none placeholder-transparent'
            {...register("Email", { required: true })}
            placeholder='Email'
          />
          <label htmlFor="Email"
            className='absolute left-2 -top-2.5 px-1 text-sm transition-all bg-white rounded text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-gray-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:font-semibold'
          >
            Email
          </label>
        </div>
        <div className='relative mt-4 w-80'>
        <input id="Senha"
          className='peer rounded-md w-full px-4 py-3 text-sm text-gray-700 border-gray-200 border-2 focus:bg-white bg-white placeholder-shown:bg-gray-200 focus:outline-blue-500 focus:bg-whiteplaceholder-shown:border-none placeholder-transparent'
          {...register("Senha", { required: true, minLength: 1 })}
          placeholder='Senha'
        />
        <label htmlFor="Senha"
          className='absolute left-2 -top-2.5 px-1 text-sm transition-all bg-white rounded text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-gray-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:font-semibold'
        >
          Senha
        </label>
        </div>

        <input className=" w-full cursor-pointer text-xl bg-blue-500 hover:bg-blue-400 rounded-md px-5 py-1 text-white mt-2" type="submit" />
      </main>
    </form>
  );
}
