/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */

var pathGit = {
  git: {
    strokepath: [
      {
        path:
          'M30.5 24.5c-1.031 0-2.016.188-3.047.328-.812.125-1.625.172-2.453.172s-1.641-.047-2.453-.172c-1.016-.14-2.016-.328-3.047-.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-.734 8.188-5.516-.001-2.391-1.454-4.5-4.001-4.5zM20 32c-1.406 0-2-1.859-2-3s.594-3 2-3 2 1.859 2 3-.594 3-2 3zm10 0c-1.406 0-2-1.859-2-3s.594-3 2-3 2 1.859 2 3-.594 3-2 3z',
        duration: 800
      },
      {
        path:
          'M25 0C11.192 0 0 11.193 0 25s11.192 25 25 25 25-11.193 25-25S38.808 0 25 0zm12.047 31.422C34.984 35.594 29.313 36 25.25 36c-4.125 0-10.141-.359-12.281-4.578-.797-1.578-.969-3.438-.969-5.172 0-2.281.625-4.438 2.125-6.188a8.59 8.59 0 0 1-.422-2.656c0-1.172.266-2.344.797-3.406 2.469 0 4.047 1.078 5.922 2.547A20.895 20.895 0 0 1 25.25 16c1.469 0 2.953.156 4.375.5 1.859-1.453 3.438-2.5 5.875-2.5a7.629 7.629 0 0 1 .797 3.406c0 .891-.141 1.781-.422 2.625C37.375 21.797 38 23.969 38 26.25c0 1.734-.172 3.578-.953 5.172z',
        duration: 1000
      }
    ],
    dimensions: {
      width: 50,
      height: 50
    }
  }
};

/* 
 Setup and Paint your lazyline! 
 */

$(document).ready(function() {
  $('#git')
    .lazylinepainter({
      svgData: pathGit,
      strokeWidth: 2,
      strokeColor: '#e09b99'
    })
    .lazylinepainter('paint');
}); 
