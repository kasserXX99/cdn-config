Ecwid.OnPageLoaded.add(function (page) {
	if (page.type === 'PRODUCT' || page.name === 'PRODUCT') {
		console.log('it the product page');
		infoWidget();
	}
	if (page.type == 'CHECKOUT_PAYMENT_DETAILS') {
		checkoutWidget();
	}
});

const checkoutWidget = () => {
	let checkoutBox = document.querySelector(
		'label.ec-radiogroup__item--app_id-custom-app-64158187-2 div.ec-radiogroup__info:empty'
	);
	Ecwid.Cart.calculateTotal(function (order) {
		if (order.total < 100) {
			document.querySelector(
				'label.ec-radiogroup__item--app_id-custom-app-64158187-2.ec-radiogroup__item--multiline'
			).style.display = 'none';
		} else {
			checkoutBox.innerHTML = `<div
				class="tamara-product-widget"
				data-lang="ar"
				data-price="${order.total}"
				data-currency="SAR"
				data-payment-type="installment"
				data-disable-installment="false"
				data-disable-paylater="false"
				data-installment-minimum-amount="100"
				data-installment-maximum-amount="3000"
				data-installment-available-amount="99"
				data-pay-later-max-amount="0"
				data-show-border="false"
				/>
				</div>`;
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://cdn.tamara.co/widget/product-widget.min.js';
			document.head.appendChild(script);
			setTimeout(() => {
				if (window.TamaraProductWidget) {
					window.TamaraProductWidget.render();
					document.querySelector(`.tamara-logo`).style.top = '15px';
				}
			}, 1000);
		}
	});
};

const infoWidget = () => {
	let insert = document.querySelector('.details-product-purchase');
	let div = document.createElement('div');
	div.style.marginTop = '20px';
	div.style.width = '83%';
	let inn = `<div class="tamara-widget" data-lang="ar" data-country-code="SA" data-currency="SAR" data-color-type="default" data-payment-type="installment" data-number-of-installments="3" data-installment-available-amount="99"></div>`;
	div.innerHTML = inn;
	insert.appendChild(div);
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://cdn.tamara.co/widget/tamara-widget.min.js';
	document.head.appendChild(script);
	setTimeout(() => {
		if (window.TamaraWidget) {
			window.TamaraWidget.render();
			document.querySelector('.tamara-widget').style.textAlign = 'center';
		}
	}, 2000); // Waiting for 2s - Make sure Tamara's widget is installed
};
// add the widget on the discription section .product-details__general-info
// add the widget next to the add to cart button .details-product-purchase
