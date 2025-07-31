import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getUser, updateActiveUser } from "../LocalStorage";
import { Button, Card, Field, HStack, Input, Separator, Stack, Text } from '@chakra-ui/react';

interface ILoginModel {
  username: string;
  password: string
}

const Login = () => {

  const [data, setData] = useState<ILoginModel>({ username: "", password: ""});

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
          const id = event.target.id;
          const value = event.target.value;
  
          setData({ ...data, [id]: value});
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (data.username == "" || data.password == "") {
            alert("Please fill the form");
            return;
        }

        const user = getUser(data.username, data.password);
        if (user == null){
          alert("Username or Password is not correct");
          return;
        }
        
        updateActiveUser(user);
        navigate("/");
  };
  
  return (
    /*<>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h3>Login Here</h3>

        <label>Username</label>
        <input
          type="text"
          placeholder="Email"
          id="username"
          value={data.username}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        <button>Log In</button>
        <div className="social">
            <div className="go">
                <i className="fab fa-google"></i> <Link to="/register">Register</Link>
            </div>
        </div>
      </form>
    </>*/

    <Card.Root variant="elevated" boxShadow="lg">
      <form onSubmit={handleFormSubmit}>
      <Card.Header gap="1">
        <Card.Title>Log In</Card.Title>
        <Card.Description>
          Provide your credentials to log in.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" width="full">
          <Field.Root>
            <Field.Label>E-Mail</Field.Label>
            <Input
              type="email"
              placeholder="Your E-Mail"
              id="username"
              value={data.username}
              onChange={handleInputChange} />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input
              type="password"
              placeholder="Your Password"
              id="password"
              value={data.password}
              onChange={handleInputChange} />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full" type="submit">Login</Button>
      </Card.Footer>
      </form>
      <HStack gap="2">
        <Separator flex="1" />
          <Text color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
            <Link to="/register">or go to Register page</Link>
          </Text>
        <Separator flex="1" />
      </HStack>
    </Card.Root>

  );
};

export default Login;
