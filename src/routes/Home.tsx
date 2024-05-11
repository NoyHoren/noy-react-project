import { useCards } from "../hooks/useCards";
import defaultImage from "../assets/user-regular-new.png";
import Slider from "react-slick";

const Home = () => {
    const { cards, loading, error, setCards } = useCards();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl text-center mb-4 text-pink-500 ">Welcome to Noy's page</h1>
            <h2 className="text-xl text-center mb-4 text-pink-500">All the cards that our users made:</h2>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-2 dark:text-white">
                {cards?.map((card: any, index: number) => (
                    <div className="flex flex-col justify-center items-center p-5 rounded-md text-center bg-stone-200 m-2 dark:bg-slate-500 relative drop-shadow-md favorite-cards-style mt-1" key={index}>
                        <div className="flex flex-col items-center ">

                            <img
                                src={card.image ? card.image.url : ""}
                                alt={card.image ? card.image.alt : "No image available"}
                                className="w-72 h-48 object-cover mt-3 rounded-md shadow-md"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = defaultImage;
                                }}
                            />
                            <h2 style={{ color: "hotpink" }} className="text-l px-1 py-0.5 font-bold">{card.title}</h2>


                            <div className=" bg-stone-300 m-2 dark:bg-slate-400 p-5 rounded-md drop-shadow-md  dark:text-white w-80 text-left">
                                <h3 style={{ color: "hotpink" }} className="text-l  py-0.5 font-bold">Address :</h3>
                                <p className="text-sm">City : {card.address.city}, Street : {card.address.street}</p>
                                <p className="text-sm">State : {card.address.state}, Zip :  {card.address.zip}</p>
                                <p className="text-sm">Country : {card.address.country}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home