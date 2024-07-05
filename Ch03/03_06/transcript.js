var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

counties[0];
counties[2];

counties[2] = "Cheshire";
counties;

counties[4] = "Carroll";
counties;

counties[counties.length] = "Merrimack";
counties;

counties.push("Coos");
counties;

counties.pop();

delete counties[2];
counties;
//this will not delete the space occupied by counties[2], to delete space use splice.

counties.splice(2, 1);
//2=position of the item to delete, 1= no of items to delete.
counties;
counties.length;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
