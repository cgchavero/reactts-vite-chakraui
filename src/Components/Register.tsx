import React, {useState} from "react";
import { addNewUser, isUsrAlreadyRegistred, type IUserModel } from "../LocalStorage";
import { Link } from "react-router";
import { Button, Card, Field, HStack, Input, Separator, Stack, Text } from '@chakra-ui/react';

const Register = () => {

    const [data, setData] = useState<IUserModel>({
        name: "",
        username: "",
        password: "",
    });

    const [message, setMessage] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const id = event.target.id;
        const value = event.target.value;

        setData({ ...data, [id]: value});
        setMessage("");
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (data.name == "" || data.username == "" || data.password == "") {
            //setMessage("Please fill the form");
            alert("Please fill the form");
            return;
        }

        // If email id already exists
        if (isUsrAlreadyRegistred(data.username)) {
            //setMessage("User is already registred");
            alert("User is already registred");
            return;
        }

        // Save the user in local storage
        addNewUser(data);
        //setMessage("User registred. Click on Login");
        alert("User registred. Click on Login");
        setData({
        name: "",
        username: "",
        password: "",
        });

    }

    return (
        /*<>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form onSubmit={handleFormSubmit}>
            <h3>Register Here</h3>

            <label>Name</label>
            <input
            type="text"
            placeholder="Name"
            id="name"
            value={data.name}
            onChange={handleInputChange}
            />

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

            <button>Register</button>
            <div className="social">
                {message && <p>{message}</p>}
                <div className="go">
                    <i className="fab fa-google"></i> <Link to="/login">Login</Link>
                </div>
            </div>
        </form>
        </>*/

<Card.Root variant="elevated" boxShadow="lg">
      <form onSubmit={handleFormSubmit}>
      <Card.Header gap="1">
        <Card.Title>Register</Card.Title>
        <Card.Description>
          Provide your data to register.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" width="full">
            <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input
              type="name"
              placeholder="Your Name"
              id="name"
              value={data.name}
              onChange={handleInputChange} />
          </Field.Root>
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
        <Button width="full" type="submit">Register</Button>
      </Card.Footer>
      </form>
      <HStack gap="2">
        <Separator flex="1" />
          <Text color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
            <Link to="/login">go to Login page</Link>
          </Text>
        <Separator flex="1" />
      </HStack>
    </Card.Root>

    );

};

export default Register;