import Image from "next/image";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				<div className="home__content grid">
					<Social />
					<div className="home__img">
						<Image
							src="/assets/about1.jpg"
							alt="Syafri Surya"
							fill
							priority
							className="home__img-element"
							sizes="(max-width: 350px) 180px, (max-width: 768px) 200px, (max-width: 992px) 250px, 300px"
						/>
					</div>
					<Data />
				</div>
				<ScrollDown />
			</div>
		</section>
	);
};

export default Home;
