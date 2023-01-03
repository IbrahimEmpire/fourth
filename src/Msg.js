import { Counder } from './Counder';

export function Msg({ name, pic }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>{name}</h1>
      <Counder />
    </div>
  );
}
