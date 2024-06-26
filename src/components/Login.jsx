import React, { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";

const Login = ({ loginBtn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginBtnHandling = () => {
    loginBtn(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="max-w-sm w-1/2">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            onClick={loginBtnHandling(email, password)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            LOGIN
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
