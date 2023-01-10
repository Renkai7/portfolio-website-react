import React from "react";
import { useRouter } from "next/router";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Python <br /> React Developer
				</SectionTitle>
				<SectionText>
					I’m a Developer looking for a new role in an exciting company. I’d
					love you to check out my work!
				</SectionText>
				<Button onClick={props.handleClick}>Learn More</Button>
			</LeftSection>
		</Section>
	);
};

export default Hero;
