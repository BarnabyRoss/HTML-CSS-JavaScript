
const customName = document.getElementById('customname'); //输入字定义的名字
const randomize = document.querySelector('.randomize'); //随机生成笑话按钮
const story = document.querySelector('.story'); //对HTML底部准备存放笑话的＜ｐ＞元素的引用

let storyText = "今天气温34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时\
                 突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌\
                 因为:inserta:是一个130 公斤的胖子，天气又辣么热。";

let insertX = ["怪兽威利", "大老爹", "圣诞老人"];
let insertY = ["肯德基", "迪士尼乐园", "白宫"];
let insertZ = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];

function randomValueFromArray(array) {

  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result); //为点击按钮增加一个事件监听器

function result() {

  let newStory = storyText;
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":inserta:", xItem);
  newStory = newStory.replace(":inserta:", xItem);
  newStory = newStory.replace(":insertb:", yItem);
  newStory = newStory.replace(":insertc:", zItem);

  //如果输入框中有值，则做个替换的操作
  if(customName.value !== '') {

    let name = customName.value;
    newStory = newStory.replace("李雷", name);
  }

  if(document.getElementById("american").checked) {

    let weight = Math.round(300*0.071429) + " 磅";
    let temperature = Math.round((94 - 32) / 1.8) + " 华氏度";

    newStory = newStory.replace("34 摄氏度", temperature);
    newStory = newStroy.replace("130 公斤", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


