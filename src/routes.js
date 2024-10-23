const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
  // GET ALL NOTES
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  // GET SELECTED NOTES
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler
  },
  // CREATE NEW NOTES
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    options: {
        cors: true,
    }
  },
  // UPDATE NOTES
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler
  },
  // DELETE NOTES
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler
  },
];

module.exports = routes;
