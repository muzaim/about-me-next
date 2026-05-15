import type { ProjectItem } from "./Data";
import LearningProject from "./LearningProject";
import ProfessionalProject from "./ProfessionalProject";

type WorksItemsProps = {
	item: ProjectItem;
	index: number;
};

const WorksItems = ({ item, index }: WorksItemsProps) => {
	if (item.category === "professional") {
		return <ProfessionalProject item={item} index={index} />;
	}

	return <LearningProject item={item} index={index} />;
};

export default WorksItems;
