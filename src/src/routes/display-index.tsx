import { useMatch } from '@tanstack/react-location';
import type { LocationGenerics } from '../../App';

export default function Index() {
  const {
    data: { display },
  } = useMatch<LocationGenerics>();

  return (
    <div>
      <h1>Display Index {display?.id}</h1>
    </div>
  );
}
