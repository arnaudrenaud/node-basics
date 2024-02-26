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

function getPinnedNotes(notes: Note[]): Note[] {
  const pinnedNotes: Note[] = [];
  notes.forEach((note) => {
    if (note.isPinned) {
      pinnedNotes.push(note);
    }
  });
  return pinnedNotes;
}

export {
  getNotesSorted,
  getNotesWithNewNote,
  getNoteWithAuthor,
  getPinnedNotes,
};
