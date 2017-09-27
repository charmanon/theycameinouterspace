import React, { Component } from 'react';
import zooz from '../images/Zooz1.jpg';
import mynx from '../images/Mynx.jpg';
import zoozmynx from '../images/ZoozMynx.jpg';
import zoozshot from '../images/ZoozShoot.jpg';
import $ from 'jquery';
import { MediaBox, Row, Col, Slider, Slide } from 'react-materialize';

class Bio extends Component {
	render() {
		return (
			<div className="">
				<p className="flow-text container landing">
					<Row>
						<Col s={12}>
							<h4>
								<b>About H.W. Zoozman</b>
							</h4>
						</Col>
					</Row>
					<Row>
						<Col s={6} l={6}>
							<img
								src={zooz}
								title="H.W. Zoozman"
								className="responsive-img zooz"
							/>
							<img
								src={mynx}
								title="Clara Mynx Devlin"
								className="responsive-img"
							/>
							<img
								src={zoozmynx}
								title="Zoozman and his three times wife Devlin in repose"
								className="responsive-img"
							/>
						</Col>
						<Col s={6} l={6}>
							<div className="quote">
								<b className="strong">
									"If it’s not nailed down, it’s mine. And if I can pry it up,
									it’s not nailed down."
								</b>
							</div>
							<p>
								That was the philosophy of “Passion Pit Pasha” Herbert W.
								Zoozman, producer of 137 motion pictures, including “They Came
								in Outer Space.” Zoozman was one of the original “40 Thieves”
								who invented the exploitation film racket in the 1930’s. In the
								30’s he produced “Jail Bait Baby” and “Vice Racket Vixen.” In
								the 40’s, “Strip, Strip Hooray!” (aka “Hollywood Girlesk”). In
								the 50’s, “Nudist Confidential,” “Atomic Nympho!” and “Beatnik
								Dope Racket!”
							</p>
							<p>
								{' '}
								He was married eleven times, including three times to Clara
								“Mynx” Devlin and twice to “Nymph O’ Maniac,” prominent
								interpreter of exotic dances. His son, Herbert W. Zoozman Jr.
								produced this reinvention of his father’s favorite cine-epic.
								Zoozman Jr. has made a career of burnishing his father’s legacy
								while pursuing his own career as a producer, with films like
								<b>“Wet T-shirt Weekend!”</b> and{' '}
								<b>“Missionary Position Impossible.”</b>
							</p>
						</Col>
					</Row>
					<Row>
						<Col s={12}>
							<h4>
								<b>The original 1950's "They Came in Outer Space"</b>
							</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<img
								src={zoozshot}
								title="The Zoozmans shooting Atomic Nympho!"
								className="responsive-img"
							/>
						</Col>
						<Col>
							<p>
								It’s difficult to separate truth from legend in the making of
								the original <b>“They Came In Outer Space.”</b> Was it really
								shot in the Mojave Desert in five days? Was it really filmed for
								eleven thousand dollars? Were the actors really paid in “canned
								goods and repairable appliances”?? Even today film scholars are
								struggling to discover the raw, unvarnished truth about the
								production of this classic. Most of these film scholars were
								mesmerized by the film when it was (endlessly) screened on
								late-night television in the 60’s and 70’s, sometimes under its
								original title, <b>“When Girls Collide.”</b>
							</p>
						</Col>
						<Col />
					</Row>
					<br />
				</p>
			</div>
		);
	}
}

export default Bio;
