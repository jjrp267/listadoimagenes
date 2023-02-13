
function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'imageList.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let jsonData = [];

for (let i = 0; i < 4000; i++) {

    let randNumber = getRandomIntInclusive(1,4000);

    let data =  {
        id: i,
        randNumber: randNumber,
        photo: 'https://picsum.photos/id/' + randNumber + '/367/267',
        text: randNumber + "random_lorem_ipsum_text"
        };
        jsonData.push(data);
}

exportToJsonFile(jsonData);
