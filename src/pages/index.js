import Hero from "../components/Hero/Hero";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import { Layout } from "../Layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
		</Layout>
	);
};

export default Home;
