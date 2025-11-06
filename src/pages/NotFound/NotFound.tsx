import { NotFoundWrapper, NotFoundLink, NotFoundTitle } from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Page Not Found ¯\_(ツ)_/¯ </NotFoundTitle>
      <NotFoundLink to='/products'>Go Home</NotFoundLink>
    </NotFoundWrapper>
  );
};
