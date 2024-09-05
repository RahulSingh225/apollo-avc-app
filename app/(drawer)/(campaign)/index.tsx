import { SizableText } from 'tamagui';
import { Carousel } from '~/components/Carousel';
import { Container } from '~/components/Container';

export default function Campaign() {
  return (
    <>
      <Container>
        <SizableText size={"$5"} color={"#7c8d96"} fontWeight={"bold"} marginTop={"$4"}>Current Activities</SizableText>
        <Carousel />
        <SizableText size={"$5"} color={"#7c8d96"} fontWeight={"bold"} marginTop={"$4"}>Past Activities</SizableText>
        <Carousel />
        <SizableText size={"$5"} color={"#7c8d96"} fontWeight={"bold"} marginTop={"$4"}>Future Activities</SizableText>
        <Carousel />
      </Container>
    </>
  );
}
