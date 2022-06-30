import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
      this._button = button;
      this._drawer = drawer;
      this._content = content;
      this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    
    const skipLinkElem = document.querySelector('.skip-link');    
    skipLinkElem.addEventListener('click', (event) => {      
        event.preventDefault();
        document.querySelector('#maincontent').focus();
    });
    skipLinkElem.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('#maincontent').focus();
      }
    });

    const calButton = document.querySelector('#priceCheck');
    calButton.addEventListener('click', (event) => {
        event.preventDefault();
        let result = 0;
        let credit = 0;
        let creditInterest = 0;
        let tenor = 0;
        const price = document.querySelector(".car-type");
        const dp = document.querySelector("#inputDP");
        const creditYear = document.querySelector("#inputKredit");
        if(creditYear.value == 1){
          result = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
        }
        if(creditYear.value == 2){
          tenor = (278/10000)/12;
          credit = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
          creditInterest = (parseInt(price.value)-parseInt(dp.value))*tenor;
          result = credit + creditInterest;
        }
        if(creditYear.value == 3){
          tenor = (288/10000)/12;
          credit = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
          creditInterest = (parseInt(price.value)-parseInt(dp.value))*tenor;
          result = credit + creditInterest;
        }
        if(creditYear.value == 4){
          tenor = (358/10000)/12;
          credit = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
          creditInterest = (parseInt(price.value)-parseInt(dp.value))*tenor;
          result = credit + creditInterest;
        }
        if(creditYear.value == 5){
          tenor = (468/10000)/12;
          credit = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
          creditInterest = (parseInt(price.value)-parseInt(dp.value))*tenor;
          result = credit + creditInterest;
        }
        if(creditYear.value == 6){
          tenor = (568/10000)/12;
          credit = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
          creditInterest = (parseInt(price.value)-parseInt(dp.value))*tenor;
          result = credit + creditInterest;
        }
        if(creditYear.value == 7){
          tenor = (668/10000)/12;
          credit = (parseInt(price.value)-parseInt(dp.value))/(parseInt(creditYear.value)*12);
          creditInterest = (parseInt(price.value)-parseInt(dp.value))*tenor;
          result = credit + creditInterest;
        }
        const rupiah = (number) =>{
          return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
          }).format(number);
        }
        document.querySelector("#total_amount").value = rupiah(parseInt(result));
        // console.log(result);
    });
  }
}
   
export default App;
