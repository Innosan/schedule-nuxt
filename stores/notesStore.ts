import type { Note } from "~/types/Note";
import { storage } from "nitropack/runtime/virtual/storage";

export const useNotesStore = defineStore(
	"notes-store",
	() => {
		const notes = useState<Note[]>("notes", () => []);

		const addNote = (note: Note) => {
			notes.value.push(note);
		};
		const deleteNote = (id: number) => {
			notes.value = notes.value.filter((note) => note.id !== id);
		};
		const updateNote = (note: Note) => {
			const noteIndex = notes.value.findIndex((n) => n.id === note.id);
			notes.value[noteIndex] = note;
		};

		return {
			notes,
			addNote,
			deleteNote,
			updateNote,
		};
	},
	{
		persist: {
			storage: persistedState.cookiesWithOptions({
				sameSite: "strict",
				maxAge: 31536000,
			}),
		},
	},
);
