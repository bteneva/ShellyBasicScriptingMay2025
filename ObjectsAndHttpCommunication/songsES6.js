class Song {
    constructor(type, name, duration) {
        this.type = type;
        this.name = name;
        this.duration = duration;
    }
}

function processData(input) {
    const songs = [];
    const criteriaType = input[input.length - 1];

    for (let i = 0; i < input.length - 1; i++) {
        const [type, name, duration] = input[i];
        const song = new Song(type, name, duration);
        songs.push(song);
    }

    return songs.filter(song => song.type === criteriaType);
}

const input = [
    ['favourite', 'DownTown', '3:14'],
    ['favourite', 'Kiss', '4:16'],
    ['favourite', 'Smooth Criminal', '4:01'],
    'favourite'
];

const result = processData(input);

result.forEach(song => console.log(song.name));
