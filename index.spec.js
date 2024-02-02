const { getNotesSorted } = require("./index");

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
