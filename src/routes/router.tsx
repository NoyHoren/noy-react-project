
import "../index.css";
import { createBrowserRouter } from "react-router-dom";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import Cards from "./Cards.tsx";
import Error from "./Error.tsx";
import Root from "../layouts/Root.tsx";
import Card from "./Card.tsx";
import Home from "./Home.tsx";
import ProtectedRoute from "../components/ProtecetdRoute.tsx";
import Profile from "./Profile.tsx";
import FavoriteCards from "./FavoriteCards.tsx";
import CreateCard from "./CreateCard.tsx";
import MyCards from "./MyCards.tsx";
import LikedCardsPage from "./LikedCardsPage.tsx";
import CardEdit from "./CardEdit.tsx";
import SandBox from "./SandBox.tsx";
import UserEditor from "./UserEditor.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            {
                path: "/cards", element:
                    <ProtectedRoute>
                        <Cards />
                    </ProtectedRoute>
            },
            {
                path: "/sandbox", element:
                    <ProtectedRoute>
                        <SandBox />
                    </ProtectedRoute>
            },
            {
                path: "/userEditor/:id", element:
                    <ProtectedRoute>
                        <UserEditor />
                    </ProtectedRoute>
            },
            {
                path: "/likedCardsPage", element:

                    <LikedCardsPage />

            },
            {
                path: "/createcard", element:
                    <ProtectedRoute>
                        <CreateCard />
                    </ProtectedRoute>
            },

            {
                path: "/cards/:id", element: (
                    <ProtectedRoute>
                        <Card />
                    </ProtectedRoute>
                )
            },
            {
                path: "/cardEdit/:id", element: (
                    <ProtectedRoute>
                        <CardEdit />
                    </ProtectedRoute>
                )
            },
            {
                path: "/favoritecards", element: (
                    <ProtectedRoute>
                        <FavoriteCards />
                    </ProtectedRoute>
                )
            },

            {
                path: "/mycards", element: (
                    <ProtectedRoute>
                        <MyCards />
                    </ProtectedRoute>
                )
            },

            {
                path: "/profile", element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            }
        ],
    },
]); 