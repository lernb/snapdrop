(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.randomChineseNameGenerator = {})));
}(this, (function (exports) { 'use strict';

  var ADJECTIVES = [
      // 同字
      '美美',
      '甜甜',
      '坏坏',
      '暖暖',
      '帅帅',
      '萌萌',
      '酷酷',
      // 不同字
      '可爱',
      '漂亮',
      '幽默',
      '无敌',
      '潇洒',
      '伤感',
      '胖胖',
      '纯洁',
      '爱笑',
      '开心',
      '快乐',
      '机灵',
      '机智',
      '傲慢',
      '礼貌',
      '优雅',
      '妩媚',
      '婀娜',
      '优美',
      '靓丽',
      '清秀',
      '阳光',
      '艳丽',
      '娇柔',
      '倜傥',
      '英俊',
      '帅气',
      '完美',
      '潇洒',
      '霸气',
      '高贵',
      '娇贵',
      '玲珑',
      '高冷',
      '痴心',
      '真心',
      '幸福',
      '细腻',
      '懒惰'
  ];

  var NAMES = [
      '力宏',
      '黎明',
      '冰冰',
      '过儿',
      '八戒',
      '大佬',
      '小白',
      '小美',
      '小帅',
      '小安',
      '小夏',
      '小明',
      '小猫',
      '小鱼',
      '小易',
      '小青',
      '无忌',
      '张三',
      '李四',
      '王五',
      '周六',
      '阿牛',
      '彦祖'
  ];

  var getRandomNumer = function (length) { return Math.floor(Math.random() * length); };
  var generateRandomChineseName = function () {
      // return ADJECTIVES[getRandomNumer(ADJECTIVES.length)] + "\u306E" + NAMES[getRandomNumer(NAMES.length)];
      return ADJECTIVES[getRandomNumer(ADJECTIVES.length)] + "的" + NAMES[getRandomNumer(NAMES.length)];
  };

  exports.generateRandomChineseName = generateRandomChineseName;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=random-chinese-name-generator.umd.js.map
