import React, { Component } from 'react';
import Countdown from './components/Countdown';
import Fire from './assets/fire.gif';
import Particles from 'react-particles-js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			tmr: new Date('Apr 5, 2019 20:50:30'),
			years: 0,
			days: 0,
			hours: 7,
			min: 59,
		sec: 59,
			millsec: 0,
		};
	}
	getCountDown(data) {
		this.setState(data);
	}
	render() {
		const { tmr, hours, min,sec } = this.state;
		console.log(hours >= 0 && min!=0 && sec!=0);
		return (
			<div className="App col">
				<div style={{ minWidth: '830px', minHeight: '180px' }} className="row">
					<div className="col">
						<img
							style={{
								position: 'relative',
								top: hours >= 0 ? (hours === 0 ? `calc(30% + ${(3600 - min*60-sec)/60}%)` : '30%') : '0',
								width: (hours >= 0 && (min!=0 || sec!=0)) ? (hours === 0 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								// top: hours >= 0 ? (hours === 0 ? `${3600 - min}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
				</div>
				<div style={{ minWidth: '1440px', minHeight: '155.25px' }} className="row">
					<div className="col">
						<img
							style={{
								position: 'relative',
								left: hours >= 7 ? (hours === 7 ? `calc(20% + ${(3600 - min*60-sec) / 1920}%)` : '20%') : '0',
								width: hours >= 7 ? (hours === 7 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								top: hours >= 7 ? (hours === 7 ? `${(3600 - min*60-sec) * 0.02}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
					<div className="col">
						<img
							style={{
								position: 'relative',
								right: hours >= 1 ? (hours === 1 ? `calc(20% + ${(3600 - min*60-sec) / 960}%)` : '20%') : '0',
								width: hours >= 1 ? (hours === 1 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								top: hours >= 1 ? (hours === 1 ? `${(3600 - min*60-sec) * 0.02}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
				</div>
				<div style={{ minWidth: '1440px', minHeight: '155.25px' }} className="row">
					<div className="col">
						<img
							style={{
								position: 'relative',
								left: hours >= 6 ? (hours === 6 ? `calc(5% + ${(3600 - min*60-sec) / 3840}%)` : '5%') : '0',
								width: hours >= 6 ? (hours === 6 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								top: hours >= 6 ? (hours === 6 ? `${(3600 - min*60-sec) * 0.02}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
					<div className="col">
						<img
							style={{
								position: 'relative',
								right: hours >= 2 ? (hours === 2 ? `calc(5% + ${(3600 - min*60-sec) / 1920}%)` : '5%') : '0',
								width: hours >= 2 ? (hours === 2 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								top: hours >= 2 ? (hours === 2 ? `${(3600 - min*60-sec) * 0.02}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
				</div>
				<div style={{ minWidth: '1440px', minHeight: '155.25px' }} className="row">
					<div className="col">
						<img
							style={{
								position: 'relative',
								left: hours >= 5 ? (hours === 5 ? `calc(20% + ${(3600 - min*60-sec) / 960}%)` : '20%') : '0',
								width: hours >= 5 ? (hours === 5 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								top: hours >= 5 ? (hours === 5 ? `${(3600 - min*60-sec) * 0.02}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
					<div className="col">
						<img
							style={{
								position: 'relative',
								right: hours >= 3 ? (hours === 3 ? `calc(20% + ${(3600 - min*60-sec) / 1920}%)` : '20%') : '0',
								width: hours >= 3 ? (hours === 3 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
								top: hours >= 3 ? (hours === 3 ? `${(3600 - min*60-sec) * 0.02}%` : '0') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
				</div>
				<div style={{ minWidth: '830px', minHeight: '180px' }} className="row">
					<div className="col">
						<img
							style={{
								position: 'relative',
								top: hours >= 4 ? (hours === 4 ? `calc(-30% + ${(3600 - min*60-sec) * 0.02}%)` : '-30%') : '0',
								width: hours >= 4 ? (hours === 4 ? `calc(30% - ${(3600 - min*60-sec) / 150}%)` : '30%') : '0',
							}}
							src={Fire}
							alt="fire"
						/>
					</div>
				</div>
				<Countdown date={tmr} getCountDown={data => this.getCountDown(data)} />
				{/* <Particles
					params={{
						polygon: {
							enable: true,
							type: 'inside',
							move: {
								radius: 10,
							},
							url: 'path/to/svg.svg',
						},
					}}
				/> */}
			</div>
		);
	}
}

export default App;
