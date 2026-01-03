import Marquee from "react-fast-marquee";
import AbBank from "../../assets/Partners/abBank.png"
import Bkash from "../../assets/Partners/bkash.png"
import IslamiBank from "../../assets/Partners/islamiBank.png"
import Mcash from "../../assets/Partners/mcash.png"
import Nagad from "../../assets/Partners/nagad.png"
import Rocket from "../../assets/Partners/rocket.png"
const PartnersSection = () => {
    const partner = [
        Bkash,
        AbBank,
        IslamiBank,
        Mcash,
        Nagad,
        Rocket
    ]
  return (
    <section className="py-20">
      <div className=" mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-content-base mb-8">
          Our Partners
        </h2>

        <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {
                partner.map((p, index) => <div className="flex items-center space-x-12" key={index}>
            <img
              src= {p}
              className="h-16 px-10"
            />
          </div>)
            }
          
        </Marquee>
      </div>
    </section>
  );
};

export default PartnersSection;
