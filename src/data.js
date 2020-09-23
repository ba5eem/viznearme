import React from 'react';

export const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
export const attribution = "<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>____";
export const center = { lat: 21.459272, lng: -157.836156 };
export const rectangle = [[51.49, -0.08], [51.5, -0.06]]
export const polyline_coords = [
    [21.46, -157.83],
    [21.45, -157.82],
    [21.46, -157.84],
    [21.465972, -157.839117],
    [21.46, -157.83]
];

export const path_coords = [
    [21.476, -157.798],
    [21.459263, -157.834353]
];

export const path_options = {"delay":400,"dashArray":[10,20],"weight":5,"color":"#0000FF","pulseColor":"#FFFFFF","paused":false,"reverse":false}

export const rect_bounds = [
	[21.4647, -157.8391],
	[21.4652, -157.833],
	[21.46, -157.83],
	[21.46, -157.84]
	];

export const API_KEY = 'c29dbf0ff87453acc3fc18403c2f61c5';

export const precisionRound = (number, precision) => {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

const result = {
    cloudCover: 'number',
    dewPoint: 'n',
    humidity: 'n',
    icon: 'string',
    pressue: 'n',
    time: 'n',
    uvIndex: 'n',
    visibility: 'n',
    windBearing: 'n',
    windDirection: 'E',
    windGust: 'n',
    windSpeed: 'n'
}
