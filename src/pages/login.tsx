import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate   } from "react-router-dom";
import Header from "../components/Header";


interface InputForm {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate()
  

  const registros: InputForm[] = [
    {
      email: 'caturebatheking@gmail.com',
      password: 'senhaforte123'
    },
    {
      email: 'admin@admin.com',
      password: 'admin'
    },
  ];

  const {
    register,
    handleSubmit,
  } = useForm<InputForm>();

  

  function onSubmit(dados: InputForm) {
    console.table(dados);
    if(registros.find(registro => registro.email == dados.email && registro.password == dados.password)) navigate('/dashboard');
    else alert("Email ou senha devem estar incorrretos!")
  }

  return (
    <>
      <Header />

      <div className="w-screen h-full flex">
        <div className="w-full flex flex-col gap-6 mb-32 justify-center items-center">
          <h1 className="font-bold text-5xl text-blue-500">Login</h1>
          <p>Logue para continuar</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="">EMAIL</p>
                <input
                  className="px-2 py-1 border-[1px] border-zinc-300 rounded w-60"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="">SENHA</p>
                <input
                  className="px-2 py-1 border-[1px] border-zinc-300 rounded w-60"
                  type="password"
                  placeholder="Senha"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <p>
              Esqueceu a senha? <span className="underline">Redefinir</span>
            </p>

            <button className="px-8 py-2 bg-blue-500 text-white rounded" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
