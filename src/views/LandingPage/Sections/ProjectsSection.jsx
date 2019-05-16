import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import Button from '../../../components/CustomButtons/Button.jsx';
import Card from '../../../components/Card/Card.jsx';
import CardBody from '../../../components/Card/CardBody.jsx';
import CardFooter from '../../../components/Card/CardFooter.jsx';
import projectsStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/projectsStyle.jsx';
import {
	followup,
	nytreact,
	savethedate,
	burgerSQL,
	friendfinderpic,
	liripic,
	rpspic,
	hangmanpic,
	giphypic,
	hearthstonepic,
	starwarspic
} from '../../../assets/img/projects/index.js';

import { Link } from 'react-router-dom';

class ProjectsSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.imgRaised, classes.imgRounded, classes.imgFluid);
		return (
			<div className={classes.section}>
				<h2 className={classes.title}>Projects</h2>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://followup-crm.herokuapp.com">
										<img src={followup} alt="hearthstone" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Follow Up
									<br />
									<small className={classes.smallTitle}>Node, React, MySQL</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										This is a full-stack Javascript app built using Express, React and a MySQL
										database. It's designed to be used by sales people as a sales tracker and
										contact management system.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/followup">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://nytfancysearch.herokuapp.com">
										<img src={nytreact} alt="hearthstone" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									NY Times React Search
									<br />
									<small className={classes.smallTitle}>Node, React, MongoDB</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										React app built using a Express/Mongo DB backend. Allows users to search and
										save articles.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/ny-react">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://hsdeckbuilder.herokuapp.com">
										<img src={hearthstonepic} alt="hearthstone" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Hearthstone
									<br />
									<small className={classes.smallTitle}>Ruby on Rails</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Built using a Ruby on Rails backend with React.Js on the frontend. User
										authentication built using the Devise gem. Allows Hearthstone players to create
										and share decks with other users.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/hearthstone">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<Link to="/hangman">
										<img src={hangmanpic} alt="hangman" className={imageClasses} />
									</Link>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Word Guessing Game
									<br />
									<small className={classes.smallTitle}>React.Js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Word guessing game built using React.js. Users can guess various letters of a
										given word. Much like Wheel of Fortune.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/Hangman-React">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<Link to="/giphy">
										<img src={giphypic} alt="giphy" className={imageClasses} />
									</Link>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Giphy
									<br />
									<small className={classes.smallTitle}>React.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										App that displays various gifs that are pulled from the Giphy API using Fetch
										calls.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/giphy">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<Link to="/starwars">
										<img src={starwarspic} alt="starwars" className={imageClasses} />
									</Link>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Star Wars
									<br />
									<small className={classes.smallTitle}>React.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										An RPG made using React.Js. Players can pick one of four different characters
										and then fight the remaining characters as enemies.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/unit-4-game/">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<Link to="/rps">
										<img src={rpspic} alt="rock paper scissors" className={imageClasses} />
									</Link>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Rock Paper Scissors (Multiplayer)
									<br />
									<small className={classes.smallTitle}>React.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Built using React.js and Firebase, users can complete against each other in Rock
										Paper Scissors. Chat history and user info is pushed and pulled to Google's
										Firebase, which in turn manages a large part of the application's state.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/React-Firebase-RockPaperScissors">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://github.com/picholasnaridon/Liri">
										<img src={liripic} alt="liri pic" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Liri
									<br />
									<small className={classes.smallTitle}>Node.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Super simple command line app for interacting with Twitter, Spotify and OMDB
										APIs.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/Liri">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://bestfriendsforever123.herokuapp.com/">
										<img src={friendfinderpic} alt="friend pic" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Friend Zone
									<br />
									<small className={classes.smallTitle}>Node.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Node app built using Express and Handlebars. Allows users to find their true
										love!
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/friend-finder">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://thehamburgler.herokuapp.com/">
										<img src={burgerSQL} alt="friend pic" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Node + Sequelize
									<br />
									<small className={classes.smallTitle}>Node.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Node app using a MySQL backend to show off CRUD actions.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/sequelize">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://savethedate.herokuapp.com/">
										<img src={savethedate} alt="friend pic" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Save the Date
									<br />
									<small className={classes.smallTitle}>Node.js</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Node app with a MySQL backend that uses the Twilio API to get you out of a bad
										date. Uses Passport for user authentication.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/project-two">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(projectsStyle)(ProjectsSection);
