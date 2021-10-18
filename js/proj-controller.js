'use strict';

renderProjects();

function renderProjects() {
  var progects = getProjects();
  var elProjects = document.querySelector('.bg-light .container').children[1];
  var strHtml = '';
  progects.map((project) => {
    strHtml += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${project.id}')">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" >
                <div class="portfolio-hover">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
        <div class="badge d-flex align-items-center justify-content-center ">`;
    for (var i = 0; i < project.labels.length; i++) {
      strHtml += `<div class="d-inline p-2"><h5><span class="badge bg-secondary mx-2">${project.labels[i]}</span></h5></div>`;
    }
    strHtml += `</div></div></div>`;
  });
  elProjects.innerHTML = strHtml;
  console.log('elProjects', elProjects);
}

function renderModal(projectId) {
    console.log(projectId);
  var project = getProjById(projectId)
//   console.log('project', project);
  var elModal = document.querySelector('.portfolio-modal')
  var strHtml = `<div class="modal-dialog">
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
  <p class="item-intro text-muted">${project.title}</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="">
  <p>${project.desc}</p>
  <ul class="list-inline">
    <li>Date: ${project.publishedAt}</li>
  </ul>
  <a class ="projec-link" href="${project.url}"  target="_blank" style="display:block">Check out this project</a>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
    </div>
    </div>
  </div>
</div>
</div>
</div>`
  elModal.innerHTML= strHtml
  console.log(elModal);
}
