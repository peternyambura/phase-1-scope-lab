const customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone';
  leastFavoriteCustomer = 'new name'; 
}

module.exports = {
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};
