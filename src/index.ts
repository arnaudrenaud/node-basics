// Note : {content: string, lastUpdatedAt: Date, isPinned: boolean}

// Définition classique d'une fonction avec le mot-clé `function`
type Note = {
  content: string;
  lastUpdatedAt: Date;
  isPinned: boolean;
  author?: string;
};

const getNotesSorted = (notes: Note[]): Note[] =>
  notes.sort(
    (noteA, noteB) =>
      +noteB.isPinned - +noteA.isPinned ||
      noteB.lastUpdatedAt.getTime() - noteA.lastUpdatedAt.getTime()
  );

function getNotesWithNewNote(notes: Note[], newNote: Note): Note[] {
  return [...notes, newNote];
}

function getNoteWithAuthor(note: Note, author: string): Note {
  return { ...note, author };
}

// Définition d'une fonction avec la notation fléchée (fat arrow)
// const getNotesSorted = (notes) => {
//   // return notes sorted
// };

export { getNotesSorted, getNotesWithNewNote, getNoteWithAuthor };
