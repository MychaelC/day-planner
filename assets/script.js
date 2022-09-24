$(init);

// get current date to the top 
function init(){
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// add color to the time blocks and as time passes every minute
colorTimeBlocks();
setInterval(colorTimeBlocks, 60000);
//local storage updates and time
$('.time-block').each(function() {
    var blockId = $(this).attr('id');
    $('#' + blockId + "textarea").text(localStorage.getItem(moment().format('DDDYYY') + blockId));
});

//click handler for save buttons
$('.saveBtn').on('click', handleSave);
}

function colorTimeBlocks() {
//each time window
$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr('id').replace("hour-", ""));
    var currentHour = parseInt(moment().format('H'));
    //remove any classes before
    $(this).removeClass("past present future");
    //color window based past pres future
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour > currentHour) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});
}

function handleSave(event) {
    //get id out of parent
    var hourId = $(this).parent().attr("id");
    //save data
    localStorage.setItem(moment().format('DDDYYYY') + hourId, $("#" + hourId + "textarea").val());
}



