import { InputStyled } from "../components/InputStyled";

export function FormLogin() {
  return(
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-gray-700 font-bold text-2xl mb-6">Comfica Docs</h1>
      <div className="flex flex-col gap-3 mt-2 w-96">
        <InputStyled id="email" type="text" required placeholder="Sua matrícula"/>
        <InputStyled id="senha" type="password" placeholder="Senha"/>
      </div>
    </div>
  )
}