module.exports = function (router) {

var version = '/v3';

//CA journey routes


//Opting in and out question
router.post('/optout', function (req, res) {
  var optoutDecision = req.session.data['optoutdecision']

  // Check whether the variable matches a condition
  if (optoutDecision == "yes"){
   
   // Send user to address type page
    res.redirect(version + '/afer/address-input/type-of-address')
  } else {
    // Send user to opt out reason page
    res.redirect(version + '/afer/address-input/opt-out-reason')
  }

});


//Confirmation of inital assessment outcome: Eligible
router.post('/eligibleoutcome', function (req, res) {
  var ConfirmationNav = req.session.data['confirmationnav']

  // Check whether the variable matches a condition
  if (ConfirmationNav == "caselist"){
   
   // Send user to case list page
    res.redirect(version + '/afer/case-list-tab-one')
  } else {
    // Send user to task list page
    res.redirect(version + '/afer/eligibility/tasklist')
  }

});


//Confirmation of inital assessment outcome: Ineligible
router.post('/ineligibleoutcome', function (req, res) {
  var ConfirmationNav = req.session.data['confirmationnav']

  // Check whether the variable matches a condition
  if (ConfirmationNav == "caselist"){
   
   // Send user to case list page
    res.redirect(version + '/afer/case-list-tab-one')
  } else {
    // Send user to task list page
    res.redirect(version + '/afer/eligibility/tasklist')
  }

});


//Confirmation of inital assessment outcome: Unsuitable
router.post('/unsuitableoutcome', function (req, res) {
  var ConfirmationNav = req.session.data['confirmationnav']

  // Check whether the variable matches a condition
  if (ConfirmationNav == "caselist"){
   
   // Send user to case list page
    res.redirect(version + '/afer/case-list-tab-one')
  } else {
    // Send user to task list page
    res.redirect(version + '/afer/eligibility/tasklist')
  }

});



//Address type question
router.post('/addresstype', function (req, res) {
  var addresstypeQuestion = req.session.data['curfewcasAddress']

  // Check whether the variable matches a condition
  if (addresstypeQuestion == "curfew"){
   
   // Send user to postcode look up page
    res.redirect(version + '/afer/address-input/postcode-lookup')
  } else {
    // Send user to cas page
    res.redirect(version + '/afer/address-input/cas')
  }

});


//Add another curfew address or CAS area
router.post('/add-another-address', function (req, res) {
  var addAnotherAddress = req.session.data['add-another-address']

  // Check whether the variable matches a condition
  if (addAnotherAddress == "curfew"){
   
   // Send user to postcode look up page nr. 2
    res.redirect(version + '/afer/address-input/postcode-lookup-2')
  }
  // Check whether the variable matches a condition
  else if (addAnotherAddress == "cas"){

  // Send user to cas page nr. 1
    res.redirect(version + '/afer/address-input/cas');
  }
   // Check whether the variable matches a condition
   else if (addAnotherAddress == "cas2"){

    // Send user to cas page nr. 2
      res.redirect(version + '/afer/address-input/cas-2');
    }

    // Check whether the variable matches a condition
   else if (addAnotherAddress == "no"){

    // Send user to check your answers page
      res.redirect(version + '/afer/address-input/check-your-answers');
    }
});


//Postpone application during pre decision checks
router.post('/postpone', function (req, res) {
  var postponeApplication = req.session.data['postponeapplication']

  // Check whether the variable matches a condition
  if (postponeApplication == "yes"){
   
   // Send user to address type page
    res.redirect(version + '/afer/postpone/postpone-this-application')
    
  } else {
    // Send user to opt out reason page
    res.redirect(version + '/afer/case-overview')
  }

});


//Postpone application during pre release checks
router.post('/postponeprepareforrelease', function (req, res) {
  var PrepareForRelease = req.session.data['prepareforrelease']

  // Check whether the variable matches a condition
  if (PrepareForRelease == "no"){
   
   // Send user to address type page
    res.redirect(version + '/afer/postpone/postpone-this-application')
    
  } else {
    // Send user to opt out reason page
    res.redirect(version + '/afer/case-overview')
  }

});



//PP journey routes


//Suitablity decision residential addresses
router.post('/residentialsuitablitydecision', function (req, res) {
  var SuitabilityDecisionNav = req.session.data['suitabilityDecision']

  // Check whether the variable matches a condition
  if (SuitabilityDecisionNav == "cancel"){
   
   // Send user to case overview page if suitablity decision has been made and confirm outcome
    res.redirect(version + '/afer/addresses/residential/address-details-2')

  } else {

    // Send user back to address details page
    res.redirect(version + '/afer/case-overview')
  }

});




//Address checks navigating back
router.post('/addresschecks', function (req, res) {
  var Navigation = req.session.data['nav']

  // Check whether the variable matches a condition
  if (Navigation == "overview"){
   
   // Send user to case list page
    res.redirect(version + '/afer/case-overview')
  } else {
    // Send user to task list page
    res.redirect(version + '/afer/addresses/tasklist')
  }

});


}
//THE END OF AFER ROUTES