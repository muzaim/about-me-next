import Image from "next/image";
import type { ProfessionalProjectItem } from "./Data";

type ProfessionalProjectProps = {
	item: ProfessionalProjectItem;
	index: number;
};

const ProfessionalProject = ({ item, index }: ProfessionalProjectProps) => {
	return (
		<div
			className="work__card work__card--professional reveal-card"
			data-aos="card-reveal"
			data-aos-delay={index * 180}
			data-aos-duration="820"
			data-aos-anchor-placement="top-bottom"
		>
			<div className="work__professional-header">
				<div className="work__company-profile">
					<div
						className={`work__company-logo ${
							item.logoVariant
								? `work__company-logo--${item.logoVariant}`
								: ""
						}`}
					>
						{item.logo ? (
							<Image
								src={item.logo}
								alt={`${item.company} logo`}
								width={88}
								height={76}
								className="work__company-logo-img"
							/>
						) : (
							<span>{item.companyInitial}</span>
						)}
					</div>

					<div>
						<h3 className="work__title">{item.projectName}</h3>
						<p className="work__company">{item.company}</p>
					</div>
				</div>

				<div className="work__professional-meta">
					<span>{item.tools}</span>
					<span>{item.duration}</span>
				</div>
			</div>

			<ul className="work__responsibilities">
				{item.responsibilities.map((responsibility) => (
					<li key={responsibility}>{responsibility}</li>
				))}
			</ul>
		</div>
	);
};

export default ProfessionalProject;
