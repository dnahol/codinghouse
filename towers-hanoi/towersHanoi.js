'use strict'

$(document).ready(init);

function init() {
  $('.cols').click(clickCol);


}

function clickCol(event) {


// if there are any selected disks already
  if($('.selected').length) {
    //get number of selected string and parse it
      console.log("selected: ", $('.selected').length, $('.selected'));
      var selectedId = $('.selected').attr('id');
      console.log('selectedId: ', selectedId)
      var selectedNum = parseInt(selectedId);
      console.log("selectedNum: ", selectedNum);
   //get number of selected string and parse it
      var $disks = $(this).find('.disks');
      var clickedNum = 0;
      //if col is empty, then clickedNum = 0
      if($disks.length < 1) {
        console.log('empty col clicked when disk already selected.');
        clickedNum = $(document).find('.disks').length + 1;
        console.log('clickedNum: ', clickedNum);

      } else {
        var clickedString = $disks.first().attr('id');
        clickedNum = parseInt(clickedString);
        console.log('clickedString: ', clickedString);
        console.log('clickedNum: ', clickedNum);
      }



    // if selected disk < clicked disk, then move disk
    if(selectedNum < clickedNum)  {
      //move disk to a different column
      console.log('disk should be moved');
      console.log("selected: ", $('.selected').length, $('.selected'));
      //detach() to remove disk from old column
      var disk = $('.selected').detach();
      //prepend() to put disk on top of new column col
      $(this).prepend(disk);
      disk.removeClass('selected');
      }
      //else don't move. unclick? deselect?
      else {
          $('.selected').removeClass('selected');
      }

//if there are no selected disks already, just select this $topDisk
  } else {
    // lets select this thing
    console.log("No selected disks already. selecting this disk");
    var $topDisk = $(this).find('.disks').first();
    console.log("$topDisk ", $topDisk);

    $($topDisk).addClass('selected');
    console.log("selected: ", $('.selected').length, $('.selected'));
  }


  //$(this)

}







// function checkWin() {
//   var numDisks = 3;
//
//   $('.cols').eq(2).find('.disks')
//
//   if($('#tower-3 .disk')).length === numDisks) {
//     // you win!
//   }
//
//
// }
