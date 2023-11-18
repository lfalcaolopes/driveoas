import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

interface InputForm {
  fullName: string
  email: string
  RA: string
  password: string
}

function SignUp() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<InputForm>()
  const onSubmit: SubmitHandler<InputForm> = (data) => console.log(data)

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 mb-32">
      <h1 className='font-bold text-5xl text-blue-500'>Crie sua conta!</h1>
      <p>Já esta registrado? <Link to="/login" className="underline">Login</Link></p>

      <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-8 w-full"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="">NOME COMPLETO</p>
            <input className="px-2 py-1 border-[1px] border-zinc-300 rounded w-60" placeholder="Nome completo" {...register("fullName", { required: true })} />
          </div>

          <div className="flex flex-col gap-2">
            <p className="">EMAIL</p>
            <input className="px-2 py-1 border-[1px] border-zinc-300 rounded w-60" type="email" placeholder="Email" {...register("email", { required: true })} />
          </div>

          <div className="flex flex-col gap-2">
            <p className="">RA</p>
            <input className="px-2 py-1 border-[1px] border-zinc-300 rounded w-60" type="password" placeholder="Registro do aluno" {...register("RA", { required: true })} />
          </div>

          <div className="flex flex-col gap-2">
            <p className="">SENHA</p>
            <input className="px-2 py-1 border-[1px] border-zinc-300 rounded w-60" type="password" placeholder="Senha" {...register("password", { required: true })} />
          </div>
        </div>

        <Link to="/dashboard" className="px-8 py-2 bg-blue-500 text-white rounded" type="submit">Cadastrar</Link>
      </form>
    </div>
  )
}

export default SignUp
