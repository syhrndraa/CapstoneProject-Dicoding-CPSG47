const About = {
    async render() {
      return `
      <style>
        main{
            margin: 150px 0px;
        }
        .about{
            border: 0px;
        }
      </style>

              <div class="headline">
                  <div>
                      <img src="ionic.png" class="d-block w-100 gambar-tengah" alt="gambar carousell"></img>
                  </div>
                  <div>
                  <div class="col-70">
                      <div class="card about">
                          <div class="card-body">
                              <h3 class="card-title fw-bolder mb-3">Contact Us!</h3>
                              <p class="card-text fw-bolder">Informasi Test Drive dan Pembelian Hubungi</p>
                              <p class="card-text">Mike Sutisna \n Senior Sales Manager</p>
                              <a href="#" class="btn btn-card mt-3 btn-lg">mike.sales@gmail.com</a>
                              <a href="#" class="btn btn-card mt-3 btn-lg">+62122272773</a>
                          </div>
                      </div>
                  </div>
              </div> 
          `;
    },
  
    async afterRender() {},
  };
  
  export default About;
  