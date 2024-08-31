import type { Sweat } from "~/types/Sweat";

export const useSweatyStore = defineStore(
	"sweaty-store",
	() => {
		const userSweatness = useState("snippets", () => {
			return subjects.map(
				(s) => <Sweat>{ subjectId: s.id, sweatRating: 1 },
			);
		});

		const changeSweatness = (subjectId: number, newSweatness: number) => {
			userSweatness.value[subjectId].sweatRating = newSweatness;
		};

		return { userSweatness, changeSweatness };
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
