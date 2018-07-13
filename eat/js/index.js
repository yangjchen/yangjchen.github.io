// include variables for the cards: the suit, value and color 
const cardSuit = ["♦","♥","♣","♠"];
const cardValue = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const cardColor = ["#DD5964", "#483F50"];

// include an object for the hypothetical blog posts, with keys for the title, subtitle and short description
const blogPosts = {
    title: [
        "栖巢咖啡简餐",
        "叫了个鸡",
        "老乡鸡",
        "赵征擀面皮",
        "快美惠酸菜鱼",
        "王仁和米线",
        "虹泥小厨",
        "台资味",
        "惠美饺子"
    ],
    subtitle: [
        "（高创店）",
        "（蜀南庭院店）",
        "（新华纺中心店）",
        "（祥源城店）",
        "（祥源城店）",
        "（创新产业园店）",
        "（蜀南庭院店）",
        "（合肥高新店）",
        "（祥源城店）"
    ],
    description: [
       "起送￥20 | 配送￥2.5 | ------ 全国连锁好吃不贵，100多种天然香料精心配制，10多个小时的变化火温熬制，吃出舌尖上的中国。喵喵亲历推荐，你还在等什么？",
       "起送￥20 | 配送￥2.5 | ------ 那种味道仿佛吸盘似的,刺激我的舌头,让我口水直流的酸味,强烈的震撼了我的食道和胃壁，让我食欲不由自主的燃起，再加上那种鲜活的酸味，跟咸中带甜的炒蛋融合在一起",
       "起送￥20 | 配送￥2.5 | ------ 这是多么庄严而华丽的甘甜,仿佛波涛汹涌席卷而来,却又缤纷无比,引人入胜的浓郁口感,我的血液,我好像能听到我体内血液奔腾的声音",
       "起送￥20 | 配送￥2.5 | ------ 我听见了三种弦乐器的曲调,三首旋律和谐的结合在一起,在舌尖演奏出柔和奥妙难以言喻的音符如浓雾散去,从喉咙深处无声无息的消失",
       "起送￥20 | 配送￥2.5 | ------ 味道真的不错，朋友都喜欢吃。今天还是比较幸运的，去了没有排队，坐下之后人瞬间好多。不过感觉涮菜吃的时候有点咸了，不过量绝对是够的。",
       "起送￥20 | 配送￥2.5 | ------ 全国连锁好吃不贵，100多种天然香料精心配制，10多个小时的变化火温熬制，吃出舌尖上的中国。喵喵亲历推荐，你还在等什么？",
       "起送￥20 | 配送￥2.5 | ------ 全国连锁好吃不贵，100多种天然香料精心配制，10多个小时的变化火温熬制，吃出舌尖上的中国。喵喵亲历推荐，你还在等什么？",
       "起送￥20 | 配送￥2.5 | ------ 全国连锁好吃不贵，100多种天然香料精心配制，10多个小时的变化火温熬制，吃出舌尖上的中国。喵喵亲历推荐，你还在等什么？",
       "起送￥20 | 配送￥2.5 | ------ 全国连锁好吃不贵，100多种天然香料精心配制，10多个小时的变化火温熬制，吃出舌尖上的中国。喵喵亲历推荐，你还在等什么？"
    ]
};

// target the button which allows to refresh the contents of the card
const button = document.querySelector(".container button");
// listen for a click event on the button, at which point refresh the contents of the card
button.addEventListener("click", showNewBlogPost);

// target the HTML elements affected when the card is refreshed
// card, to be animated with the addition/removal of a class
const cardElement = document.querySelector(".container .card");
// title, subtitle, description, to be changed in text
const titleElement = document.querySelector(".container .card .card__content h1");
const subtitleElement = document.querySelector(".container .card .card__content h3");
const descriptionElement = document.querySelector(".container .card .card__content p");

// describe a function which refreshes the contents of the card
function showNewBlogPost() {
    // create random numbers to access a random item in the arrays for the card suit, value and color
    let randomSuit = Math.floor(Math.random()*cardSuit.length);
    let randomNumber = Math.floor(Math.random()*cardValue.length);
    let randomSuitColor = Math.floor(Math.random()*cardColor.length);

    // change the custom properties to describe the item selected with the random number
    // --card needs to nest values in between quotes, as to include the value for the content property
    cardElement.style.setProperty("--card", `\"${cardSuit[randomSuit]} ${cardValue[randomNumber]}\"`);
    cardElement.style.setProperty("--suit", cardColor[randomSuitColor]);

    // create a random number to access a random (hypothetical) article
    let randomBlogPost = Math.floor(Math.random()*blogPosts.title.length);

    // create variables which store the title, subtitle, description of the randomly selected article
    let title = blogPosts.title[randomBlogPost];
    let subtitle = blogPosts.subtitle[randomBlogPost];
    // include a subset of the description
    let description = blogPosts.description[randomBlogPost].substr(0, 147) + "...";

    // include in the selected HTML elements the values stored in the variables
    titleElement.textContent = title;
    subtitleElement.textContent = subtitle;
    descriptionElement.textContent = description;

    // add a class to the card element which animates the card as it is refreshed
    // after 0.2s remove it
    cardElement.classList.add("card--refresh");
    let timeoutID = setTimeout(function() {
        cardElement.classList.remove("card--refresh");
        clearTimeout(timeoutID);
    }, 200);
}