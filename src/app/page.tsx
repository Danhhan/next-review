import Home from "@/views/Home";
import { getFeaturedReview } from "@/lib/review";

export const metadata = {
	title: "Indie Gamer",
	description: 'Only the best indie games, reviewed for you.',
};
export default async function HomePage() {
	const review = await getFeaturedReview();
	return <Home review={review} />;
}
