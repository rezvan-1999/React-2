export default function ShowPlanets({ arrayOfPlanets }) {
  return (
    <>
      <ul>
        {arrayOfPlanets.map((planet, index) => {
          return <li key={index}>{planet}</li>;
        })}
      </ul>
    </>
  );
}
