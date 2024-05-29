import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { cookies } from "next/headers";
import { AppCookies } from "@/lib/cookies.type";
import { redirect } from "next/navigation";

enum SignType {
  SIGN_IN = "signIn",
  SIGN_UP = "signUp",
}

export default function AuthPage() {
  const user = cookies().has(AppCookies.USER_ID);
  if (user) redirect("/");
  return (
    <div className="container my-10 flex justify-center">
      <Tabs defaultValue={SignType.SIGN_IN} className="w-full max-w-[400px]">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value={SignType.SIGN_IN}>Login</TabsTrigger>
          <TabsTrigger value={SignType.SIGN_UP}>Register</TabsTrigger>
        </TabsList>
        <TabsContent value={SignType.SIGN_IN}>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Welcome back</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value={SignType.SIGN_UP}>
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Eager to welcome your esteemed self to the Digital Garden 😊
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">register</TabsContent>
      </Tabs>
    </div>
  );
}
