import React from "react";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";

interface ReviewProps {
	review: any;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
	return (
		<>
			<Heading>{review.title}</Heading>
			<p className="italic pb-2">{review.date}</p>
			<div className="flex gap-3 items-baseline">
				<p className="italic pb-2">{review.date}</p>
				<ShareLinkButton />
			</div>
			<img
				src={review.image}
				alt=""
				width="640"
				height="360"
				className="mb-2 rounded"
			/>
			<article
				dangerouslySetInnerHTML={{ __html: review.body }}
				className="prose"
			/>
		</>
	);
};

export default Review;
