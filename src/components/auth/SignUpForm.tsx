import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const signUpSchema = z.object({
  email: z.string().email("Inserisci un'email valida"),
  password: z
    .string()
    .min(8, "La password deve essere di almeno 8 caratteri")
    .max(100),
  name: z.string().min(2, "Il nome deve essere di almeno 2 caratteri"),
});

type SignUpValues = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(data: SignUpValues) {
    setIsLoading(true);
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
          },
        },
      });

      if (signUpError) throw signUpError;

      toast.success(
        "Registrazione completata! Controlla la tua email per confermare l'account."
      );
      navigate("/");
    } catch (error) {
      toast.error("Errore durante la registrazione");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Il tuo nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="nome@esempio.it" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Registrazione in corso..." : "Registrati"}
        </Button>
      </form>
    </Form>
  );
}