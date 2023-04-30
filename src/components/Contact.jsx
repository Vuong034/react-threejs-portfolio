import React, { useRef } from 'react'
import styled from 'styled-components'
// import emailjs from "@emailjs/browser";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  scroll-snap-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
  background-color: white;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
  background-color: white;
`;

const Button = styled.button`
  background-color: #02c6c9;
  color: white; 
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-family: Sans Serif;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Contact = () => {
  // const ref = useRef();
  // const [success, setSuccess] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_id",
  //       "template_id",
  //       ref.current,
  //       "public_key"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setSuccess(true);
  //       },
  //       (error) => {
  //         console.log(result.text);
  //         setSuccess(false);
  //       }
  //     );
  // };

    return (
        <Section>
        <Container>
          <Left>
            {/* <Form ref={ref} onSubmit={handleSubmit}> */}
            <Form >
              <Title>Contact Me</Title>
              <Input placeholder='Name' name='name'></Input>
              <Input placeholder='Name'name='email'></Input>
              <TextArea placeholder='Write your message' name='message' rows={10}></TextArea>
              <Button type="submit">Send</Button>
              {/* {success &&
                "Your message has been sent. We'll get back to you soon :)"} */}
            </Form>
          </Left>
          <Right>
            <Map />
          </Right>
         </Container>
      </Section>
    )
}

export default Contact