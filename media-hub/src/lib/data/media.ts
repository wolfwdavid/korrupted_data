export interface MangaEntry {
	name: string;
	tags: string[];
	read: boolean;
	rating: string;
	status: 'Read' | 'Reading' | 'Paused';
	readOn: string;
	chaptersRead: number;
	chapters: number;
	progressPercent: number;
}

export interface VideogameEntry {
	name: string;
	tags: string[];
	rating: string;
	link?: string;
}

export interface BookEntry {
	name: string;
	author: string;
	tags: string[];
	read: boolean;
	rating: string;
	status: string;
	pagesRead: number;
	pages: number;
	progressPercent: number;
	endedOn: string;
}

export interface YearlyGoal {
	name: string;
	accomplished: number;
	goal: number;
	progressPercent: number;
}

export interface SpotifyCategory {
	label: string;
	playlists: string[];
}

export const manga: MangaEntry[] = [
	{
		name: 'Shingeki no kyojin',
		tags: ['action', 'apocalyptic', 'science fiction'],
		read: true,
		rating: '★★★★½',
		status: 'Read',
		readOn: '2021',
		chaptersRead: 139,
		chapters: 139,
		progressPercent: 100
	},
	{
		name: 'The promissed neverland',
		tags: ['fantasy', 'science fiction', 'thriller'],
		read: false,
		rating: '★★★★★',
		status: 'Reading',
		readOn: '2021',
		chaptersRead: 115,
		chapters: 184,
		progressPercent: 63
	},
	{
		name: 'Kimetsu no yaiba',
		tags: ['adventure', 'fantasy', 'martial arts'],
		read: false,
		rating: '',
		status: 'Paused',
		readOn: '2021',
		chaptersRead: 11,
		chapters: 205,
		progressPercent: 5
	}
];

export const videogames: VideogameEntry[] = [
	{
		name: 'My Candy Love',
		tags: ['online', 'otome', 'visual novel'],
		rating: '★★★★',
		link: 'https://www.corazondemelon.es/'
	},
	{
		name: 'The sims 2: ultimate collection',
		tags: ['simulation'],
		rating: '★★★★★'
	},
	{
		name: 'Betrayal',
		tags: ['multiplayer', 'online', 'strategy'],
		rating: '★★★½',
		link: 'https://betrayal.io/'
	},
	{
		name: 'Among us',
		tags: ['multiplayer', 'online', 'strategy'],
		rating: '★★★★½'
	}
];

export const books: BookEntry[] = [
	{
		name: 'I want to be where the normal people are',
		author: 'Rachel Bloom',
		tags: ['autobiography'],
		read: true,
		rating: '★★★★½',
		status: 'Read',
		pagesRead: 220,
		pages: 220,
		progressPercent: 100,
		endedOn: 'March 25, 2021'
	}
];

export const yearlyGoals: YearlyGoal[] = [
	{ name: 'Movies', accomplished: 20, goal: 100, progressPercent: 20 },
	{ name: 'Books', accomplished: 1, goal: 10, progressPercent: 10 },
	{ name: 'Manga', accomplished: 1, goal: 5, progressPercent: 20 }
];

export const socialLinks = [
	{
		name: 'Letterboxd',
		url: 'https://letterboxd.com/ailuwu/',
		icon: 'https://64.media.tumblr.com/tumblr_lnvuxfysJL1qepbs7.gif'
	},
	{
		name: 'Anilist',
		url: 'https://anilist.co/user/ailinya',
		icon: 'https://64.media.tumblr.com/tumblr_lkl5t0Gb4T1qfamg6.gif'
	},
	{
		name: 'Goodreads',
		url: 'https://www.goodreads.com/user/show/64485987-prima-donna',
		icon: 'https://media.giphy.com/media/fxbEj0a96a6ctYyIsz/giphy.gif'
	}
];

export const favorites = {
	Series: ['Crazy ex girlfriend', 'Shingeki no kyojin', 'Bojack Horseman'],
	Movies: ['Cinema Paradiso', 'Mamma Mia', 'The Rocky Horror Picture Show', 'Les Miserables'],
	Books: ['La historia interminable'],
	Manga: ['Shingeki no Kyojin', 'The promised Neverland'],
	Games: ['The sims 2', 'Gartic phone', 'Among us', 'Mafia', 'Digital: a love story'],
	Music: ['Taylor Swift', 'Mozart', 'ABBA']
};

export const mediaCategories = [
	{
		name: 'Movies',
		image: 'https://i.pinimg.com/236x/ee/c9/7c/eec97cef018802c79ccd46a7c1c3933b.jpg',
		href: '#movies'
	},
	{
		name: 'Manga',
		image: '/images/1.jpg',
		href: '/manga'
	},
	{
		name: 'Series',
		image: 'https://i.pinimg.com/564x/fe/b8/4f/feb84fcced4abd69e123a6a64366a36d.jpg',
		href: '#series'
	},
	{
		name: 'Videogames',
		image: 'https://i.pinimg.com/564x/3b/33/b9/3b33b9158df26f355424259cc38b5c14.jpg',
		href: '/videogames'
	},
	{
		name: 'Books',
		image: '/images/2.jpg',
		href: '/books'
	},
	{
		name: 'Music',
		image: 'https://i.pinimg.com/564x/1d/d0/06/1dd0060c420293762cbcd7cf1d7110ff.jpg',
		href: '/music'
	}
];

export const musicPlaylists: SpotifyCategory[] = [
	{
		label: 'By year',
		playlists: [
			'https://open.spotify.com/playlist/5It2D4kX5fZzo278jgeX1e',
			'https://open.spotify.com/playlist/6GgXqxkScodd6XOsmpTIpj'
		]
	},
	{
		label: 'By artist',
		playlists: [
			'https://open.spotify.com/playlist/0tYcUim83qNLfzz9b4mPVb',
			'https://open.spotify.com/playlist/1xZgWtmgBycLdJ6oTDPBrb',
			'https://open.spotify.com/playlist/1a5tA13lv6lHv1ymmrd9Ku',
			'https://open.spotify.com/playlist/4iUP1SIFGtBMqXzl7gv6Xs'
		]
	},
	{
		label: 'Study',
		playlists: ['https://open.spotify.com/playlist/0NvuNtZJJw481mC0jblp09']
	},
	{
		label: 'Dedicated',
		playlists: [
			'https://open.spotify.com/playlist/1q2kwpTpLYKXqRyORIsvo3',
			'https://open.spotify.com/playlist/2YRodoBdhzBXg6giVoaF6q'
		]
	},
	{
		label: 'Repertoir',
		playlists: [
			'https://open.spotify.com/playlist/7lWa3FaCifAHflvcQNoXYq',
			'https://open.spotify.com/playlist/6HGgGdlZyJxtV5Y936NFrb',
			'https://open.spotify.com/playlist/3rqxohNPEnzTQgis9y0uIR'
		]
	},
	{
		label: 'Discord w/ friends',
		playlists: ['https://open.spotify.com/playlist/7xMUZBiVO7w5UhqHPvTZO4']
	},
	{
		label: 'At home',
		playlists: ['https://open.spotify.com/playlist/7k8hNJwpxjSgaZ3boBT6LH']
	},
	{
		label: 'Romantic',
		playlists: [
			'https://open.spotify.com/playlist/3PWUIdzKVtPbBrEnQGTi5y',
			'https://open.spotify.com/playlist/3PABgwZG7KpHjZxN3Nyxwk'
		]
	}
];
