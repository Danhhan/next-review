import { getReviews } from "@/lib/review";
import Reviews from "@/views/Reviews";

export async function generateMetadata() {
	return {
		title: "Review list",
	};
}
export default async function ReviewsPage() {
	const reviews = await getReviews();
	return <Reviews reviews={reviews} />;
}
