import Image from "next/image";
import type { LearningProjectItem } from "./Data";

type LearningProjectProps = {
	item: LearningProjectItem;
	index: number;
};

const LearningProject = ({ item, index }: LearningProjectProps) => {
	return (
		<div
			className="work__card reveal-card"
			data-aos="card-reveal"
			data-aos-delay={index * 180}
			data-aos-duration="820"
			data-aos-anchor-placement="top-bottom"
		>
			<Image
				src={item.image}
				alt={item.title}
				width={295}
				height={200}
				className="work__img"
				sizes="(max-width: 576px) calc(100vw - 4rem), 295px"
			/>
			<div className="work__data">
				<h3 className="work__title">{item.title}</h3>
				<p className="work__tools">{item.tools}</p>
			</div>
			<div className="work__description">{item.desc}</div>
			{item.link && (
				<a
					href={item.link}
					className="work__button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Demo{" "}
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</a>
			)}
		</div>
	);
};

export default LearningProject;
