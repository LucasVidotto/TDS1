import React from "react";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import { 
  Stack,
  Input,
  Text,
  FormLabel,
} from "@chakra-ui/react"

import "./style.css";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section className="block">
      <Stack className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="section-sign-in">
          
          <FormLabel as="h1">ErrorMessage</FormLabel>
          
          <Stack className="form-group form-icon">
            <Text className="form-label">Nome Completo:
              <Input
              className="form-input"
              placeholder="Your Name"
                {...register("multipleErrorInput", {
                  required: "This input is required.",
                  pattern: {
                    value: /\d+/,
                    message: "This input is number only."
                  },
                  minLength: {
                    value: 11,
                    message: "This input must exceed 10 characters"
                  }
                })}
              />
            </Text>
          </Stack>
          <ErrorMessage
            errors={errors}
            name="multipleErrorInput"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
      
          <Input type="submit" />
        </form>
    </Stack>
    </section>
  );
}
