// 选择头像发弹幕
document.addEventListener('DOMContentLoaded', function() {
    // 获取 thumb-section 下的所有 thumb-box 元素
    const thumbSection = document.getElementById('thumb-section');
    console.log('thumbSection: ', thumbSection);
    const thumbBoxes = thumbSection.querySelectorAll('.thumb-box');
    console.log('thumbBoxes: ', thumbBoxes);
    const labels = thumbSection.querySelectorAll('.p-label_2');
  
    // 默认选中第一个 thumb-box
    if (thumbBoxes.length > 0) {
      thumbBoxes[0].classList.add('selected');
      labels[0].style.display = 'block'; // 显示第一个标签
    }
  
    // 为每个 thumb-box 添加点击事件
    thumbBoxes.forEach(box => {
      box.addEventListener('click', function() {
        // 隐藏所有标签
        labels.forEach(label => label.style.display = 'none');
  
        // 移除所有 thumb-box 的选中状态
        thumbBoxes.forEach(tb => tb.classList.remove('thumb-select'));
  
        // 为当前点击的 thumb-box 添加选中状态并显示对应的标签
        box.classList.add('thumb-select');
        const index = Array.prototype.indexOf.call(thumbBoxes, box);
        if (index >= 0 && index < labels.length) {
          labels[index].style.display = 'block';
        }
      });
    });
  });

  // 点击投票
// function  handleVoteClick() {
//     console.log('vote');

//     // 出现抽奖按钮
//     const drawBtn = document.querySelector("#draw-btn")
//     gsap.to('#vote-btn', {
//       display: 'none',
//       opacity: 0,
//       ease: "power1.in",
//     })
//     gsap.to('#draw-btn', {
//       display: 'block',
//       opacity: 1,
//       ease: "power1.in",
//     },'>')
// }

// 卡片翻转
const card = document.querySelector('.p-card')
function  handleClickCard() {
  console.log(card);
  card.classList.toggle('p-flip');
}