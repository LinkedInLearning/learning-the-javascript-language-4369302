var counties = [
	'Belknap',
	'Strafford',
	'Carroll',
	'Rockingham'
];

counties[0];
counties[2];

counties[2] = 'Cheshire';
counties;

counties[4] = 'Carroll';
counties;

counties[counties.length] = 'Merrimack';
counties;

counties.push('Coos');
counties;

counties.pop();

delete counties[2];
counties;

counties.splice(2, 1);
counties;
counties.length;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array