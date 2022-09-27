var element = document.getElementById('phone');
var maskOptions = {
  mask: '+7(0 0 0) 0 0 0 - 0 0 - 0 0',
 
};
var mask = IMask(element, maskOptions);

var lazyMask = IMask(
  document.getElementById('date'),
  {
    mask: Date,
   
    blocks: {
      d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
      m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
      Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 2020, to: 2099, maxLength: 4}
    }
  }
);


var lazyMask = IMask(
  document.getElementById('dated'),
  {
    mask: Date,
   
    blocks: {
      d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
      m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
      Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 2020, to: 2099, maxLength: 4}
    }
  }
);