import { Suspense } from "react";
import FormLogin from "./FormLogin";

export const metadata = { title: "Lado B Discos - Entrar" };

export default function Login() {
  return (
    <Suspense fallback={null}>
      <FormLogin />
    </Suspense>
  );
}
