import { getReviews } from "@/lib/review";
import Reviews from "@/views/Reviews";

export default async function ReviewsPage() {
	const reviews = await getReviews();
	return <Reviews reviews={reviews} />;
}
