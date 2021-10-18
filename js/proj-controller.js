'use strict';

renderProjects();

function renderProjects() {
  var progects = getProjects();
  var elProjects = document.querySelector('.bg-light .container').children[1];
  var strHtml = '';
  progects.forEach((project) => {
    strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal"
        href="#" onclick ="onCurrProj(${project.id})">
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
        <div class="badge d-flex align-items-center justify-content-center ">`;
    for (var i = 0; i < project.labels.length; i++) {
      strHtml += `<div class="d-inline p-2"><h5><span class="badge bg-secondary mx-2">${project.labels[i]}</span></h5></div>`;
    }
    strHtml += `</div></div>`;
    renderModal(project.id)
  });
  elProjects.innerHTML = strHtml;
}

function onCurrProj(projectId) {
    console.log('yes');
    renderModal(projectId)
    return `#portfolioModal${projectId}`
}

function renderModal(projectId) {
  var project = getProjById(projectId)
  console.log(project);
  var elModal = document.querySelector('.portfolio-modal')
  console.log(elModal);
  var strHtml = `  <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
  <h2>${project.name}</h2>
  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="">
  <p>${project.desc}</p>
  <ul class="list-inline">
    <li>Date: ${project.publishedAt}</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
    </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
  `
  elModal.innerHTML= strHtml
  console.log(elModal);
//   return `href="#portfolioModal${project.id}"`

}
