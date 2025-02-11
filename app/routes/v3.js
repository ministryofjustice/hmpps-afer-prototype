module.exports = function (router) {

var version = '/v3';

  //CA journey routes

  //Opting in and out question
  router.post(version + '/optout', function (req, res) {
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
  router.post(version + '/eligibleoutcome', function (req, res) {
    var ConfirmationNav = req.session.data['confirmationnav']
    // Check whether the variable matches a condition
    if (ConfirmationNav == "caselist"){
     
     // Send user to case list page
      res.redirect(version + '/afer/case-list-tab-one')
    } else {
      // Send user to task list page
      res.redirect(version + '/afer/case-overview')
    }
  });

  //Confirmation of inital assessment outcome: Ineligible
  router.post(version + '/ineligibleoutcome', function (req, res) {
    var ConfirmationNav = req.session.data['confirmationnav']
    // Check whether the variable matches a condition
    if (ConfirmationNav == "caselist"){
     
     // Send user to case list page
      res.redirect(version + '/afer/case-list-tab-one')
    } else {
      // Send user to task list page
      res.redirect(version + '/afer/case-overview')
    }
  });

  //Confirmation of inital assessment outcome: Unsuitable
  router.post(version + '/unsuitableoutcome', function (req, res) {
    var ConfirmationNav = req.session.data['confirmationnav']
    // Check whether the variable matches a condition
    if (ConfirmationNav == "caselist"){
     
     // Send user to case list page
      res.redirect(version + '/afer/case-list-tab-one')
    } else {
      // Send user to task list page
      res.redirect(version + '/afer/case-overview')
    }
  });

  //Address type question
  router.post(version + '/addresstype', function (req, res) {
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
  router.post(version + '/add-another-address', function (req, res) {
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
  router.post(version + '/postpone', function (req, res) {
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
  router.post(version + '/postponeprepareforrelease', function (req, res) {
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


//Speak with the POM
router.post(version + '/speakwithpom', function (req, res) {
  var RiskChecks = req.session.data['RiskChecks']
  // Check whether the variable matches a condition
  if (RiskChecks == "completed"){
   
   // Send user to case overview page if suitablity decision has been made and confirm outcome
    res.redirect(version + '/afer/case-overview')
  } else {
    // Send user back to address details page
    res.redirect(version + '/afer/case-overview')
  }
});


  

  //Suitablity decision residential addresses
  router.post(version + '/residentialsuitablitydecision', function (req, res) {
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
  router.post(version + '/addresschecks', function (req, res) {
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


  //CAS accommodation eligbility question
  router.post(version + '/caseligibility', function (req, res) {
    var CASeligible = req.session.data['CASeligible']
    // Check whether the variable matches a condition
    if (CASeligible == "CASeligibleYes"){
    
    // Send user to case overview page if suitablity decision has been made and confirm outcome
      res.redirect(version + '/afer/addresses/cas/accommodation-type')
    } else {
      // Send user back to address details page
      res.redirect(version + '/afer/addresses/outcomes/cas-ineligible')
    }
  });


//CAS-1 VLO question
router.post(version + '/casvloquestion', function (req, res) {
  var cas1assessment = req.session.data['cas1assessment']
  // Check whether the variable matches a condition
  if (cas1assessment == "complete"){
   
   // Send user to case overview page if suitablity decision has been made and confirm outcome
    res.redirect(version + '/afer/case-overview')
  } else {
    // Send user back to address details page
    res.redirect(version + '/afer/addresses/tasklist')
  }
});


  //CAS-1 Application submission
  router.post(version + '/applicationsubmission', function (req, res) {
    var cas1submitted = req.session.data['cas1submitted']
    // Check whether the variable matches a condition
    if (cas1submitted == "yes"){
    
    // Send user to case overview page if suitablity decision has been made and confirm outcome
      res.redirect(version + '/afer/case-overview')
    } else {
      // Send user back to address details page
      res.redirect(version + '/afer/addresses/cas/cas1-apply-placement')
    }
  });


  //CAS-1 outcome
router.post(version + '/cas1outcome', function (req, res) {
  var ApprovedPremisesOutcome = req.session.data['ApprovedPremisesOutcome']
  // Check whether the variable matches a condition
  if (ApprovedPremisesOutcome == "completed"){
   
   // Send user to case overview page if suitablity decision has been made and confirm outcome
    res.redirect(version + '/afer/case-overview')
  } else {
    // Send user back to address details page
    res.redirect(version + '/afer/case-overview')
  }
});


    //CAS area B unsuitable
    router.post(version + '/suitabilitycheckb', function (req, res) {
      var cas2suitableAreaB = req.session.data['cas2suitableAreaB']
      // Check whether the variable matches a condition
      if (cas2suitableAreaB == "no"){
      
      // Send user to case overview page if suitablity decision has been made and confirm outcome
        res.redirect(version + '/afer/addresses/outcomes/cas-unsuitable')
      } else {
        // Send user back to address details page
        res.redirect(version + '/afer/addresses/tasklist')
      }
    });


    //Confirmation of CAS assessment outcome: Unsuitable
    router.post(version + '/casareasunsuitable', function (req, res) {
      var confirmationnav = req.session.data['confirmationnav']
      // Check whether the variable matches a condition
      if (confirmationnav == "alternatives"){
      
      // Send user to case overview page if suitablity decision has been made and confirm outcome
        res.redirect(version + '/afer/addresses/cas/cas2-alternatives')
      } else {
        // Send user back to address details page
        res.redirect(version + '/afer/addresses/send-checks-prison')
      }
    });



    //CAS area C suitable
    router.post(version + '/suitabilitycheckc', function (req, res) {
      var cas2suitableAreaC = req.session.data['cas2suitableAreaC']
      // Check whether the variable matches a condition
      if (cas2suitableAreaC == "no"){
      
      // Send user to case overview page if suitablity decision has been made and confirm outcome
        res.redirect(version + '/afer/addresses/outcomes/cas-unsuitable')
      } else {
        // Send user back to address details page
        res.redirect(version + '/afer/addresses/outcomes/cas-suitable')
      }
    });


//CAS area D suitable
router.post(version + '/suitabilitycheckd', function (req, res) {
  var cas2suitableAreaD = req.session.data['cas2suitableAreaD']
  // Check whether the variable matches a condition
  if (cas2suitableAreaD == "no"){
  
  // Send user to case overview page if suitablity decision has been made and confirm outcome
    res.redirect(version + '/afer/addresses/outcomes/cas-unsuitable')
  } else {
    // Send user back to address details page
    res.redirect(version + '/afer/addresses/outcomes/cas-suitable')
  }
});



    //CAS-2 no preference: Enter details for new area
  router.post(version + '/cas2newarea', function (req, res) {
    var cas2addedarea = req.session.data['cas2addedarea']
    // Check whether the variable matches a condition
    if (cas2addedarea == "yes"){
     
     // Send user to case list page
      res.redirect(version + '/afer/addresses/cas/cas2-suitability-d')
    } else {
      // Send user to task list page
      res.redirect(version + '/afer/addresses/tasklist')
    }
  });



  //Confirmation of CAS assessment outcome: Suitable
  router.post(version + '/cassuitableoutcome', function (req, res) {
    var ConfirmationNav = req.session.data['confirmationnav']
    // Check whether the variable matches a condition
    if (ConfirmationNav == "sendtoprison"){
     
     // Send user to case list page
      res.redirect(version + '/afer/addresses/send-checks-prison')
    } else {
      // Send user to task list page
      res.redirect(version + '/afer/case-overview')
    }
  });



  

    



  }
  //THE END OF AFER ROUTES