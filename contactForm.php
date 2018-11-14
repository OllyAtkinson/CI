<?PHP

require_once("./include/fgcontactform.php");
require_once("./include/captcha-creator.php");

$formproc = new FGContactForm();
$captcha = new FGCaptchaCreator('scaptcha');

$formproc->EnableCaptcha($captcha);

//1. Add your email address here.
//You can add more than one receipients.
$formproc->AddRecipient('info@sweetsnallsorts.co.uk'); //<<---Put your email address here


//2. For better security. Get a random tring from this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('q3o39q97MTZCEM8');


if(isset($_POST['submitted']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("thank-you.php");
   }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Contact Form</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

   <!-- Bootstrap css and my own css -->
  <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" 
        crossorigin="anonymous">
  <!-- Main Stylesheet File -->
  <link rel="stylesheet" href="css/styleForm.css" rel="stylesheet">

</head>
<body>
<section id="contact">
            <div class="form">
              <!--<div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage">Error message, please try again.</div>-->
              <form action="<?php echo $formproc->GetSelfScript(); ?>" method="post" role="form" class="contactForm">

              <input type='hidden' name='submitted' id='submitted' value='1'/>
              <input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
              
              <!--
              <input type='text'  class='spmhidip' name='<?php //echo $formproc->GetSpamTrapInputName(); ?>' />
              <div class="s-12 m-12 l-5">
    
              <div class='short_explanation'>* required fields</div>
              <div><span class='error'><?php //echo $formproc->GetErrorMessage(); ?></span></div>-->
                <div class="col=xs=12">
                  <h2>Please enter your details before viewing your results</h2>
                </div>

                <div class="form-group">
                  <br>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Full Name" value='<?php echo $formproc->SafeDisplay('name') ?>' maxlength="50" data-rule="minlen:4" data-msg="Please nter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" value='<?php echo $formproc->SafeDisplay('email') ?>' data-rule="email" data-msg="Please Enter a Valid email" />
                  <div class="validation"></div>
                </div>
                
                <div class="form-group">
                  <input type="text" class="form-control" name="company" id="company" placeholder="Company" value='<?php echo $formproc->SafeDisplay('number') ?>' data-rule="minlen:10" data-msg="Please Enter your Company" />
                  <div class="validation"></div>
                </div>
                
                <div class="form-group">
                  <input type="text" class="form-control" name="position" id="position" placeholder="Role/Position" value='<?php echo $formproc->SafeDisplay('occasion') ?>' data-rule="minlen:4" data-msg="Please Enter your Role/Position" />
                  <div class="validation"></div>
                </div>

                <div <p><input type="checkbox" name="terms" value='<?php echo $formproc->SafeDisplay('terms') ?>'>Please confirm that you accept the <u>Terms and Conditions</u></p> </div>

                <br>
                <br>


                  <div class="validation"></div>
                </div>
                <div class='container'>
                <div><img alt='Captcha image' src='show-captcha.php?rand=1' id='scaptcha_img' /></div>
                <label for='scaptcha' >Enter the code above here:</label>
                <input type='text' name='scaptcha' id='scaptcha' maxlength="10" /><br/>
                <span id='contactus_scaptcha_errorloc' class='error'></span>
                <div class='short_explanation'>Can't read the image?
                <a href='javascript: refresh_captcha_img();'><br>Click here to refresh</a></div>
                </div>

                <div class="text-center"><button class ="buttonSubmit" type="submit" name='Submit' value='Submit'>Submit</button></div>
              </form>
            </div>
          </div>

      </section>

<script type='text/javascript'>
// <![CDATA[

    var frmvalidator  = new Validator("contactus");
    frmvalidator.EnableOnPageErrorDisplay();
    frmvalidator.EnableMsgsTogether();

    frmvalidator.addValidation("name","req","Please provide your name");

    frmvalidator.addValidation("email","email","Please provide your email address");

    frmvalidator.addValidation("company", "maxlen=40");

    frmvalidator.addValidation("position", "maxlen=40");

    document.forms['contactus'].scaptcha.validator
      = new FG_CaptchaValidator(document.forms['contactus'].scaptcha,
                    document.images['scaptcha_img']);

    function SCaptcha_Validate()
    {
        return document.forms['contactus'].scaptcha.validator.validate();
    }

    frmvalidator.setAddnlValidationFunction("SCaptcha_Validate");

    function refresh_captcha_img()
    {
        var img = document.images['scaptcha_img'];
        img.src = img.src.substring(0,img.src.lastIndexOf("?")) + "?rand="+Math.random()*1000;
    }

// ]]>
</script>
</body>