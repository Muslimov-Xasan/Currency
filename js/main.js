// Top list
var elCurrencyCourceRUB = document.querySelector(".currency__item:nth-child(1) .currency__item__text");
var elCurrencyCourceUSD = document.querySelector(".currency__item:nth-child(2) .currency__item__text");
var elCurrencyCourceEUR = document.querySelector(".currency__item:nth-child(3) .currency__item__text");


var elCurrencyForm = document.querySelector(".currency__form");
var elCurrencyInputTo = elCurrencyForm.querySelector(".currency__input");
var elCurrencyInputDo = elCurrencyForm.querySelector(".currency__inner:nth-child(2) .currency__input");
var elCurrencySelectTo = elCurrencyForm.querySelector(".currency__select");
var elCurrencySelectDo = elCurrencyForm.querySelector(".currency__inner:nth-child(2) .currency__select");


getCurrency();
async function getCurrency() {
  var response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  var data = await response.json();
  var result = await data; //-->

  
  var rub = 10000 / result.Valute.UZS.Value; //Calculate 1rub in UZS
  var usd = result.Valute.USD.Value * rub;
  var eur = result.Valute.EUR.Value * rub;


  elCurrencyCourceRUB.textContent = rub.toFixed(2);
  elCurrencyCourceUSD.textContent = usd.toFixed(2);
  elCurrencyCourceEUR.textContent = eur.toFixed(2);

  elCurrencyForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var currencyTypeTo = elCurrencySelectTo.value;
    var currencyTypeDo = elCurrencySelectDo.value;

    var currencySum = Number(elCurrencyInputTo.value.trim());

    if (currencyTypeTo == "USD") {
      currencySum = currencySum * usd;

      if (currencyTypeDo == "USD") {
        elCurrencyInputDo.value = (currencySum / usd).toFixed(2);
      } else if (currencyTypeDo == "EUR") {
        elCurrencyInputDo.value = (currencySum / eur).toFixed(2);
      } else if (currencyTypeDo == "RUB") {
        elCurrencyInputDo.value = (currencySum / rub).toFixed(2);
      } else if (currencyTypeDo == "UZS") {
        elCurrencyInputDo.value = currencySum.toFixed(2);
      }
    } else if (currencyTypeTo == "EUR") {
      currencySum = currencySum * eur;

      if (currencyTypeDo == "USD") {
        elCurrencyInputDo.value = (currencySum / usd).toFixed(2);
      } else if (currencyTypeDo == "EUR") {
        elCurrencyInputDo.value = (currencySum / eur).toFixed(2);
      } else if (currencyTypeDo == "RUB") {
        elCurrencyInputDo.value = (currencySum / rub).toFixed(2);
      } else if (currencyTypeDo == "UZS") {
        elCurrencyInputDo.value = currencySum.toFixed(2);
      }
    } else if (currencyTypeTo == "RUB") {
      currencySum = currencySum * rub;

      if (currencyTypeDo == "USD") {
        elCurrencyInputDo.value = (currencySum / usd).toFixed(2);
      } else if (currencyTypeDo == "EUR") {
        elCurrencyInputDo.value = (currencySum / eur).toFixed(2);
      } else if (currencyTypeDo == "RUB") {
        elCurrencyInputDo.value = (currencySum / rub).toFixed(2);
      } else if (currencyTypeDo == "UZS") {
        elCurrencyInputDo.value = currencySum.toFixed(2);
      }
    } else if (currencyTypeTo == "UZS") {
      if (currencyTypeDo == "USD") {
        elCurrencyInputDo.value = (currencySum / usd).toFixed(2);
      } else if (currencyTypeDo == "EUR") {
        elCurrencyInputDo.value = (currencySum / eur).toFixed(2);
      } else if (currencyTypeDo == "RUB") {
        elCurrencyInputDo.value = (currencySum / rub).toFixed(2);
      } else if (currencyTypeDo == "UZS") {
        elCurrencyInputDo.value = currencySum.toFixed(2);
      }
    }
  });
}
