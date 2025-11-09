import { useDispatch } from 'react-redux';
import { toggleLike, removeProduct } from '../../features/productsSlice';
import type { AppDispatch } from '../../app/providers/with-store';
import { CardControlsWrapper, CardControl } from './CardControls.styled';

interface CardControlsProps {
  id: string;
  liked: boolean;
}

export const CardControls = ({ id, liked }: CardControlsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLike(id));
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeProduct(id));
  };

  return (
    <CardControlsWrapper>
      <CardControl onClick={handleToggleLike}>{liked ? '❤️ UNLIKE' : '🤍 LIKE'}</CardControl>
      <CardControl onClick={handleRemove}>🗑️ DELETE</CardControl>
    </CardControlsWrapper>
  );
};
