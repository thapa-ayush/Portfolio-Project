exports.home = function(req, res, next) {
    res.render('index', { 
      title: 'Home',
      userName: req.user ? req.user.username : '' 
     });
  }
exports.about = function(req, res, next) {
    res.render('about', { 
      title: 'About me',
      userName: req.user ? req.user.username : ''
     });
  }
exports.projects = function(req, res, next) {
    res.render('projects', { 
      title: 'Projects',
      userName: req.user ? req.user.username : ''
     });
  }
exports.services = function(req, res, next) {
    res.render('services', { 
      title: 'Services',
      userName: req.user ? req.user.username : ''
     });
  }
exports.contact = function(req, res, next) {
    res.render('contact', { 
      title: 'Contact me',
      userName: req.user ? req.user.username : ''
     });
  }  
  

