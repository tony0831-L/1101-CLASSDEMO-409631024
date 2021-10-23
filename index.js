Vue.createApp({
    data() {
        return {
            now:"全部展示",
            data: [
                {
                    catgolery:"課堂實作",
                    info:[
                        {
                            title:"Introduction",
                            subtitle:"W02 - 課堂實作",
                            img:'./img/3.png',
                            href:"https://tony0831-l.github.io/1101-CLASSDEMO-409631024/w02/introduction.html"
                        },
                        {
                            title:"Pokemon",
                            subtitle:"W02 - 課堂實作",
                            img:'./img/2.png',
                            href:"https://tony0831-l.github.io/1101-CLASSDEMO-409631024/w02/poketmon.html"
                        },
                        {
                            title:"Image Gallery",
                            subtitle:"W04 - 課堂實作",
                            img:'./img/1.png',
                            href:"https://tony0831-l.github.io/1101-CLASSDEMO-409631024/w04/ImageGallery/ImageGallery.html"
                        },
                        {
                            title:"Blog",
                            subtitle:"W04 - 課堂實作",
                            img:'./img/4.png',
                            href:"https://tony0831-l.github.io/1101-CLASSDEMO-409631024/w04/blog/blog.html"
                        },
                        {
                            title:"微軟商城",
                            subtitle:"W04 - 課堂實作",
                            img:'./img/5.png',
                            href:"https://tony0831-l.github.io/1101-CLASSDEMO-409631024/w04/blog/blog.html"
                        },
                    ],
                },
                {
                    catgolery:"自主學習",
                    info:[
                        {
                            title:"My photo gallery",
                            subtitle:"W04 - 自主學習",
                            img:'./w04/imgs/Web 1920 – 2.png',
                            href:"https://tony0831-l.github.io/1101-CLASSDEMO-409631024/w04/myPhotoGallery/myPhotoGallery.html"
                        },
                    ],
                }
            ]
        }
    }
}).mount('#app')