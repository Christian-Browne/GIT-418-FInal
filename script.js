'use strict';
const _0x58e89c = _0x2b81;
(function (_0x259dec, _0x52dc06) {
  const _0x2d4a8f = _0x2b81,
    _0x158216 = _0x259dec();
  while (!![]) {
    try {
      const _0x40d6aa =
        (-parseInt(_0x2d4a8f(0x1dd)) / 0x1) *
          (-parseInt(_0x2d4a8f(0x1e4)) / 0x2) +
        (parseInt(_0x2d4a8f(0x1d9)) / 0x3) *
          (parseInt(_0x2d4a8f(0x206)) / 0x4) +
        parseInt(_0x2d4a8f(0x200)) / 0x5 +
        (parseInt(_0x2d4a8f(0x1df)) / 0x6) *
          (parseInt(_0x2d4a8f(0x1ea)) / 0x7) +
        (parseInt(_0x2d4a8f(0x1fa)) / 0x8) *
          (parseInt(_0x2d4a8f(0x1f7)) / 0x9) +
        (parseInt(_0x2d4a8f(0x1d8)) / 0xa) *
          (parseInt(_0x2d4a8f(0x1de)) / 0xb) +
        (parseInt(_0x2d4a8f(0x1db)) / 0xc) *
          (-parseInt(_0x2d4a8f(0x1fd)) / 0xd);
      if (_0x40d6aa === _0x52dc06) break;
      else _0x158216['push'](_0x158216['shift']());
    } catch (_0x7b99fa) {
      _0x158216['push'](_0x158216['shift']());
    }
  }
})(_0x5222, 0x997b9);
$(function () {
  const _0x416c4b = _0x2b81;
  $(_0x416c4b(0x1ff))[_0x416c4b(0x203)]({
    infinite: !![],
    slidesToShow: 0x1,
    slidesToScroll: 0x1,
  }),
    $(_0x416c4b(0x1e5))[_0x416c4b(0x1eb)]();
  function _0xc72bff() {
    const _0x2563d4 = _0x416c4b,
      _0x1a4a2a =
        localStorage[_0x2563d4(0x1f3)](_0x2563d4(0x1f0)) === 'enabled';
    $(_0x2563d4(0x1fe))['toggleClass']('dark-mode', _0x1a4a2a),
      $(_0x2563d4(0x202))[_0x2563d4(0x1fb)]('fa-moon', !_0x1a4a2a),
      $(_0x2563d4(0x202))['toggleClass'](_0x2563d4(0x1ed), _0x1a4a2a);
  }
  _0xc72bff(),
    $(_0x416c4b(0x1ef))[_0x416c4b(0x1e1)](function () {
      const _0x1620a1 = _0x416c4b;
      $(_0x1620a1(0x1fe))[_0x1620a1(0x1fb)]('dark-mode');
      const _0x4bb89f = $('body')[_0x1620a1(0x1ec)](_0x1620a1(0x1f6));
      localStorage['setItem'](
        _0x1620a1(0x1f0),
        _0x4bb89f ? _0x1620a1(0x1f1) : _0x1620a1(0x1e8)
      ),
        $('#darkModeToggle\x20i')[_0x1620a1(0x1fb)](
          _0x1620a1(0x1f4),
          !_0x4bb89f
        ),
        $('#darkModeToggle\x20i')[_0x1620a1(0x1fb)](
          _0x1620a1(0x1ed),
          _0x4bb89f
        );
    });
}),
  document[_0x58e89c(0x1e0)]('DOMContentLoaded', () => {
    loadBestSellers();
  });
function _0x5222() {
  const _0x24c60c = [
    '#darkModeToggle\x20i',
    'slick',
    'innerHTML',
    'div',
    '2524bPjRYZ',
    '\x22\x20alt=\x22',
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22shoe-card-price\x22>$',
    '129190WeuyIY',
    '4218aeDplx',
    'json',
    '168ZKoxxE',
    'imageUrl',
    '163BdKuVv',
    '671RQWamE',
    '6kVkzpK',
    'addEventListener',
    'click',
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20',
    'appendChild',
    '9286uTRGPV',
    '#accordion',
    'price',
    './best-sellers.json',
    'disabled',
    'type',
    '1630160oVvTKK',
    'accordion',
    'hasClass',
    'fa-sun',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
    '#darkModeToggle',
    'darkMode',
    'enabled',
    'createElement',
    'getItem',
    'fa-moon',
    'name',
    'dark-mode',
    '99PiCYrY',
    'Error\x20fetching\x20data:',
    '.best-sellers-container',
    '618384zpLkda',
    'toggleClass',
    'shoe-card',
    '2818426pHOCvw',
    'body',
    '#shoe-carousel',
    '743405oHvwiq',
    'forEach',
  ];
  _0x5222 = function () {
    return _0x24c60c;
  };
  return _0x5222();
}
async function loadBestSellers() {
  const _0x23eb79 = _0x58e89c;
  try {
    const _0x51348b = await fetch(_0x23eb79(0x1e7)),
      _0x1bc988 = await _0x51348b[_0x23eb79(0x1da)]();
    updateBestSellers(_0x1bc988);
  } catch (_0x123c99) {
    console['error'](_0x23eb79(0x1f8), _0x123c99);
  }
}
function _0x2b81(_0x31cc84, _0x20bd2a) {
  const _0x5222ea = _0x5222();
  return (
    (_0x2b81 = function (_0x2b8199, _0x18da36) {
      _0x2b8199 = _0x2b8199 - 0x1d7;
      let _0x21f1c3 = _0x5222ea[_0x2b8199];
      return _0x21f1c3;
    }),
    _0x2b81(_0x31cc84, _0x20bd2a)
  );
}
function updateBestSellers(_0x2baca0) {
  const _0x4843c9 = _0x58e89c,
    _0x40a619 = document['querySelector'](_0x4843c9(0x1f9));
  (_0x40a619[_0x4843c9(0x204)] = ''),
    _0x2baca0[_0x4843c9(0x201)]((_0x349cbe) => {
      const _0x5e681e = _0x4843c9,
        _0x4070ae = document[_0x5e681e(0x1f2)](_0x5e681e(0x205));
      (_0x4070ae['className'] = _0x5e681e(0x1fc)),
        (_0x4070ae[_0x5e681e(0x204)] =
          _0x5e681e(0x1ee) +
          _0x349cbe[_0x5e681e(0x1dc)] +
          _0x5e681e(0x207) +
          _0x349cbe[_0x5e681e(0x1f5)] +
          '\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shoe-card-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>' +
          _0x349cbe['name'] +
          '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>' +
          _0x349cbe[_0x5e681e(0x1e9)] +
          _0x5e681e(0x1d7) +
          _0x349cbe[_0x5e681e(0x1e6)] +
          _0x5e681e(0x1e2)),
        _0x40a619[_0x5e681e(0x1e3)](_0x4070ae);
    });
}
