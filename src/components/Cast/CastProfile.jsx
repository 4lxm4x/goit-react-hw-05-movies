import './cast.css';
import placeholder from './placeholder.png';

export default function CastProfile(actor) {
  const { profile_path, name, character } = actor.info;

  return (
    <div>
      <ul>
        <li key={name}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w154${profile_path}`}
              alt={`${name}`}
            />
          ) : (
            <img src={placeholder} alt="no_name" />
          )}
        </li>
        <li>{name}</li>
        <li>Character: {character}</li>
      </ul>
    </div>
  );
}
