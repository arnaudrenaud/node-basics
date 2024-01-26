// Note : {content: string, lastUpdatedAt: Date, isPinned: boolean}

// Définition classique d'une fonction avec le mot-clé `function`
function getNotesSorted(notes) {
  return notes;
}

// Définition d'une fonction avec la notation fléchée (fat arrow)
// const getNotesSorted = (notes) => {
//   // return notes sorted
// };

console.log(
  getNotesSorted([
    {
      content: "Apprentissage de JavaScript",
      lastUpdatedAt: new Date("2024-01-26T14:00:00.000Z"),
      isPinned: false,
    },
    {
      content: "Application Node.js",
      lastUpdatedAt: new Date("2024-01-26T13:00:00.000Z"),
      isPinned: true,
    },
    {
      content: "Tests automatisés avec Jest",
      lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
      isPinned: false,
    },
  ])
);
