const loadIcons = () => {
	const iconsArray = [
		"<div style='display:flex;'><div style='width:auto;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://i.ibb.co/Wxd9d2W/visa54x34.png'></img> </div>",
		"<div style='width:auto;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://i.ibb.co/Wxd9d2W/visa54x34.png'></img> </div>",
		"<div style='width:auto;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://i.ibb.co/Wxd9d2W/visa54x34.png'></img> </div>",
		"<div style='width:auto;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://i.ibb.co/Wxd9d2W/visa54x34.png'></img> </div>",
		"<div style='width:auto;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://i.ibb.co/Wxd9d2W/visa54x34.png'></img> </div></div>",
	];
	const icons = iconsArray.join(',');
	console.log(icons);
	// what should be passed is your app id in the seclector below
	document.querySelector(
		`label.ec-radiogroup__item--app_id-custom-app-76468716-1 div.ec-radiogroup__info:empty`
	).innerHTML = icons;
};

// Ecwid.OnPageLoaded.add(function (page) {
// 	if (page.type == 'CHECKOUT_PAYMENT_DETAILS') {
// 		loadIcons();
// 	}
// });
loadIcons();
