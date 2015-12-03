/*------adapted from http://www.frontendwebhelp.com/javascript/jquery-photo-gallery.php----------*/

/* -------------------Settings and init----------------- */
var giImgTotal = 22; /* Number of images in gallery */
var giCurrentImage = 1; /* Image displayed on init */

var giSliderPosition = 0; /* Initial position for scroller */
var giThumbsShown = 9; /* Thumbnails shown on scroller */
var giTotalPositions = giImgTotal - giThumbsShown; /* Number of possible positions for scroller */

/* ------------------------Hide/show slider arrow buttons and change class-------------- */
function showHideSliderButtons() {
  if (giSliderPosition == giTotalPositions) toggleSliderArrows(1, 0);
  else if (giSliderPosition == 0) toggleSliderArrows(0, 1);
  else toggleSliderArrows(1, 1);
}
function toggleSliderArrows(bLeftOn, bRightOn) {
  if (bLeftOn == 1) $("#rew-link").removeClass("arrow-inactive");
  else $("#rew-link").addClass("arrow-inactive");

  if (bRightOn == 1) $("#ffw-link").removeClass("arrow-inactive");
  else $("#ffw-link").addClass("arrow-inactive");
}

function scrolltoGroup(obj) {
  sButtonId = $(obj).attr("id");
  if (sButtonId == "rew-link") {
    /*--- Rewind (scroll to left)--- */
    giSliderPosition -= giThumbsShown;
    if (giSliderPosition < 0) giSliderPosition = 0;
  } else {
    /* ---Forewind (scroll to right)--- */
    giSliderPosition += giThumbsShown;
    if (giSliderPosition > giTotalPositions) giSliderPosition = giTotalPositions;
  }
/*---moves thumbnails to left---*/
  $("#thumbnail-slider").animate({
    left: "-" + 72 * giSliderPosition + "px"
  });
  showHideSliderButtons();
}

function centerSlider(imageId) {
	/* Assumes odd number of thumbs shown so that selected thumb can be 'centred' */
	if (imageId <= (giThumbsShown + 1) / 2) {
		giSliderPosition = 0;
	} else if (imageId > giImgTotal - ((giThumbsShown + 1) / 2)) {
		giSliderPosition = giTotalPositions;
	} else {
		giSliderPosition = imageId - ((giThumbsShown + 1) / 2);
	}

	$("#thumbnail-slider").animate({
		left: "-" + 72 * giSliderPosition + "px"
	});
}

function swapGalleryImage(ancThumbnail) {
	var newImgSrc = $(ancThumbnail).children("img").attr("src");
	var newImgId = parseInt($(ancThumbnail).attr("imgid"));
	var currentImg = $("#gallery-large-image table img");
	if (newImgSrc != currentImg.attr("src")) {
		/* Swap large image */
		currentImg.attr("src", newImgSrc);
		
/* ------Swap description and location------*/
		$("#gallery-image-title").html($("#thumbnail-descriptions").children().eq(newImgId-1).html());
		$("#gallery-image-location span").html($("#thumbnail-dates").children().eq(newImgId-1).html());
		
/* ------Update thumbnail semi-transparent overlay------ */
		$(".zoom-icon").css("display", "none");
		$(".selected-image").removeClass("selected-image");
		$(ancThumbnail).children(".zoom-icon").css("display", "block");
		$(ancThumbnail).addClass("selected-image");
	}
}

$(document).ready(function() {
  thumbnailCount = 0;
  $("#thumbnail-slider a").each(function(){
    thumbnailCount++;
    $(this).attr("imgId", thumbnailCount);
  });

	$("#thumbnail-slider a").click(function(){
		swapGalleryImage($(this));
		centerSlider($(this).attr("imgid"));
		showHideSliderButtons();
		$("#scroll-info-current").html($(this).attr("imgid"));
		return false;
	});
  
	$(".scroll-arrow").click(function() {
		if ($(this).hasClass("arrow-inactive") === false) scrolltoGroup(this);
	});
  
/* ---Previous/next button, large image left/right overlay click handler ---*/
	$(".scroll-text, .gallery_hover").click(function() {
		var currentImage = parseInt($(".selected-image").attr("imgid"));
		var newImageId = 0;
		if ($(this).attr("id") === "rew-link-2" || $(this).attr("id") === "rew-link-1") {
			/* Show previous image */
			if (currentImage > 1) {
				newImageId = currentImage - 1;
			}
		} else {
			/* Show next image */
			if (currentImage < giImgTotal) {
				newImageId = currentImage + 1;
			}
		}
		if (newImageId != 0) {
			objButton = $("#thumbnail-slider a[imgid='"+newImageId+"']");
			swapGalleryImage(objButton);
			centerSlider(newImageId);
			showHideSliderButtons();
			$("#scroll-info-current").html(""+newImageId);
		}
		return false;
	});
});