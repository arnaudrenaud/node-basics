// Note : {content: string, lastUpdatedAt: Date, isPinned: boolean}

// Définition classique d'une fonction avec le mot-clé `function`
const getNotesSorted = (notes) =>
  notes.sort(
    (noteA, noteB) =>
      noteB.isPinned - noteA.isPinned ||
      noteB.lastUpdatedAt - noteA.lastUpdatedAt
  );

function getNotesWithNewNote(notes, newNote) {
  return [...notes, newNote];
}

function getNoteWithAuthor(note, author) {
  return { ...note, author };
}

// Définition d'une fonction avec la notation fléchée (fat arrow)
// const getNotesSorted = (notes) => {
//   // return notes sorted
// };

export { getNotesSorted, getNotesWithNewNote, getNoteWithAuthor };