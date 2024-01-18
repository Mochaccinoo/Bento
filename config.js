// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

  
	// General
	name: 'Lena',
	openInNewTab: true,
	twelveHourFormat: true,
  	title: 'New Tab',

	// Theme
	theme: 'rose-pine',
	imageBackground: false,
  imageUrl: './assets/background.jpg', // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'b2333100d9f33d45a3fd8d739a0af757', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '39.047',
	defaultLongitude: '-77.377',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

  	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
  	changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0',
		},
		{
			id: '2',
			name: 'calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/u/0/r',
		},
		{
			id: '3',
			name: 'youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
		{
			id: '4',
			name: 'twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv',
		},
		{
			id: '5',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '6',
			name: 'instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0',
		},
		{
			id: '2',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/u/0/r',
		},
		{
			id: '3',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
		{
			id: '4',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv',
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '6',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com',
		},
	],


	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'keyboard',
			id: '1',
			links: [
				{
					name: 'r/mk',
					link: 'https://www.reddit.com/r/MechanicalKeyboards',
				},
				{
					name: 'r/mm',
					link: 'https://www.reddit.com/r/mechmarket',
				},
				{
					name: 'geekhack',
					link: 'https://geekhack.org',
				},
				{
					name: 'mechgb',
					link: 'https://www.mechgroupbuys.com',
				},
			],
		},
		{
			icon: 'skull',
			id: '2',
			links: [
				{
					name: 'slavart',
					link: 'https://slavart.gamesdrive.net',
				},
				{
					name: 'cmacked',
					link: 'https://cmacked.com',
				},
				{
					name: 'libgen',
					link: 'https://libgen.rs',
				},
				{
					name: '1337',
					link: 'https://1337x.to',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
