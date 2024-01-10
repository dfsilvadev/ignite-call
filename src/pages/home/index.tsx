import { Heading, Text } from "@ignite-ui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

import previewImage from "@/assets/images/png/app-preview.png";

import { Container, Hero, Preview } from "./styles";
import Image from "next/image";

export default function Home() {
  return (
    <main className={roboto.className}>
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>

          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            alt="Calendário da aplicação com um preview em funcionamento"
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </main>
  );
}
