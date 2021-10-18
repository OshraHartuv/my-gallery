'use strict'

// https://oshrahartuv.github.io/Minesweeper/




var gProjects = [
    {
        id: 'mine-sweeper',
        name: 'Minesweeper',
        title:'Be carefull of the mines!',
        desc: 'My first sprint',
        publishedAt: 'October 18th 2021',
        labels: ['Matrix', 'Game']
    }
]

function getProjects(){
    return gProjects;
}

function getProjById(projectId) {
    return gProjects.find((project) => {
        project.id === projectId;
        return project;
      })
}