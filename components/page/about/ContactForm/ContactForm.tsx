import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { CharacterCounter, ErrorServerSide, ErrorClientSide, Form, Input, InputHelperWrapper, Submit, Textarea } from "components/shared/form";
import { LoadingSpinner } from "components/shared/utilities";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 2.5rem auto;
  width: 25rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 30rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 35rem;
  }
`;

type TComponent = {

}

type TData = {
  name: string;
  email: string;
  text: string;
}

const ContactForm = () => {
  const { errors, formState, handleSubmit, register, trigger } = useForm();

  const [formData, setFormData] = useState({ name: "", email: "", text: "" });
  const [responseError, setResponseError] = useState({ message: "" });

  const [textCharacterCounter, setTextCharacterCounter] = useState(0);

  const onSubmit = (data: TData) => setFormData({ name: data.name, email: data.email, text: data.text });

  useEffect(() => {
    if (formData.name === "" || formData.email === "" || formData.text === "") return;

    const handleFormSubmission = async () => {
      try {
        await axios.post("/contact/form-msg-from-evrallas", formData);
        // history.push("/page/success");
      } catch (error) {
        return setResponseError(error.response.data.message);
      }
    };

    handleFormSubmission();
    return () => {
      setFormData({ name: "", email: "", text: "" });
      setResponseError({ message: "" });
    } 
  }, [formData]);

  const getTextChanges = (event: any) => {
    setTextCharacterCounter(event.target.value.length);
    trigger("text");
  };

  return (
    <ComponentContainer>
      <Form method="POST" action="/api/contactform" id="contact" onSubmit={handleSubmit(onSubmit)}>
        <Input 
          type={"text"}
          id={"name"}
          name={"name"}
          placeholder={"* Your name."}
          autoComplete={"off"}
          ref={register({
            required: { value: true, message: "NAME is required. Use only letters." },
            pattern: { value: /^[A-Za-z ]+$/i, message: "Use only letters." }
          })}
        />
        {errors.name && <ErrorClientSide errorMessage={errors.name.message} />}
        <Input 
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"* Your email."}
          autoComplete={"off"}
          ref={register({
            required: { value: true, message: "EMAIL is required." },
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: "Provide a valid EMAIL." }
          })}
        />
        {errors.email && <ErrorClientSide errorMessage={errors.email.message} />}
        <Textarea
          id={"text"}
          name={"text"}
          placeholder={"* How can we be of assistance? Be as descriptive as possible!"}
          autoComplete={"off"}
          maxLength={1000}
          rows={15}
          onChange={getTextChanges}
          ref={register({
            required: { value: true, message: "MESSAGE is required." }
          })}
        />
        <InputHelperWrapper>
          <CharacterCounter characterCounter={textCharacterCounter} characterLength="1000" />
        </InputHelperWrapper>
        {errors.text && <ErrorClientSide errorMessage={errors.text.message} />}
        {formState.isSubmitting ? <LoadingSpinner loadingMessage={"One of our librarians is registering your request in our Archives, please wait."} /> : <Submit type="submit" value="submit" />}
        {responseError.message !== undefined ? <ErrorServerSide errorMessage={responseError.message} /> : null}
      </Form>
    </ComponentContainer>
  );
};

export default ContactForm;