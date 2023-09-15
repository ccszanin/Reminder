import { Container } from "./styles";
import reminderLogo from "../../assets/images/Logo.jpg";
import { Button } from "../Button";
import { useState } from "react";


export function Header(){
  const [number, setNumber] = useState(0);

  function increment(){
    setNumber(number + 1);
  }

  return (
  <Container>
   <img src={reminderLogo} alt="Logo React Reminder" />
   <Button title="Adicionar Lembrete" onClick={increment} />
  </Container>
  );
}