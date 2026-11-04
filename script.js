//your JS code here. If required.

const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to remove A, An and The
function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '');
}

// Sort bands alphabetically
bands.sort((a, b) => {
    return strip(a).localeCompare(strip(b));
});

// Select the unordered list
const bandList = document.querySelector('#band');

// Display sorted bands
bandList.innerHTML = bands
    .map(band => `<li>${band}</li>`)
    .join('');
