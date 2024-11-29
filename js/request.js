const api = 'https://brand.vaporesso.com/vaporesso/java/data/activity';

function fetchData(url, method, params = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (params) {
        options.body = JSON.stringify(params);
    }

    return fetch(`${api}${url}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // 解析 JSON 数据
        });
}

// 测试
function test() {
    return fetchData('/vote/get_test', 'GET')
        .then(data => {
            console.log('测试响应:', data);
        })
        .catch(error => {
            console.error('测试请求出现问题:', error);
        });
}

// 获取投票数
function getVoteList() {
    return fetchData('/vote/list', 'POST', { activityType: 'care_2024' })
        .then(data => {
            console.log('获取投票数响应:', data);
        })
        .catch(error => {
            console.error('获取投票数请求出现问题:', error);
        });
}

// 进度条
function progress(){
    const totalAmount = 1000; // 总量
    const incrementValue = 100; // 每次增加的值

    const progressTrack = document.getElementById("progress-track");
    const progressBar = document.getElementById("progress-bar");

   // 获取 progressTrack 和 progressBar 的宽度
    const trackWidth = progressTrack.offsetWidth;
    console.log('trackWidth: ', trackWidth);
    const currentBarWidth = progressBar.offsetWidth;

    // 计算增加的宽度
    const increaseWidth = (incrementValue / totalAmount) * trackWidth;

    // 实际要增加的宽度
    let width = increaseWidth

    // 检查边界条件
    if (trackWidth - currentBarWidth < increaseWidth ) {
        width = trackWidth - currentBarWidth
    }
    if (trackWidth - currentBarWidth == increaseWidth ) {
        alert("进度条已满，无法继续增加！");
        return; // 退出函数
    }

    // 使用 GSAP 动画将 progressBar 的宽度增加
    gsap.to(progressBar, {
        width: `+=${width}px`, // 增加计算得到的宽度
        duration: 0.5, // 动画持续时间
        ease: "power1.out", // 动画缓动效果
    });

}

// 投票
function vote(id, isAdd) {
    progress()
    // return fetchData('/vote/update', 'POST', { id, isAdd })
    //     .then(data => {
    //         console.log('投票响应:', data);

    //         // 出现抽奖按钮
    //         const drawBtn = document.querySelector("#draw-btn")
    //             gsap.to('#vote-btn', {
    //             display: 'none',
    //             opacity: 0,
    //             ease: "power1.in",
    //         })
    //         gsap.to('#draw-btn', {
    //             display: 'block',
    //             opacity: 1,
    //             ease: "power1.in",
    //         },'>')
    //     })
    //     .catch(error => {
    //         console.error('投票请求出现问题:', error);
    //         // 出现抽奖按钮
    //         const drawBtn = document.querySelector("#draw-btn")
    //             gsap.to('#vote-btn', {
    //             display: 'none',
    //             opacity: 0,
    //             ease: "power1.in",
    //         })
    //         gsap.to('#draw-btn', {
    //             display: 'block',
    //             opacity: 1,
    //             ease: "power1.in",
    //         },'>')
    //     });
}

// 抽奖
function lottery() {
    return fetchData('/lottery', 'GET')
        .then(data => {
            console.log('抽奖响应:', data);
            const step2 = document.querySelector("#step-2")
            step2.style.display = 'block'
        })
        .catch(error => {
            console.error('抽奖请求出现问题:', error);
            const step2 = document.querySelector("#step-2")
            const rewardsBox = document.querySelector("#step-1")
            step2.style.display = 'block'
            rewardsBox.style.display = 'none'
        });
}

// 提交中奖接口
function submitPrize(prizeId, email) {
    // 验证邮箱
    return fetchData('/email/add', 'POST', { prizeId, Email: email, activityType: 'care_2024' })
        .then(data => {
            console.log('提交中奖接口响应:', data);
            const step3 = document.querySelector("#step-3")
            const step2 = document.querySelector("#step-2")
            step3.style.display = 'block'
            step2.style.display = 'none'
        })
        .catch(error => {
            console.error('提交中奖接口请求出现问题:', error);
            const step3 = document.querySelector("#step-3")
            const step2 = document.querySelector("#step-2")
            step3.style.display = 'block'
            step2.style.display = 'none'
        });
}

// 签名列表
function getCommentList() {
    return fetchData('/comment/list', 'POST', { activityType: 'care_2024' })
        .then(data => {
            console.log('签名列表响应:', data);
        })
        .catch(error => {
            console.error('签名列表请求出现问题:', error);
        });
}

// 提交签名
function submitComment(name, avatarId) {
    return fetchData('/comment/add', 'POST', { name, avatar_id: avatarId, activeType: 'care_2024' })
        .then(data => {
            console.log('提交签名响应:', data);
        })
        .catch(error => {
            console.error('提交签名请求出现问题:', error);
        });
}
