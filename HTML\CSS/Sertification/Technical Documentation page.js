<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      background-color: #3a3240;
    }

    a {
      color: #92869c;
    }

    a:hover {
      background-color: #92869c;
      color: #3a3240;
    }

    #navbar {
      border-style: solid;
      border-width: 5px;
      border-color: #92869c;
      height: 100%;
      top: -5px;
      left: -5px;
      padding: 5px;
      text-align: center;
      color: #92869c;
    }

    @media (min-width: 480px) {
      #navbar {
        position: fixed;
      }
    }

    main {
      margin-left: 220px;
      color: #92869c;
    }

    header {
      font-size: 20pt;
    }

    code {
      background-color: #92869c;
      border-style: dashed;
      border-width: 2px;
      border-color: #92869c;
      padding: 5px;
      color: black;
    }

    footer {
      text-align: center;
    }
  </style>
  <title>Technical Documentation</title>
</head>
<body>
  <nav id="navbar">
    <header>
      <h1>Technical Documentation</h1>
    </header>
    <ul>
      <li><a class="nav-link" href="#Introduction">Introduction</a></li>
      <li><a class="nav-link" href="#Section_1">Section 1</a></li>
      <li><a class="nav-link" href="#Section_2">Section 2</a></li>
      <li><a class="nav-link" href="#Section_3">Section 3</a></li>
      <li><a class="nav-link" href="#Section_4">Section 4</a></li>
    </ul>
  </nav>

  <main id="main-doc">
    <section id="Introduction" class="main-section">
      <header>Introduction</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue arcu non ex faucibus, sit amet fermentum turpis facilisis. Fusce mattis, metus ac eleifend ultrices, lorem lacus euismod odio, id varius velit orci eget elit.</p>
      <p>Quisque sodales leo nec neque fringilla, vitae hendrerit felis sollicitudin. Fusce at facilisis est. Aliquam non fermentum tortor. Phasellus bibendum risus nec elit faucibus, nec egestas tellus elementum. Sed pulvinar, nulla vel finibus ultricies, ligula risus faucibus erat, at semper sapien erat vitae tellus.</p>
      <code>console.log("Hello, World!");</code>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>

    <section id="Section_1" class="main-section">
      <header>Section 1</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue arcu non ex faucibus, sit amet fermentum turpis facilisis. Fusce mattis, metus ac eleifend ultrices, lorem lacus euismod odio, id varius velit orci eget elit.</p>
      <p>Quisque sodales leo nec neque fringilla, vitae hendrerit felis sollicitudin. Fusce at facilisis est. Aliquam non fermentum tortor. Phasellus bibendum risus nec elit faucibus, nec egestas tellus elementum. Sed pulvinar, nulla vel finibus ultricies, ligula risus faucibus erat, at semper sapien erat vitae tellus.</p>
      <code>console.log("Section 1");</code>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>

    <section id="Section_2" class="main-section">
      <header>Section 2</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue arcu non ex faucibus, sit amet fermentum turpis facilisis. Fusce mattis, metus ac eleifend ultrices, lorem lacus euismod odio, id varius velit orci eget elit.</p>
      <p>Quisque sodales leo nec neque fringilla, vitae hendrerit felis sollicitudin. Fusce at facilisis est. Aliquam non fermentum tortor. Phasellus bibendum risus nec elit faucibus, nec egestas tellus elementum. Sed pulvinar, nulla vel finibus ultricies, ligula risus faucibus erat, at semper sapien erat vitae tellus.</p>
      <code>console.log("Section 2");</code>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>

    <section id="Section_3" class="main-section">
      <header>Section 3</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue arcu non ex faucibus, sit amet fermentum turpis facilisis. Fusce mattis, metus ac eleifend ultrices, lorem lacus euismod odio, id varius velit orci eget elit.</p>
      <p>Quisque sodales leo nec neque fringilla, vitae hendrerit felis sollicitudin. Fusce at facilisis est. Aliquam non fermentum tortor. Phasellus bibendum risus nec elit faucibus, nec egestas tellus elementum. Sed pulvinar, nulla vel finibus ultricies, ligula risus faucibus erat, at semper sapien erat vitae tellus.</p>
      <code>console.log("Section 3");</code>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>

    <section id="Section_4" class="main-section">
      <header>Section 4</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue arcu non ex faucibus, sit amet fermentum turpis facilisis. Fusce mattis, metus ac eleifend ultrices, lorem lacus euismod odio, id varius velit orci eget elit.</p>
      <p>Quisque sodales leo nec neque fringilla, vitae hendrerit felis sollicitudin. Fusce at facilisis est. Aliquam non fermentum tortor. Phasellus bibendum risus nec elit faucibus, nec egestas tellus elementum. Sed pulvinar, nulla vel finibus ultricies, ligula risus faucibus erat, at semper sapien erat vitae tellus.</p>
      <code>console.log("Section 4");</code>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>
  </main>

  <script>
    const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
    const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
    assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
  </script>
</body>
</html>
