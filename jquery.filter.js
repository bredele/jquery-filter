(function($) {

  // Plugin definition.
  $.fn.filter = function(options) {
    var settings = $.extend({
      namespace: "filter"
    }, options );
    var search = new Search(settings.namespace);
    this.on('filter', function(event, str, className){
      search.run(str, className);
    });
    return search;
  };


  /**
   * Search constructor.
   * @param {String} namespace
   * @api private
   */

  function Search(namespace){
    this.namespace = namespace;
    this.style = document.createElement('style');
    document.head.appendChild(this.style);
  }


  /**
   * Run search.
   * @param {String} value
   * @param {string} className
   * @api private
   */

  Search.prototype.run = function(value, className) {
    var itemClass = className || 'filter-item';
    debugger
    var query = "";
    if(value) {
      query = "." + itemClass + ":not([data-" + this.namespace + "*=\'" + value + "']) { display: none; }";
    }
    this.style.innerHTML = query;
    return this;
  };

})(jQuery);