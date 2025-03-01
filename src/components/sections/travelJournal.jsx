import mountain from "../../assets/images/mountain-fuji.jpg";
import marker from "../../assets/marker.png";
import palma from "../../assets/images/palma.jpg";
import peguera from "../../assets/images/peguera.jpg";
import katu from "../../assets/images/rainfall-katu.jpg";

function renderTravel() {
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = `Morning`;
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = `Afternoon`;
    } else if (hours < 21) {
        timeOfDay = `Evening`;
    } else {
        timeOfDay = `Night`;
    }

    function RenderTravelCard(props) {
        return (
            <>
                <article className="travel-journal__item bg-white p-[20px] shadow-lg flex">
                    <div className="w-[125px] h-[168px] rounded-[5px] shrink-0 mr-[19px]">
                        <img
                            className="w-[100%] h-[100%] object-cover"
                            src={props.placeImg}
                            alt={props.imgAlt}
                        />
                    </div>
                    <div className="">
                        <img
                            className="w-[7px] mr-[4px] inline-block"
                            src={marker}
                            alt="marker"
                        />
                        <span className="uppercase text-[.7rem] mr-[12px]">
                            {props.locationTitle}
                        </span>
                        <a
                            className="text-[#2B283A] text-[.7rem] visited:text-[#918E9B] hover:text-[#000]"
                            href={props.locationLink}
                        >
                            View on Google
                        </a>

                        <h2 className="mt-[7px] mb-[17px] text-[1.5rem] font-[700]">
                            {props.placeTitle}
                        </h2>
                        <time dateTime="2021-06-12" className="font-bold">
                            12 Jan, 2021 - 24 Jan, 2025
                        </time>
                        <p className="text-[.8rem] leading-[1.5]">
                            {props.travelExperience}
                        </p>
                    </div>
                </article>
            </>
        );
    }

    return (
        <>
            <div className="travel-journal__section pt-[50px] pb-[50px]">
                <div className="container mx-w-6xl ml-auto mr-auto">
                    <div className="travel-journal__list grid grid-cols-2 gap-x-[20px] gap-y-[25px]">
                        <RenderTravelCard
                            locationTitle="Japan"
                            locationLink="https://www.google.ru/maps/place/%D0%A4%D1%83%D0%B4%D0%B7%D0%B8%D1%8F%D0%BC%D0%B0/@35.3606421,138.7170636,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                            placeTitle="Mountain Fuji"
                            placeImg={mountain}
                            imgAlt="mountain"
                            travelExperience="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia id quas dolorum esse cum! Odio minima perferendis dolorum quam accusamus natus ipsa a placeat iure. Dolores nihil corrupti incidunt."
                        />
                        <RenderTravelCard
                            locationTitle="Italy"
                            locationLink="https://maps.app.goo.gl/d3cfE6Hw5be7FJRR7"
                            placeTitle="Peguera"
                            placeImg={peguera}
                            imgAlt="peguera"
                            travelExperience="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia id quas dolorum esse cum! Odio minima perferendis dolorum quam accusamus natus ipsa a placeat iure. Dolores nihil corrupti incidunt."
                        />

                        <RenderTravelCard
                            locationTitle="Spain"
                            locationLink="https://maps.app.goo.gl/xCH2qm4t1M9jbaJt8"
                            placeTitle="Palma"
                            placeImg={palma}
                            imgAlt="peguera"
                            travelExperience="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia id quas dolorum esse cum! Odio minima perferendis dolorum quam accusamus natus ipsa a placeat iure. Dolores nihil corrupti incidunt."
                        />

                        <RenderTravelCard
                            locationTitle="Usa"
                            locationLink="https://maps.app.goo.gl/xCH2qm4t1M9jbaJt8"
                            placeTitle="Rainfall-katu"
                            placeImg={katu}
                            imgAlt="katu"
                            travelExperience="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia id quas dolorum esse cum! Odio minima perferendis dolorum quam accusamus natus ipsa a placeat iure. Dolores nihil corrupti incidunt."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default renderTravel;
