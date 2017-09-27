import React, { Component } from 'react';
import { Row } from 'react-materialize';
import amazon from '../images/amazon.png';
import google from '../images/google.png';
import itunes from '../images/itunes.png';
import googleassist from '../images/googleassist.png';
import alexa from '../images/alexa.png';

class Play extends Component {
	render() {
		return (
			<div className="lower-text music play-container container">
				<Row>
					<h4>
						<b>Play "They Came in Outer Space" Now</b>
					</h4>
					<h5>H.W. Zoozman, needs you!</h5>
				</Row>
				<div className="play">
					<a className="grey-text text-lighten-3" href="#!">
						<img
							className="responsive-img google"
							src={googleassist}
							alt="Google Play Link"
						/>
					</a>

					<a className="grey-text text-lighten-3" href="#!">
						<img className="responsive-img" src={google} alt="Google Link" />
					</a>

					<a className="grey-text text-lighten-3" href="#!">
						<img className=" responsive-img " src={itunes} alt="iTunes Link" />
					</a>

					<a className="grey-text text-lighten-3" href="#!">
						<img className=" responsive-img " src={alexa} alt="Amazon Link" />
					</a>
				</div>
			</div>
		);
	}
}

export default Play;
