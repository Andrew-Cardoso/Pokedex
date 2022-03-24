import { Container, MiddleBall, FakeBackground, FakeScreen } from "./PokedexSide.style";

type PokedexSideArguments = {side: 'upper' | 'lower', open: boolean};

export const PokedexSide = ({side, open}: PokedexSideArguments) => {
    return (
        <Container side={side} open={open}>
            <MiddleBall side={side}>
                <FakeBackground>
                    <FakeScreen />
                </FakeBackground>
            </MiddleBall>
        </Container>
    )
}