import stopwatch from './img/stopwatch.png';
import team from './img/team.png';
import weather from './img/weather.png';

export default function getActivity() {
    return [
      {id: 'stopwatch', name: 'Stopwatch', logo: stopwatch, address: 'https://stopwatch.cykcykacz.now.sh/', details:'A stopwatch is a handheld timepiece designed to measure the amount of time that elapses between its activation and deactivation. A large digital version of a stopwatch designed for viewing at a distance, as in a sports stadium, is called a stopclock. In manual timing, the clock is started and stopped by a person pressing a button. In fully automatic time, both starting and stopping are triggered automatically, by sensors.'},
      {id: 'team', name: 'Team', logo: team, address: 'https://state-one-inky.now.sh/', details:'As defined by Professor Leigh Thompson of the Kellogg School of Management, "[a] team is a group of people who are interdependent with respect to information, resources, and skills and who seek to combine their efforts to achieve a common goal".'},
      {id: 'weather', name: 'Weather', logo: weather, address: 'https://weatherengland.cykcykacz.now.sh/', details: 'Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time. People have attempted to predict the weather informally for millennia and formally since the 19th century. Weather forecasts are made by collecting quantitative data about the current state of the atmosphere at a given place and using meteorology to project how the atmosphere will change.'},
    ];
}
