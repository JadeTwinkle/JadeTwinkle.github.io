// 数据源：你需要将你的图片实际链接和描述填在这里
// 注意：这里的顺序要和HTML中的卡片顺序一致
const aiWorks = [
    { src: "https://via.placeholder.com/800x600/333/fff?text=AI+Work+1-Large", caption: "智能对话助手 - 详情展示" },
    { src: "https://via.placeholder.com/800x600/444/fff?text=AI+Work+2-Large", caption: "图像生成工具 - 详情展示" },
    { src: "https://via.placeholder.com/800x600/555/fff?text=AI+Work+3-Large", caption: "数据分析Dashboard - 详情展示" },
    { src: "https://via.placeholder.com/800x600/666/fff?text=AI+Work+4-Large", caption: "AI 自动化工作流 - 详情展示" }
];

const archWorks = [
    { src: "https://via.placeholder.com/800x600/888/fff?text=Arch+Design+1-Large", caption: "城市综合体设计 - 渲染图" },
    { src: "https://via.placeholder.com/800x600/999/fff?text=Arch+Design+2-Large", caption: "博物馆概念方案 - 平面图" }
    // 如果有更多建筑作品，继续添加对象 {src: "...", caption: "..."}
];

let currentCategory = ''; // 'ai' 或 'arch'
let currentIndex = 0;

// 打开 Lightbox
function openLightbox(category, index) {
    currentCategory = category;
    currentIndex = index;
    
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    
    // 根据类别获取数据
    const data = category === 'ai' ? aiWorks : archWorks;
    
    if(data[index]) {
        img.src = data[index].src;
        caption.innerHTML = data[index].caption;
        lightbox.style.display = "flex";
    }
}

// 关闭 Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// 切换图片
function changeSlide(n) {
    const data = currentCategory === 'ai' ? aiWorks : archWorks;
    
    // 计算新的索引，支持循环播放
    currentIndex += n;
    if (currentIndex >= data.length) { currentIndex = 0; }
    if (currentIndex < 0) { currentIndex = data.length - 1; }
    
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    
    img.src = data[currentIndex].src;
    caption.innerHTML = data[currentIndex].caption;
}

// 点击遮罩层也可以关闭
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});