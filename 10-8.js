// 颜色rgb转16进制
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

rgbToHex(0, 51, 255)

// 复制到剪贴板
const copyToClipboard = (text) => navigator.clipboard.writeText(text)

copyToClipboard("Hello World");

// 查找日期位于一年中的第几天
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

dayOfYear(new Date())

// 英文字符串首字母大写
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

capitalize("follow for more")

// 计算2个日期之间相差多少天
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date("2020-10-21"), new Date("2021-10-22"))

// 生成随机十六进制颜色
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex());

// 求数字的平均值
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

average(1, 2, 3, 4);

// 回到顶部
const goToTop = () => window.scrollTo(0, 0);

goToTop();

// 反转字符串
const reverse = str => str.split('').reverse().join('');

reverse('hello world');

// 检验是否为数组且是否为空
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);

// 获取用户选择的文本
const getSelectedText = () => window.getSelection().toString();

getSelectedText();

// 打乱数组
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));