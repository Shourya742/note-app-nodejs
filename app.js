const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");
// Customize yargs version

yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Adding a new note!!!");
    // console.log(argv.title);
    // console.log(argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Removing a new note!!!");
    notes.removeNote(argv.title);
  },
});

// Create List command

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("listing out all note");
    notes.listNotes();
  },
});

// Create Read Command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Reading a note");
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
