
import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CardsData, CardsVerMas } from "../cards/productos/"

const AnimatedCard = () => {


    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => {

        setShowContent((prevState) => !prevState);
    };

    return (
        <div className="cardContainer">

            {/* cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mb-10 lg:mb-10 gap-6">
                {CardsData.map(({ id, img, title, desc, link }) => {
                    return (
                        <div
                            key={id}
                            className=" text-white shadow-md rounded-lg overflow-hidden relative group "
                        >
                            <img
                                src={img}
                                alt="animatecard"
                                loading="lazy"
                                className=" w-full  max-w-[350px] h-[450px] lg:w-full lg:max-w-[400px] lg:h-[450px] rounded-lg"
                            />

                            {/* overlay section */}
                            <div className="absolute left-0 top-[-100%] opacity-1 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                <div className="space-y-4">
                                    <Slide cascade>
                                        <h1 className="text-3xl font-bold">{title}</h1>
                                        <Fade cascade damping={0.05}>
                                            <div className="desc">
                                                {desc}

                                            </div>
                                        </Fade>
                                        <div>
                                            <Link to={link}>
                                                <button className="btn_acceso px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                                                    SABER MÁS
                                                </button>
                                            </Link>
                                        </div>
                                    </Slide>
                                </div>
                            </div>

                        </div>

                    );
                })}

            </div>

            <div>

                <section className="mb-4" id="hiddenText" style={{ display: showContent ? 'block' : 'none' }}>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
                        {CardsVerMas.map(({ id, img, title, desc, link }) => {
                            return (
                                <div
                                    key={id}
                                    className=" text-white shadow-md rounded-lg overflow-hidden relative group "
                                >
                                    <img
                                        src={img}
                                        loading="lazy"
                                        alt="animatecard"
                                        className="w-full  max-w-[350px] h-[450px] lg:w-full  lg:max-w-[400px] lg:h-[450px] rounded-lg"
                                    />

                                    {/* overlay section */}
                                    <div className=" absolute left-0 top-[-100%] opacity-1 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                        <div className="space-y-4">
                                            <Slide cascade>
                                                <h1 className="text-3xl font-bold">{title}</h1>
                                                <Fade cascade damping={0.05}>
                                                    <div className="desc">
                                                        {desc}

                                                    </div>
                                                </Fade>
                                                <div>
                                                    <Link to={link}>
                                                        <button className="btn_acceso px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                                                            SABER MÁS
                                                        </button>
                                                    </Link>
                                                </div>
                                            </Slide>
                                        </div>
                                    </div>

                                </div>

                            );
                        })}



                    </div>

                </section>

                <div className="mb-8 lg:mb-8">
                    <button className="cardsProductos " onClick={handleShowContent}>VER MÁS...</button>

                </div>






            </div>
        </div>
    );
};

export default AnimatedCard;