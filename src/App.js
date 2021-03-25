import salata from "./images/perfection_salad.jpg";
import "./App.css";

function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2",
    },
    {
      name: "cup sugar",
      quantity: "1/2",
    },
    {
      name: "teaspoon salt",
      quantity: "1",
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1",
    },
    {
      name: " cup lemon juice",
      quantity: "1/2",
    },
    {
      name: "tablespoons vinegar",
      quantity: "2",
    },
    {
      name: "cup shredded carrot",
      quantity: "1",
    },
    {
      name: "cup sliced celery",
      quantity: "1",
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1",
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2",
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1",
    },
  ];

  const preparation = [
    {
      desc: "In small saucepan, combine gelatine, sugar, and salt; mix well",
    },
    {
      desc:
        "Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat",
    },
    {
      desc:
        "Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white",
    },
  ];

  document.title = "dfsdfsdfsd";

  console.log(ingredients);

  return (
    <div className="container">
      <h1 style = {{textAlign: "center", color: "red"}}>Perfection Salad</h1>
      <img src={salata} />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((element) => (
          <li>
            {element.name} <em>{element.quantity}</em>
          </li>
        ))}
      </ul>

      <h2>Preparation</h2>
      <ol>
        {preparation.map((element) => (
          <li>
            {element.desc.split(".").map((paragraph) => (
              <p>{paragraph}.</p>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
