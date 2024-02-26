import {
  getNotesSorted,
  getNotesWithNewNote,
  getNoteWithAuthor,
  getPinnedNotes,
  getPreviewForNotes,
} from "./index";

test("Addition", () => {
  expect(1 + 1).toEqual(2);
});

describe("getNotesSorted", function () {
  describe("when array is empty", function () {
    it("returns empty array", function () {
      expect(getNotesSorted([])).toEqual([]);
    });
  });

  describe("when array has notes", function () {
    const notes = [
      {
        content: "Tests automatisés avec Jest",
        lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
        isPinned: false,
      },
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
    ];

    it("returns pinned notes first (with most recent first), and other notes second (with most recent first)", function () {
      expect(getNotesSorted(notes)).toEqual([
        {
          content: "Application Node.js",
          lastUpdatedAt: new Date("2024-01-26T13:00:00.000Z"),
          isPinned: true,
        },
        {
          content: "Apprentissage de JavaScript",
          lastUpdatedAt: new Date("2024-01-26T14:00:00.000Z"),
          isPinned: false,
        },
        {
          content: "Tests automatisés avec Jest",
          lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
          isPinned: false,
        },
      ]);
    });
  });
});

describe("getNotesWithNewNote", function () {
  it("returns notes with new note at the end", () => {
    const notes = [
      {
        content: "Tests automatisés avec Jest",
        lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
        isPinned: false,
      },
      {
        content: "Apprentissage de JavaScript",
        lastUpdatedAt: new Date("2024-01-26T14:00:00.000Z"),
        isPinned: false,
      },
    ];
    const newNote = {
      content: "Application Node.js",
      lastUpdatedAt: new Date("2024-01-26T13:00:00.000Z"),
      isPinned: true,
    };

    expect(getNotesWithNewNote(notes, newNote)).toEqual([
      {
        content: "Tests automatisés avec Jest",
        lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
        isPinned: false,
      },
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
    ]);
  });
});

describe("getNoteWithAuthor", () => {
  it("returns note with author attribute", () => {
    expect(
      getNoteWithAuthor(
        {
          content: "Application Node.js",
          lastUpdatedAt: new Date("2024-01-26T13:00:00.000Z"),
          isPinned: true,
        },
        "Arnaud"
      )
    ).toEqual({
      content: "Application Node.js",
      lastUpdatedAt: new Date("2024-01-26T13:00:00.000Z"),
      isPinned: true,
      author: "Arnaud",
    });
  });
});

describe("getPinnedNotes", () => {
  it("returns pinned notes only", () => {
    const notes = [
      {
        content: "Tests automatisés avec Jest",
        lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
        isPinned: false,
      },
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
    ];

    expect(getPinnedNotes(notes)).toEqual([
      {
        content: "Application Node.js",
        lastUpdatedAt: new Date("2024-01-26T13:00:00.000Z"),
        isPinned: true,
      },
    ]);
  });
});

describe("getPreviewForNotes", () => {
  it("returns first word of content for each note", () => {
    const notes = [
      {
        content: "Tests automatisés avec Jest",
        lastUpdatedAt: new Date("2024-01-26T12:00:00.000Z"),
        isPinned: false,
      },
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
    ];

    expect(getPreviewForNotes(notes)).toEqual([
      "Tests",
      "Apprentissage",
      "Application",
    ]);
  });
});
