/* import React, { useState } from "react";

import axios from "axios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateCards = () => {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        web: "",
        imageurl: "",
        imagealt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const { title, subtitle, description, phone, email, web, imageurl, imagealt, state, country, city, street, houseNumber, zip } = formData;

            const imageData = {
                url: imageurl,
                alt: imagealt
            };

            const addressData = {
                state,
                country,
                city,
                street,
                houseNumber,
                zip
            };

            const postData = {
                title,
                subtitle,
                description,
                phone,
                email,
                web,
                image: imageData,
                address: addressData
            };

            const response = await axios.post(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
                postData,
                {
                    headers: {
                        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQyNGFlOWE4ZDFlYWUxMmQzMWUzNjAiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjk4ODQzNDQyfQ.znXbzyxMKeNrKf3dA8jXQ5CFptM8-iXjeFtqx3XfHD0"
                    }
                }
            );
            console.log("New card created:", response.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/cards");

        } catch (error) {
            console.error("Error creating new card:", error);
        }
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    minLength={2}
                    maxLength={256}
                    required
                />
                <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    placeholder="Subtitle"
                    minLength={2}
                    maxLength={256}
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    minLength={2}
                    maxLength={1024}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    minLength={9}
                    maxLength={11}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    minLength={5}
                    required
                />
                <input
                    type="text"
                    name="web"
                    value={formData.web}
                    onChange={handleChange}
                    placeholder="Website"
                    minLength={7}
                />
                <input
                    type="text"
                    name="imageurl"
                    value={formData.imageurl}
                    onChange={handleChange}
                    placeholder="Image URL"
                    minLength={14}
                    required
                />
                <input
                    type="text"
                    name="imagealt"
                    value={formData.imagealt}
                    onChange={handleChange}
                    placeholder="Image Alt Text"
                    minLength={2}
                    maxLength={256}
                />
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    required
                />
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                />
                <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street"
                    required
                />
                <input
                    type="number"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    placeholder="House Number"
                    min={1}
                    required
                />
                <input
                    type="number"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="ZIP Code"
                    required
                />

                <button type="submit">Create Card</button>
            </form>
        </div>
    );
};

export default CreateCards; */






import { Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import defaultImage from "../assets/user-regular-new.png";

const LikedCardsPage = () => {
    const api = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`;
    const [allCards, setAllCards] = useState<CardType[]>([]);
    /*  const filteredCards = allCards.filter((c) => c.likes.length > 0); */



    const handleLike = (cardId: string) => {

        const updatedCards = allCards.map(card => {
            if (card._id === cardId) {

                const updatedCard = { ...card, likes: [...card.likes, 'user_id'] };
                return updatedCard;
            }
            return card;
        });

        setAllCards(updatedCards);


        axios.patch(`${api}/${cardId}`, null, {
            headers: {
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQyNGFlOWE4ZDFlYWUxMmQzMWUzNjAiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjk4ODQzNDQyfQ.znXbzyxMKeNrKf3dA8jXQ5CFptM8-iXjeFtqx3XfHD0'
            }
        })
            .then((res) => {
                console.log("Like added successfully:", res.data);
            })
            .catch((error) => {
                console.error("Error adding like:", error);
            });
    };

    useEffect(() => {
        axios.get(api).then((res) => {
            setAllCards(res.data);
        });
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center gap-5 mt-2 dark:text-white">
            <Stack>
                {allCards.map((c) => (
                    <div key={c._id} className="flex flex-col justify-center items-center p-5 rounded-md text-center bg-gray-200 m-2 dark:bg-slate-500">
                        <h2>{c.title}</h2>
                        <span>Likes: {c.likes.length}</span>

                        <button onClick={() => handleLike(c._id)}>Like</button>
                        <img
                            src={c.image ? c.image.url : defaultImage}
                            alt={c.image ? c.image.alt : "No image available"}
                            className="w-72 h-48 object-cover mt-3"
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = defaultImage;
                            }}
                        />
                    </div>
                ))}
            </Stack>
        </div>
    );
};

export default LikedCardsPage;









import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinners from "../components/Spinners";
import defaultImage from "../assets/user-regular-new.png";
import { useCards } from "../hooks/useCards";
import "./Cards.scss"

const Cards = () => {
    const { cards, loading, error } = useCards();
    const [favorites, setFavorites] = useState<string[]>(() => {
        const storedFavorites = localStorage.getItem("favorites");
        try {
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (error) {
            console.error("Error parsing favorites from localStorage:", error);
            return [];
        }
    });
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id: string) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter((fav) => fav !== id);
            } else {
                return [...prevFavorites, id];
            }
        });
    };

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col">
            <div className=" bg-stone-200 m-2 dark:bg-slate-500 border rounded-md search-place pl-6">
                <input
                    type="text"
                    placeholder="Search cards..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 my-2 md:ml-6 w-80 border rounded-md custom-input-cards"
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-2 dark:text-white">
                {loading && <Spinners />}
                {error && <div>{error}</div>}
                {filteredCards.map((c) => (
                    <div key={c._id} className="flex flex-col justify-center items-center p-5 rounded-md text-center bg-stone-200 m-2 dark:bg-slate-500 relative drop-shadow-md cards-style">
                        <Link to={`/cards/${c._id}`} className="flex flex-col items-center ">
                            <img
                                src={c.image ? c.image.url : defaultImage}
                                alt={c.image ? c.image.alt : "No image available"}
                                className="w-72 h-48 object-cover mt-3 rounded-md drop-shadow-md"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = defaultImage;
                                }}
                            />
                            <div className="mt-1">
                                <h2 style={{ color: "#ff7e66" }} className="text-l ">{c.title}</h2>
                                <p className="mb-6 text-sm">{c.subtitle}</p>
                            </div>
                        </Link>
                        <button
                            className={`absolute bottom-2 right-2  mr-2 p-1 rounded-md text-sm bg-gray-300 dark:bg-gray-700 ${favorites.includes(c._id) ? 'text-orange-400 dark:text-orange-200' : 'text-gray-500 dark:text-gray-300'}`}
                            onClick={() => toggleFavorite(c._id)}
                        >
                            Favorite

                            {Array.isArray(favorites) && favorites.includes(c._id) ? '🧡' : '🤍'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;






