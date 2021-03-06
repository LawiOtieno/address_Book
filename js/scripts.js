// BUSINESS LOGIC

function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
};

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }



// USER INTERFACE LOGIC
$(document).ready(function(){
    $("form#new-contact").submit(function(event){
        event.preventDefault();

        let inputtedFirstName = $("input#new-first-name").val();
        let inputtedLastName = $("input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
          });

        $("input#new-first-name").val();
        $("input#new-last-name").val();
        
    });
});