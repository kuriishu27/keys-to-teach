<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Keys to Teach</title>

    <!-- Bootstrap Core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Enriqueta" rel="stylesheet">
    <!-- Theme CSS -->
    <link href="css/main.css" rel="stylesheet">

</head>

<body id="page-top" class="home">

    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">Keys to Teach</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#services">Home</a>
                    </li>
                    
                    <li>
                        <a class="page-scroll" href="#contribute">Contribute</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#keys">Keys</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Header -->
    <div id="landing-header">
        <div class="container prelude">
            <h1 class="fancy-title">Keys to Teach</h1>
            </div>
        </div>
    </div>
    <hr></hr>



    <!-- Contribute form -->
    <div class="container interest-screen">
        
        <a onclick="removeFromScreen()" style="cursor: pointer;float: right;padding-top: 30px">
            <img src="img/error.svg" style="color:white;width: 40px;height:40px">
        </a>
        
        <div class="row interest-white">
        
            <div class="col-sm-12">
                <h1 style="font-weight: 100; text-align: center;padding-top: 20px;">Contribute Form</h1>
            </div>

            <form method="POST">
                <div class="row plan-form">
                    <div class="col-sm-6">
                        <label for="firstName" class="contact-style">Name:<i style=color:#932929>*</i></label>
                        <input type=text name="name" class=form-control placeholder="Name" />
                    </div>
                    <div class="col-sm-6">
                        <label for="email" class="contact-style">Email:</label>
                        <input type=text name=email class=form-control placeholder="Enter Email" />
                    </div>
                    
                    <div class="col-sm-12">
                        <label for="message" class="contact-style">Message <i style=color:#932929>*</i></label>
                        <textarea type="text" name="message" class=form-control placeholder="Enter Message"></textarea>
                    </div>
                    <div class="col-sm-6" style="margin-top: 10px">
                         <label for="plan" class="contact-style">Plan<i style=color:#932929>*</i></label>
                            <button class="btn btn-primary btn-sm btn-tags">Posture/Technique</button>
                            <button class="btn btn-primary btn-sm btn-tags">Character</button>
                            <button class="btn btn-primary btn-sm btn-tags">Improvisation/Composition</button>
                            <button class="btn btn-primary btn-sm btn-tags">Other</button>
                    </div>
                    <div class="col-sm-6">
                        <input type="submit" name="submit-plan" class="btn btn-lg btn-primary btn-outline-success" style="margin-top: 37px;float:right" formaction="index.php?"/ value="Submit">
                        <a href="tel:+02070933137" style="position:relative;top:18px;padding-left: 5px;font-size: 13px">or call one of our APOS Experts on +020 7093 3137</a>
                    </div>

                </div>
                
            </form>
        </div>
         
    </div>
    <!-- Contribute Section -->
    <section id="contribute">
        <h1>Contribute</h1>
        <blockquote>"Contribute to our database to share more ways of learning"</blockquote>
        
        <button class="btn btn-lg btn-primary form-contribute" data-toggle="modal" data-target="#exampleModal">Contribute</button>
    </section>
    <hr></hr>

    <!-- Keys Grid Section -->
    <section id="keys" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Keys</h2>
                    <h3 class="section-subheading text-muted">This is where you can learn about music!</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="portfolio-item">
                        <a href="#">
                            <div class="row">
                                <div class="col-sm-5">
                                    <img src="https://c1.staticflickr.com/3/2811/11357509244_e60b86fd06_b.jpg" class="img-responsive img-keys" alt="">
                                </div>
                                <div class="col-sm-7 cards">
                                    <h3>Posture/Technique</h3>
                                    <p style="word-wrap: break-word;">Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="portfolio-item">
                        <a href="#">
                            <div class="row">
                                <div class="col-sm-5">
                                    <img src="http://musicalinstrumentssheffield.co.uk/wp-content/uploads/sites/593/2017/03/677.jpg" class="img-responsive img-keys" alt="">
                                </div>
                                <div class="col-sm-7 cards">
                                    <h3>Character</h3>
                                    <p style="word-wrap: break-word;">Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="portfolio-item">
                        <a href="#">
                            <div class="row">
                                <div class="col-sm-5">
                                    <img src="http://mediad.publicbroadcasting.net/p/vpr/files/201703/Open-piano-istock-easybuy4u-20170331_0.jpg" class="img-responsive img-keys" alt="">
                                </div>
                                <div class="col-sm-7 cards">
                                    <h3>Improvisation and Composition</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>

                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="portfolio-item">
                        <a href="#">
                            <div class="row">
                                <div class="col-sm-5">
                                    <img src="http://mediad.publicbroadcasting.net/p/vpr/files/201703/Open-piano-istock-easybuy4u-20170331_0.jpg" class="img-responsive img-keys" alt="">
                                </div>
                                <div class="col-sm-7 cards">
                                    <h3>Other</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <hr></hr>

    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6" style="text-align:center">
                    <h1>About</h1>
                    <p style="text-align:justify">Keys to Teach is a website addressed to individual teachers/instructors and students of this magnifique instrument where you can find a growing collection of didactic strategies, exercises and resources structured in three sections - Posture and technique, character, improvisation/composition to teach and help the pupil get - in the most effective way - their pianistic-musical objective.</p>
                    <p style="text-align:justify">There are many learning teaching strategies to be used during the piano lesson, from imagery mnemonics (see website), demonstration and scaffolding, to the use of interesting tools such as recordings, toys or apps.</p>
                    <p style="text-align:justify">The material found on this website comes from a variety of resources like Masterclasses, teachers and professors, books, own and shared experience and knowledge.</p>
                </div>
            </div>
        </div>
    </section>
    <hr></hr>


    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Contact</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="col-sm-12 text-center">
                    <h4>Marina Gomez: 
                        <a href="mailto:jmarinagomez@gmail.com" style="color: black">Email Marina</a>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button type="submit" class="btn btn-info btn-xl">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xs-3">
                    <ul class="list-inline social-buttons">
                        <li><a href="#"><i class="fa fa-2x fa-facebook"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-2x fa-twitter"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-2x fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-1"></div>
                <div class="col-xs-4">
                    <span style="color: white;" class="copyright">Copyright &copy; Christian Ray Leovido</span>
                </div>
                <div class="col-xs-4">
                    <ul class="list-inline quicklinks">
                        <li><a href="#">Privacy Policy</a>
                        </li>
                        <li><a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- Portfolio Modals -->
    <!-- Use the modals below to showcase details about your portfolio projects! -->

    <!-- Portfolio Modal 1 -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>This is the first object</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/roundicons-free.png" alt="">
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <p>
                                    <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
                                <ul class="list-inline">
                                    <li>Date: July 2014</li>
                                    <li>Client: Round Icons</li>
                                    <li>Category: Graphic Design</li>
                                </ul>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>
    <script>
        $(".form-contribute").click(function(){
            $(".interest-screen").fadeIn(600);

            disableScroll();
        });
    </script>

    <script>

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;  
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
      }

      function enableScroll() {
          if (window.removeEventListener)
              window.removeEventListener('DOMMouseScroll', preventDefault, false);
          window.onmousewheel = document.onmousewheel = null; 
          window.onwheel = null; 
          window.ontouchmove = null;  
          document.onkeydown = null;  
      }
      function removeFromScreen() {
        $(".brochure-screen").fadeOut(600);
        $(".interest-screen").fadeOut(600);
        $(".login-screen").fadeOut(600);

          enableScroll();
      }
    </script>

</body>

</html>
