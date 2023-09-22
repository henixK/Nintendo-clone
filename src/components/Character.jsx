import marioBg from "../../public/assets/characters/mario-bg.avif";
import zeldaBg from "../../public/assets/characters/zelda-bg.avif";
import splatoonBg from "../../public/assets/characters/splatoon-bg.avif";
import kirbyBg from "../../public/assets/characters/kirby-bg.avif";
import mario from "../../public/assets/characters/mario.avif";
import zelda from "../../public/assets/characters/zelda.avif";
import splatoon from "../../public/assets/characters/splatoon.avif";
import kirby from "../../public/assets/characters/kirby.avif"

const CardCharacters = ({ backgroundImg, img, title }) => {
    return (
        <a className="w-[170px] lg:w-[270px]">
            <div className="relative rounded-md overflow-hidden">
                <img src={backgroundImg} alt="" />
                <img className="absolute inset-0" src={img} alt="" />
            </div>
            <h2 className="text-xl font-bold my-2">{title}</h2>
        </a>
    );
};

export default function Characters() {
    return (
        <section className="lg:px-32 px-5 w-full -z-10 relative">
            <h1>Characters</h1>
            <div className="grid grid-cols-2 lg:flex justify-center gap-5 my-5">
                <CardCharacters
                    backgroundImg={marioBg}
                    img={mario}
                    title={"Super Mario™"}
                />
                <CardCharacters
                    backgroundImg={zeldaBg}
                    img={zelda}
                    title={"The Legend of Zelda™"}
                />
                <CardCharacters
                    backgroundImg={splatoonBg}
                    img={splatoon}
                    title={"Splatoon™"}
                />
                <CardCharacters backgroundImg={kirbyBg} img={kirby} title={"Kirby™"} />
            </div>
        </section>
    );
}
