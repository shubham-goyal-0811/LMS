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
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerLoading,
      isSuccess: registerSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: LoginLoading,
      isSuccess: loginSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleSubmit = async (type) => {
    const inputData = type === "Signup" ? signupInput : loginInput;
    const action = type === "Signup" ? registerUser : loginUser;
    await action(inputData)
  };

  useEffect(()=>{
    
    if(registerSuccess && registerData){
      toast.success(registerData.message || "Account Created!!");
    }

    if(loginSuccess && loginData){
      toast.success(loginData.message || "Login Successful");
    }

    if(loginError){
      toast.error(loginData?.message || "Login Failed");
    }

    if(registerError ){
      toast.error(registerData?.message || "Signup Failed");
    }

  },[registerLoading,LoginLoading,loginError,registerError,loginData,registerData])

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
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required="true"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required="true"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  placeholder="Create a password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerLoading} onClick={()=>handleSubmit("Signup")}>
                {
                  registerLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait
                    </>
                  )
                  : "Signup"
                }
              </Button>
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
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => {
                    changeInputHandler(e, "Login");
                  }}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required="true"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => {
                    changeInputHandler(e, "Login");
                  }}
                  placeholder="Password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled = {LoginLoading} onClick={()=>handleSubmit("Login")}>
                {
                  LoginLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait
                    </>
                  ) : "Login"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
