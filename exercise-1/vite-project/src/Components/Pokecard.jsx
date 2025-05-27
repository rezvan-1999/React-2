export default function Pokecard({ name, type, image }) {
  return (
    <div className="pokecard">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p className="text">Type: {type}</p>
    </div>
  );
}
