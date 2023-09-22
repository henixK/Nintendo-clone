import Main1 from "../../public/assets/article/2250x1266_retail-offers_MK8D-Bundle.avif";
import Main2 from "../../public/assets/article/DSC06062.avif";
import News1 from "../../public/assets/article/LHA-1180-MissionsRewards-Icons-ACNH-Sept2023-Social-EN_v01.avif";
import News2 from "../../public/assets/article/2250x1266_BB_Ncom_WhatsNew_EN_v03.avif";
import News3 from "../../public/assets/article/Pikmin_Sep_Calendar.avif";
import News4 from "../../public/assets/article/1920x1080_eShop.avif";

const MainNews = ({ title, img, date, description }) => {
    return (
        <article className="flex flex-col cursor-pointer ">
            <div className=" bg-black z-10 rounded-md overflow-hidden">
            <img className=" z-0 " src={img} alt="" />
            </div>
            <div className="min-h-[120px]">
                <p className="my-3 text-sm lg:text-base">{date}</p>
                <h2 className="text-base lg:text-lg">{title}</h2>
            </div>
            <div className=" min-h-[100px] relative">
                <p className="text-sm lg:text-base mt-2">{description}</p>
                <div>
                    <a className="text-red-500 font-bold border-b-2 border-red-500 text-sm lg:text-base mt-4 absolute bottom-0">
                    Read more
                </a>
                </div>
                
            </div>
        </article>
    );
};

const MiniNews = ({ img, date, title }) => {
    return (
        <article className="flex flex-col cursor-pointer">
            <div className=" bg-black z-10 rounded-md overflow-hidden">
            <img className="z-0 " src={img} alt="" />
            </div>
            <div className="min-h-[170px] lg:min-h-[160px] relative">
                <p className="my-3 text-sm lg:text-base">{date}</p>
                <h2 className="text-sm lg:text-base">{title}</h2>
                <a className="text-red-500 font-bold border-b-2 border-red-500 text-sm lg:text-base mt-4 absolute bottom-0">
                    Read more
                </a>
            </div>
        </article>
    );
};

export default function News() {
    return (
        <section className="lg:px-32 px-5 h-full">
            <h1 className="my-3">News</h1>
            <div className="">
                <div className=" flex gap-5 flex-col lg:flex-row">
                    <MainNews
                        img={Main1}
                        date={"09/05/23"}
                        title={
                            "Nintendo celebrates the holidays early with bundles for Mario Kart 8 Deluxe and Animal Crossing: New Horizons"
                        }
                        description={
                            "Nintendo Switch – Mario Kart 8 Deluxe Bundle and Nintendo Switch Lite Systems, Featuring New Animal Crossing: New Horizons- Inspired Design,..."
                        }
                    />
                    <MainNews
                        img={Main2}
                        date={"09/05/23"}
                        title={"Catch up on what happened at Nintendo Live 2023"}
                        description={
                            "That’s it for the Nintendo Live 2023 event! Whether you joined us in person at the Seattle Convention Center or from home, we hope you had fun! If..."
                        }
                    />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                    <MiniNews
                        img={News1}
                        date={"09/01/23"}
                        title={"Save up to 50% during the Blockbuster Sale!"}
                    />
                    <MiniNews
                        img={News2}
                        date={"09/01/23"}
                        title={"Pluck a free Pikmin 4 calendar wallpaper each month!"}
                    />
                    <MiniNews
                        img={News3}
                        date={"08/31/23"}
                        title={"Celebrate one year of Splatoon 3 (and a brand-new season)!"}
                    />
                    <MiniNews
                        img={News4}
                        date={"08/31/23"}
                        title={
                            "Experience the unexpected in Super Mario Bros. Wonder gameplay presentation"
                        }
                    />
                </div>
                <button className="btn">See all articles</button>
            </div>
        </section>
    );
}
