import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <Tabs defaultValue="Signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create your account and click Signup button when you are done !!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required="true"
                  name = "name"
                  value = {signupInput.name}
                  onChange = {(e)=>{changeInputHandler(e,"signup")}}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required="true"
                  name = "email"
                  value = {signupInput.email}
                  onChange = {(e)=>{changeInputHandler(e,"signup")}}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required="true"
                  name = "password"
                  value = {signupInput.password}
                  onChange = {(e)=>{changeInputHandler(e,"signup")}}
                  placeholder="Create a password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Welcome Back!!! Its good to have you back!!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required="true"
                  name = "email"
                  value = {loginInput.email}
                  onChange = {(e)=>{changeInputHandler(e,"Login")}}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required="true"
                  name = "password"
                  value = {loginInput.password}
                  onChange = {(e)=>{changeInputHandler(e,"Login")}}
                  placeholder="Password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
              onClick = {()=>{console.log(loginInput)}}
              >Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
