import { SignUpForm } from "@/components/auth/SignUpForm";
import { Header } from "@/components/Header";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="mx-auto max-w-md">
          <h1 className="mb-8 text-center text-2xl font-bold">Registrati</h1>
          <SignUpForm />
        </div>
      </main>
    </div>
  );
}