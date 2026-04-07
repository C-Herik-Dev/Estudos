import logoImg from "../../assets/logo.png";
import { Container } from "../../components/container/index";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useEffect } from "react";
import {toast} from 'react-toastify'

const schema = z.object({
  email: z
    .email("Insira um email válido.")
    .nonempty("O campo email é obrigatório."),
  password: z.string().nonempty("O campo senha é obrigatório."),
});

type FormData = z.infer<
  typeof schema
>; /* -> Ele gera automaticamente: type FormData = { email: string;password: string;} 👉 Sem precisar escrever manualmente*/

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }
    handleLogout();
  }, []);

  async function onSubmit(data: FormData) {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard", { replace: true });
      toast.success("Bem Vindo ao AutoHub!")
    } catch (error) {
      console.log(error);
      toast.error("Erro ao fazer login.")
    }
  }
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logoImg} alt="logo do site" className="w-full" />
        </Link>

        <form
          className="bg-white max-w-xl w-full rounded-lg px-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3 mt-3">
            <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>
          <button
            type="submit"
            className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium mb-3"
            
          >
            Acessar
          </button>
        </form>
        <Link to="/register">Não possui uma conta? Cadastre-se</Link>
      </div>
    </Container>
  );
}
