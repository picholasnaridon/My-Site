import LandingPage from "views/LandingPage/LandingPage.jsx";
import StarWars from "views/StarWars/StarWars";
import Giphy from "views/Giphy/Giphy"
import RockPaperScissors from "views/RPS/RockPaperScissors"
import Board from "views/Hangman/Board"

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/starwars", name: "StarWars", component: StarWars },
  { path: "/giphy", name: "Giphy", component: Giphy },
  { path: "/rps", name: "RockPaperScissors", component: RockPaperScissors },
  { path: "/hangman", name: "Hangman", component: Board }
];

export default indexRoutes;
