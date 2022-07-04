const loadIcons = () => {
	const iconsArray = [
		"<div style='display:flex; align-items:center; gap:5px;'><div style='width:56px;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://cdn.jsdelivr.net/gh/kasserXX99/cdn-config/assets/mada.svg'></img> </div>",
		"<div style='width:60px;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://cdn.jsdelivr.net/gh/kasserXX99/cdn-config/assets/stcpay.svg'></img> </div>",
		"<div style='width:60px;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://cdn.jsdelivr.net/gh/kasserXX99/cdn-config/assets/visa.svg'></img> </div>",
		"<div style='width:60px;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://cdn.jsdelivr.net/gh/kasserXX99/cdn-config/assets/master.svg'></img> </div></div>",
	];
	// let userAgent = navigator.userAgent;
	// if (userAgent.match(/safari/i)) {
	// 	let apple_pay_icon =
	// 		"<div style='width:60px;'> <img style='max-width:210px; max-height:100px; margin-top:15px; margin-right:5px;' src='https://cdn.jsdelivr.net/gh/kasserXX99/cdn-config/assets/apple-pay.svg'></img> </div>";
	// 	iconsArray.push(apple_pay_icon);
	// }
	let icons = iconsArray.join('');
	console.log(icons);
	// what should be passed is your app id in the seclector below
	// document.querySelector(
	// 	`label.ec-radiogroup__item--app_id-custom-app-76468716-1 div.ec-radiogroup__info:empty`
	// ).innerHTML = icons;
};

// Ecwid.OnPageLoaded.add(function (page) {
// 	if (page.type == 'CHECKOUT_PAYMENT_DETAILS') {
// 		loadIcons();
// 	}
// });
loadIcons();
