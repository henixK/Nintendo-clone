import React from "react";

//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SmallLayout from "./components/SmallLayout";
import Characters from "./components/Character";
import LayoutMarket from "./components/Market";
import { MiniCard } from "./components/Card";
import Card from "./components/Card";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import News from "./components/News";

//Online store section
import kirby from "../public/assets/section/MNS___June_2023_Multi_Banner_4576x704_Desktop.avif";
import kirby2 from "../public/assets/section/MNS___June_2023_Multi_Banner_1372x640_Desktop.avif";

//Gaming system section
import nintendoSwitch from "../public/assets/section/Nintendo_Switch_family_wide_TEST-1.avif";
import nintendoSwitch2 from "../public/assets/section/Nintendo_Switch_family_wide_TEST-1 (1).avif";

import Quiz from "../public/assets/section/1925x1080_NL2023-Quiz_mobile.avif";
import Quiz2 from "../public/assets/section/3580x1080_NL2023-Quiz_desktop_v2.avif";
import mario from "../public/assets/hero/1_Ncom_SMW.avif";

export default function App() {
  return (
    <div className="h-full">
      <Navbar />
      <Header />
      <SmallLayout
        title={"Feature"}
        image={Quiz}
        image2={Quiz2}
        secondTitle={
          "Test your Nintendo knowledge online and earn My Nintendo™️ Platinum Points*!"
        }
        button={"Take the quiz!"}
      >
        <Featured>
          <MiniCard
            img={mario}
            title={"The Legend of Zelda™: Tears of the Kingdom"}
          />
          <MiniCard
            img={mario}
            title={"The Legend of Zelda™: Tears of the Kingdom"}
          />
          <MiniCard
            img={mario}
            title={"The Legend of Zelda™: Tears of the Kingdom"}
          />
          <MiniCard
            img={mario}
            title={"The Legend of Zelda™: Tears of the Kingdom"}
          />
          <MiniCard
            img={mario}
            title={"The Legend of Zelda™: Tears of the Kingdom"}
          />
        </Featured>
      </SmallLayout>
      <SmallLayout
        title={"Online store"}
        image={kirby2}
        image2={kirby}
        secondTitle={
          "Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over."
        }
        button={"Start shopping"}
      />
      <hr />
      <SmallLayout
        title={"Gaming systems"}
        image={nintendoSwitch}
        image2={nintendoSwitch2}
        secondTitle={"Find the perfect Nintendo Switch system for you."}
        button={"Explore now"}
      />
      <hr />
      <News />
      <hr />
      <Characters />
      <hr />
      <div className="mb-36 ">
        <LayoutMarket title={"Digital best sellers"}>
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
        </LayoutMarket>
        <LayoutMarket title={"Digital new releases"}>
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
          <Card img={mario} title={"Mario"} date={"22/12/97"} price={"400€"} />
        </LayoutMarket>
      </div>
      <Footer />
    </div>
  );
}
