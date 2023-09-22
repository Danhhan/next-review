import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

const Reviews: React.FC<{ reviews: any }> = ({ reviews }) => {
	return (
		<>
			<Heading>Reviews</Heading>
			<ul className="flex flex-col gap-3">
				{reviews?.map((review) => {
					const { slug, title, image } = review;
					return (
						<li key={slug} className="bg-white border rounded shadow w-80 hover:shadow-xl">
							<Link href={`reviews/${slug}`}>
								<img
									src={image}
									alt=""
									width="320"
									height="180"
									className="rounded-t"
								/>
								<h2 className="font-orbitron font-semibold py-1 text-center">
									{title}
								</h2>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Reviews;
