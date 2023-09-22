import { getReview, getSlugs } from "@/lib/review";
import Review from "@/views/Review";

export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs.map((item) => ({ slug: item }));
}

export async function generateMetadata({ params: { slug } }) {
	const review = await getReview(slug);
	return {
		title: review.title,
	};
}

export default async function ReviewPage({ params: { slug } }) {
	const review = await getReview(slug);
	return <Review review={review} />;
}
