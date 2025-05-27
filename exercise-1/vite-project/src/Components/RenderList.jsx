export default function RenderList() {
  let animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  return (
    <>
      <ul>
        {animals.map((animal, index) => {
          return <li key={index}>{animal.label}</li>;
        })}
      </ul>
    </>
  );
}
