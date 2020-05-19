(function () {
  tinymce.create('tinymce.plugins.ajaxloadmore', {
    init: function (editor, url) {
      // Register commands
      var w = document.body.clientWidth / 1.3,
          h = document.body.clientHeight / 1.3;
      if(w > 900) w = 900;
      if(h > 600) h = 600;
      editor.addCommand('alm_mcebutton', function () {
        editor.windowManager.open({
          title: "Ajax Load More: Shortcode Builder",
          file: ajaxurl + '?action=alm_lightbox', // file that contains HTML for our modal window
          width: w, // size of our window
          height: h , // size of our window
          inline: 1
        }, 
        {
          plugin_url: url
        });
      });
      // Register Shortcode Button
      editor.addButton('alm_shortcode_button', {
        title: 'Insert Ajax load More',
        cmd: 'alm_mcebutton',
        classes: 'widget btn ajax-load-more-btn',
        image: url + '/../../img/alm-logo-16x16.svg'
      });

    }
  });

  // Register plugin
  tinymce.PluginManager.add('alm_shortcode_button', tinymce.plugins.ajaxloadmore);

})();