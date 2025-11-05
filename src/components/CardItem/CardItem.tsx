import { CardWrapper, CardLink, CardImageBox, CardImage, CardTitle, CardDescription } from './CardItem.styled';

export const CardItem = () => {
  return (
    <CardWrapper>
      <CardLink to='/'>
        <CardImageBox>
          <CardImage src='https://placedog.net/500/g' />
        </CardImageBox>
        <CardTitle>Lorem ipsum</CardTitle>
        <CardDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa explicabo earum fugit vel similique delectus exercitationem quibusdam quidem
          praesentium reiciendis ullam non quos ipsa, officiis provident saepe commodi a eaque.
        </CardDescription>
      </CardLink>
    </CardWrapper>
  );
};
