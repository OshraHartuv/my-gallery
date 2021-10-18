'use strict'

var gProjects = [
    {
        id: 'mine-sweeper',
        name: 'Minesweeper',
        title:'Be carefull of the mines!',
        desc: 'My first sprint',
        publishedAt: 'October 18th 2021',
        labels: ['Matrix', 'Game'],
        url : 'https://oshrahartuv.github.io/Minesweeper/'
    },
    {
        id: 'in-picture-game',
        name : 'In-Picture Game',
        title: 'How well do you know dog breeds?',
        desc: 'Match the photo to the dog breed. and most importantly, remember to love them all!',
        publishedAt:  'September 29th 2021',
        labels:['Quiz', 'Dogs', 'Game'],
        url: 'https://oshrahartuv.github.io/in-picture/'
    },
    {
        id: 'Touch Nums',
        name : 'touch-nums',
        title: 'Let\'s see how fast you can touch all the numbers on the board',
        desc: 'You can choose between three levels, how fast can you go?',
        publishedAt:  'September 29th 2021',
        labels:['Board', 'Game'],
        url: 'https://oshrahartuv.github.io/in-picture/'
    },
]


function getProjects(){
    return gProjects;
}

function getProjById(projectId) {
    return gProjects.find((project) => {
        // console.log(projectId);
        // console.log(project.id);
        // console.log(project);
        return project.id === `${projectId}`;
         
      })
}