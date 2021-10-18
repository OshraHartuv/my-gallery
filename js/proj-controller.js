'use strict'

renderProjects()

function renderProjects(){
    var progects = getProjects();
    var elProjects = document.querySelector('.bg-light .container').children[1]
    var strHtml = ''
    progects.forEach((project) =>{
        strHtml +=
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.desc}</p>
        </div>
        <div class="badge d-flex align-items-center justify-content-center ">`
        for (var i= 0 ; i < project.labels.length; i++){
             strHtml += `<div class="d-inline p-2"><h5><span class="badge bg-secondary mx-2">${project.labels[i]}</span></h5></div>`
        }
        strHtml += `</div></div>`
    }
    )
    elProjects.innerHTML = strHtml;
}