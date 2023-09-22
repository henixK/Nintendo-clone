import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Data from "../../public/data.json";
import { Esrb, Nintendo } from "@acme/icons";
import America from "../../public/assets/FlagUsaIconRegionSelect.webp";


const FooterContent = ({ title, li }) => {
    return (
        <div className=" px-6 border-l border-[#dadada] h-min col-auto">
            <h2 className="mb-4 text-base">{title}</h2>
            <ul className="flex flex-col gap-2 font-bold max-h-[200px]">{li}</ul>
        </div>
    );
};

export default function Footer() {
    const sectionStyle = {
        backgroundColor: "rgb(230, 0, 18)",
    };
    return (
        <footer className="mt-10 relative w-full h-full">
            <section
                style={sectionStyle}
                className="lg:p-8 flex lg:flex-row py-8 gap-10 flex-col items-center w-full justify-between"
            >
                <Nintendo style={{ width: "200px", fontSize: "3em" }} />
                <div className="flex gap-8 lg:gap-16 text-white">
                    <BsFacebook size={30} />
                    <BsInstagram size={30} />
                    <BsTwitter size={30} />
                    <BsYoutube size={30} />
                </div>
            </section>
            <section className="grid gap-10 justify-center lg:grid-cols-6 py-8">
                {Data &&
                    Data.footer.map((data) => (
                        <FooterContent
                            key={data.key}
                            title={data.title}
                            li={data.li.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        />
                    ))}
            </section>
            <div className=" border-2  border-black w-full flex justify-end">
                <Esrb style={{ fontSize: "7rem" }} />
            </div>
            <div className="py-32 px-10 lg:p-8 bg-[#242424] h-full w-full flex flex-col gap-10 lg:flex-row items-center font-thin text-white text-[10px] lg:text-sm justify-between ">
                <p className=" ">
                    © Nintendo. Games are property of their respective owners. Nintendo of
                    America Inc. Headquarters are in Redmond, Washington, USA
                </p>
                <ul className="flex gap-5 text-[10px] text-center lg:text-sm font-bold">
                    <div>Contact us</div>
                    <div>Website feedback</div>
                    <div>Terms of Use</div>
                    <div>Documents & Policies</div>
                    
                </ul>
                <div className="flex items-center gap-2">
                        <span>
                            <img alt="" src={America} />
                        </span>
                        English (United States)
                    </div>
            </div>
        </footer>
    );
}
