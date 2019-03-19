exports.linkResolver = function linkResolver(doc) {

    if (doc.type) {
      switch (doc.type) {
        case 'article':
          return `/article/${doc.uid}`;
  
        default:
          if (doc.uid) {
            return `/${doc.uid}`;
          }
  
          return `/${doc.type}`;
      }
    }
  
    return '/';
  };
  
  exports.componentResolver = function componentResolver(doc) {
    // if (doc.type === 'article') {
    //   return require('../pages/article');
    // }
    return () => null;
  };