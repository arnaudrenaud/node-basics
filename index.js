// Note : {content: string, lastUpdatedAt: Date, isPinned: boolean}

// Définition classique d'une fonction avec le mot-clé `function`
function getNotesSorted(notes) {
  return notes.sort((noteA, noteB) => {
    const isPinnedDifferent = noteB.isPinned - noteA.isPinned;
    if (isPinnedDifferent) {
      return isPinnedDifferent;
    }
    return noteB.lastUpdatedAt - noteA.lastUpdatedAt;
  });
}

// Définition d'une fonction avec la notation fléchée (fat arrow)
// const getNotesSorted = (notes) => {
//   // return notes sorted
// };

module.exports = { getNotesSorted };
