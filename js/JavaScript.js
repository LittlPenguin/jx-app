// header
var headerLj = document.querySelectorAll('.header-lj')
headerLj[0].addEventListener('click', function () {
    document.write('<head></head><title>新世纪京西</title>')
})
headerLj[1].addEventListener('click', function () {
    location.assign('https://www.bilibili.com/')
})
// nav
var ipt = document.querySelector('input')
var serch = document.querySelector('.nav-serch')
document.addEventListener('keyup', function (e) {
    if (e.keyCode == 83) {
        ipt.focus()
    }
})
serch.addEventListener('click', function () {
    ipt.focus()
})
var navLj = document.querySelectorAll('.nav-lj')
navLj[0].addEventListener('click', function () {
    location.assign('https://www.bilibili.com/')
})
navLj[1].addEventListener('click', function () {
    location.assign('https://www.bilibili.com/')
})
// article
var index = 0
var imgt = document.querySelector('.imgt')
var dhlb = document.querySelectorAll('.dh-lb')
var width = 100
var timer = null
var sumli = imgt.querySelectorAll('li')
var leftp = -100
// 无限图制
for (var i = 0; i < sumli.length; i++) {
    var sumimg = sumli[i].querySelector('img')
    leftp += 100
    sumimg.style.left = leftp + '%'
}
// 自动转换
timer = setInterval(function sj() {
    index++
    if (index >= sumli.length || index < 0) {
        index = 0
    }
    imgt.style.left = index * width * -1 + '%'
}, 4000)
// 轮播按钮
dhlb[0].addEventListener('click', function () {
    index--
    // index--
    // 超出修正
    if (index >= sumli.length) {
        index = 0
    }
    else if (index < 0) {
        index = sumli.length - 1
    }
    // 轮播位置
    imgt.style.left = index * width * -1 + '%'
    clearTimeout(timer)
    timer = setInterval(function sj() {
        if (index >= sumli.length || index < 0) {
            index = 0
        }
        imgt.style.left = index * width * -1 + '%'
        index++
    }, 5000)

})
dhlb[1].addEventListener('click', function () {
    // 超出修正
    index++
    if (index >= sumli.length) {
        index = 0
    }
    // 轮播位置
    imgt.style.left = index * width * -1 + '%'
    clearTimeout(timer)
    timer = setInterval(function sj() {
        if (index >= sumli.length || index < 0) {
            index = 0
        }
        imgt.style.left = index * width * -1 + '%'
        index++
    }, 5000)
})
// news
// 时钟middle
var newtop = 35
var newsindex = 0
var newsum = document.querySelectorAll('.zwz')
var newwzz = document.querySelector('.wzz')
var newtimera = null
var newtimerb = null
var newtimerc = null

function cz() {
    var newtimera = setInterval(function () {
        newsindex++
        newwzz.style.top = newtop * newsindex * -1 + 'px'
        if (newsindex > newsum.length - 2) {
            clearInterval(newtimera)
            var newtimerb = setInterval(function () {
                newsindex--
                newwzz.style.top = newtop * newsindex * -1 + 'px'
                if (newsindex <= 0) {
                    clearInterval(newtimerb)
                    cz()
                }
            }, 4000)
        }
    }, 4000)
}
cz()
// 更多
var newsgd = document.querySelector('.wenzi3')
newsgd.addEventListener('click', function () {
    location.assign('https://www.bilibili.com')
})
