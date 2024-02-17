       const data1  = [
            {url:'https://qpic.y.qq.com/music_cover/I28ic19Iwp8AicOQlxrIkEIvpp9rGe4EANdvljmMalStwCtFzbqdktUA/300?n=1', title:'JJ 林俊杰 | 有些歌，只为爱而作',amount:'播放量：1491.2万'},
            {url:'https://qpic.y.qq.com/music_cover/W6MpN4oFIUxIJAn5jGiavOeJwNLjklIp179o5GuJjgdUdDibBXlFIbKw/300?n=1', title:'伤感emo片段：忍不住就红了眼眶',amount:'播放量：4875.2万'},
            {url:'https://qpic.y.qq.com/music_cover/ZS2nmh1hWV2OESzO7MBLD5wpRnTvg2UD1YknCliaRZPDMPHYicIhfxIg/300?n=1', title:'听歌都会哭的人，又怎么会幸福呢',amount:'播放量：1028.8万'},
            {url:'https://qpic.y.qq.com/music_cover/qI7ibfmZc5Mfsnm4yNE6ficIWPhgQ1hb5FGP3aLvhIZxP8YBU7xh8NSw/300?n=1', title:'崩坏3 OST音乐合辑',amount:'播放量：96.7万'},
            {url:'https://qpic.y.qq.com/music_cover/L0yUDOfJXRoS3iby7jx6yib0ic9iaVCPxzw0kdxSj9REkic0jC8bVklKT3g/300?n=1', title:'抖音热歌：超好听的店铺BGM',amount:'播放量：5884.8万'}
        ]
        const data2 = [
            {url:'https://qpic.y.qq.com/music_cover/Q83YmqL5NGrh1sEyra4P6KmKg0Kkicwg5aqD8icT5h3ibxsgp2zBaMEJQ/300?n=1', title:'R.I.P CoCo李玟',amount:'播放量：680.8万'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M00000162Q8M3nEcZf.jpg?n=1', title:'KPOP热歌挑战！DNA动了',amount:'播放量：1252.3万'},
            {url:'https://qpic.y.qq.com/music_cover/ZS2nmh1hWV2OESzO7MBLD2FibkaEUzuIYkY8CYhZxlKcKoR3Dw3Bc5w/300?n=1', title:'一口气全听完！每首都是宝藏歌曲',amount:'播放量：3442.1万'},
            {url:'https://qpic.y.qq.com/music_cover/t1gG7op0rLpWLKl8T9PNiaEUzqL4B12kFtZibWyqT7KAskqmickpvnoHg/300?n=1', title:'心碎emo：“瑞，你在听吗？”',amount:'播放量：1565.5万'},
            {url:'https://music-file.y.qq.com/songlist/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.jpg?imageView2/4/w/300/h/300', title:'周杰伦 · 翻开12月的回忆',amount:'播放量：39.0万'},
        ]
        const data3 = [
            {url:'https://qpic.y.qq.com/music_cover/p8U5gQtDTibGoArlwz02SZndvNkeaERjBenqLf3k6A0iaHuyrUzoyzRQ/300?n=1', title:'到此为止吧，你的世界我退出了',amount:'播放量：2717.7万'},
            {url:'https://qpic.y.qq.com/music_cover/W6MpN4oFIUxIJAn5jGiavOfg1OR43JwxU3q0nICGW9apwnZLNYXK4yQ/300?n=1', title:'深夜emo神曲:哪首是你心中的No.1',amount:'播放量：1726.7万'},
            {url:'https://qpic.y.qq.com/music_cover/3jC5p3FicTWGVJGYU3h6Cic6AvSDFnu2054wKkTtfyrRuSTZRhMObibaQ/300?n=1', title:'抖音热歌：单曲循环不切歌',amount:'播放量：2501.5万'},
            {url:'https://qpic.y.qq.com/music_cover/uPA58W8yiam1c76QzvzYgLwXt4hAibPXG5LLQrx9wRlMibhMfYUKWH9UQ/300?n=1', title:'红白歌会2024年第74回出演歌曲',amount:'播放量：5.4万'},
            {url:'https://qpic.y.qq.com/music_cover/thfLhcllFYp1PPRzdD0S1Ng3ymdaOh11yJiaFHibFKkyV8rmqCQLMcBg/300?n=1', title:'原来情绪上头了，连听歌也会哭啊',amount:'播放量：1981.9万'},
        ]
        const data4 = [
            {url:'https://qpic.y.qq.com/music_cover/qySHBaLckrOIYib7GXCWmDbG7K4GRBmyCLYHBibFmePrWsyZDA15mRHFyaoMZDnmD3/300?n=1', title:'一听一整天！久听不厌的炙口热曲',amount:'播放量：3548.3万'},
            {url:'https://qpic.y.qq.com/music_cover/D8mZyZib29sHsXP1amws88kmzkAEffmhepVNyibXMicboQB0df2diaQxmQ/300?n=1', title:'抖音车载DJ｜解压100％',amount:'播放量：4032.4万'},
            {url:'https://qpic.y.qq.com/music_cover/MQTdYY3l4ibGMUIVRVZ5Eia0JaVhz0QA0pEacdGBdVgLGpu3Ffc7uib8g/300?n=1', title:'电量1%也要听！每一首都好听出圈',amount:'播放量：4380.2万'},
            {url:'https://qpic.y.qq.com/music_cover/MGFtGWKe5xVXZzot05VzcLOzjtX4Ywj9R2ialhZDqPWv7u5cw63vz6Q/300?n=1', title:'抖音热歌：戴着耳机去散步',amount:'播放量：1551.6万'},
            {url:'https://qpic.y.qq.com/music_cover/ZS2nmh1hWV2OESzO7MBLD2iaquH3nYMibHpBoicvhRCtp6StHAh7FpCibA/300?n=1', title:'到点了该emo了，00后的听歌现状',amount:'播放量：2462.3万'},
        ]
        const data5 = [
            {url:'https://qpic.y.qq.com/music_cover/2gMicwye6xzHTiaZu1m1xEic0wMgvicg8rCT6GnB7eaSFEbGRWkT1vspuA/300?n=1', title:'王源2023「客厅狂欢」巡演歌单',amount:'播放量：257.0万'},
            {url:'https://qpic.y.qq.com/music_cover/iaVNVUXOg73ua71Z0dtuz7VXUhts5jhAONMGv8PXDbes9wc3yTvrRog/300?n=1', title:'Kpop元气女团：开启上班自嗨模式',amount:'播放量：1551.6万'},
            {url:'https://qpic.y.qq.com/music_cover/E65GwaCL0V7nsWc8fopdRT2Ko81Bcrzk79es2kiaFIXkXphQoJnHb7Q/300?n=1', title:'这些歌，光是听到就已经很遗憾了',amount:'播放量：1377.0万'},
            {url:'https://qpic.y.qq.com/music_cover/GOEVvnGlzNCJceqmxHIlf4icK2jREPBL2vIkwquHibXntPgPjzC0ZHXw/300?n=1', title:'远：热血难凉的的追梦少年',amount:'播放量:46.2万'},
            {url:'https://qpic.y.qq.com/music_cover/eke7ADCj77nMYqSYoG2hlicF7ukEynnQsLvYyMgcqyvCZlERXexwibTQ/300?n=1', title:'抖音热歌|极致声线撩人耳膜',amount:'播放量:2633.5万'},
        ]
        const data6 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002W1g2A3eWchP_1.jpg?max_age=2592000',title:'抱一抱一下 (feat. 魏如萱)',name:'八三夭乐团/魏如萱',time:'03:45'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000abNkY3N8qRj_1.jpg?max_age=2592000',title:'电视剧《在暴雪时分》插曲',name:'王赫野',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000kT4ZG3UzfO5_1.jpg?max_age=2592000',title:'《熊出没·逆转时空》动画电影主题曲',name:'陈楚生',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000001EiH2N2BDmM1_1.jpg?max_age=2592000',title:'我不能爱你吗',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000032ryIU4Hpt6V_1.jpg?max_age=2592000',title:'Adventure',name:'YOASOBI (ヨアソビ)',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000BAQ771uxFCW_1.jpg?max_age=2592000',title:'yes, and? (Explicit)',name:'Ariana Grande',time:'03:34'}
        ]
        const data7 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003Rtcyt2nGqBO_1.jpg?max_age=2592000',title:'Training Season',name:'Dua Lipa',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000015ywFk46DMIL_1.jpg?max_age=2592000',title:'Carry You',name:'Martin Garrix',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000XMzpD3BWaK7_1.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'Calvin Harris',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003t0yEg3qxqIz_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'Gunna',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000005gZv831u6G1_1.jpg?max_age=2592000',title:'Bitter',name:'Jess Glynne',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000038R3cF2zeJOZ_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'梁龙',time:'03:45'}
        ]
        const data8 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003bIs2s3QL9Zc_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M00000126FdD0UNdsx_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002at5Di15oT5v_1.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002kGjyA0upmAX_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000049Y4xm0mwPBn_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003YVS8J0Ehpcw_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'}
        ]
        const data9 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003pxgBx2Ww1Br_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000046oJuM0DDvVd_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003Vgvyc0VADTE_1.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003cvW8Q3kX0Z0_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000042hKFo3EFmlQ_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000030lak94GN5Ad_0.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'}
        ]
        const data10 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003a6s7p3x99v1_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002FDbsh2dLZrg_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000002LeWK0LD8P2_1.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002IRW0v3nLoSA_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003TifvS0KRV4J_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000004bE6OR0yc0Gc_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'}
        ]
        const data11 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000feZT62yRG0Q_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000023yrJT2x59Wq_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M00000017Ed43jIiwl_2.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002nKR5B1FLyH2_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003uTXgj4HVYyx_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003t5RuV4FxJT1_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'},
        ]
        const data12 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002SmgeQ0eSu1b_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000001niSpu4Apnfg_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000001CLAJq2lFMf8_1.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000001QSsYS4ClNWF_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000004LPndd3dYNxU_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000046LtqJ2saVTW_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'}
        ]
        const data13 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003ptprx0g1MPU_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000pCwYX1RNkw3_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000003cYbnZ3OGQqg_2.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000017bcYI3cphkB_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000001Oi9vs2iaFfq_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000MFbcx2oZZ4D_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'}
        ]
        const data14 = [
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000RUJEa2G3Ddt_1.jpg?max_age=2592000',title:'Training Season',name:'八三夭乐团/魏如萱',time:'03:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002wMBWS1sh0jR_1.jpg?max_age=2592000',title:'Carry You',name:'王赫野',time:'03:34'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000000baGON2dxmhc_1.jpg?max_age=2592000',title:'Lovers In A Past Life',name:'陈楚生',time:'03:20'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M0000002TEny4LmUuN_1.jpg?max_age=2592000',title:'Bittersweet (Explicit)',name:'好妹妹',time:'04:29'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000001oLDUu3S6jaQ_1.jpg?max_age=2592000',title:'Bitter',name:'YOASOBI',time:'03:08'},
            {url:'https://y.qq.com/music/photo_new/T002R300x300M000002W1g2A3eWchP_1.jpg?max_age=2592000',title:'种太阳 (Live)',name:'Ariana',time:'03:45'}
        ]
        // 新歌推荐 右按钮
        const btn2 = document.querySelector('.btn2')

        const img1 = document.querySelector('.wrap1 img')
        const p1 = document.querySelector('.wrap1 .p1')
        const amount1 = document.querySelector('.wrap1 .amount')

        const img2 = document.querySelector('.wrap2 img')
        const p2 = document.querySelector('.wrap2 .p2')
        const amount2 = document.querySelector('.wrap2 .amount')

        const img3 = document.querySelector('.wrap3 img')
        const p3 = document.querySelector('.wrap3 .p3')
        const amount3 = document.querySelector('.wrap3 .amount')

        const img4 = document.querySelector('.wrap4 img')
        const p4 = document.querySelector('.wrap4 .p4')
        const amount4 = document.querySelector('.wrap4 .amount')

        const img5 = document.querySelector('.wrap5 img')
        const p5 = document.querySelector('.wrap5 .p5')
        const amount5 = document.querySelector('.wrap5 .amount')

        let i = 0

        btn2.addEventListener('click',function(){
            i++
            if(i >= data1.length){
                i = 0
            }
            img1.src = data1[i].url
            p1.innerHTML = data1[i].title
            amount1.innerHTML = data1[i].amount

            img2.src = data2[i].url
            p2.innerHTML = data2[i].title
            amount2.innerHTML = data2[i].amount

            img3.src = data3[i].url
            p3.innerHTML = data3[i].title
            amount3.innerHTML = data3[i].amount

            img4.src = data4[i].url
            p4.innerHTML = data4[i].title
            amount4.innerHTML = data4[i].amount

            img5.src = data5[i].url
            p5.innerHTML = data5[i].title
            amount5.innerHTML = data5[i].amount

            document.querySelector('.dot .dot1').classList.remove('dot1')
            document.querySelector(`.dot div:nth-child(${i + 1})`).classList.add('dot1')
        })

        //新歌推荐 左按钮
        const btn1 = document.querySelector('.btn1')
        btn1.addEventListener('click',function(){
            i--
            if(i < 0){
                i = data1.length - 1
            }
            img1.src = data1[i].url
            p1.innerHTML = data1[i].title
            amount1.innerHTML = data1[i].amount

            img2.src = data2[i].url
            p2.innerHTML = data2[i].title
            amount2.innerHTML = data2[i].amount

            img3.src = data3[i].url
            p3.innerHTML = data3[i].title
            amount3.innerHTML = data3[i].amount

            img4.src = data4[i].url
            p4.innerHTML = data4[i].title
            amount4.innerHTML = data4[i].amount

            img5.src = data5[i].url
            p5.innerHTML = data5[i].title
            amount5.innerHTML = data5[i].amount

            document.querySelector('.dot .dot1').classList.remove('dot1')
            document.querySelector(`.dot div:nth-child(${i + 1})`).classList.add('dot1')
        })

        //新歌首发 右按钮
        const btn4 = document.querySelector('.btn4')

        const img6 = document.querySelector('.zhangjie img')
        const song1 = document.querySelector('.zhangjie .song1')
        const name1 = document.querySelector('.zhangjie .name')
        const time1 = document.querySelector('.zhangjie .time')

        const img7 = document.querySelector('.dj img')
        const song2 = document.querySelector('.dj .song2')
        const name2 = document.querySelector('.dj .name')
        const time2 = document.querySelector('.dj .time')

        const img8 = document.querySelector('.rg img')
        const song3 = document.querySelector('.rg .song3')
        const name3 = document.querySelector('.rg .name')
        const time3 = document.querySelector('.rg .time')

        const img9 = document.querySelector('.jkjy img')
        const song4 = document.querySelector('.jkjy .song4')
        const name4 = document.querySelector('.jkjy .name')
        const time4 = document.querySelector('.jkjy .time')

        const img10 = document.querySelector('.cyr img')
        const song5 = document.querySelector('.cyr .song5')
        const name5 = document.querySelector('.cyr .name')
        const time5 = document.querySelector('.cyr .time')

        const img11 = document.querySelector('.lyc img')
        const song6 = document.querySelector('.lyc .song6')
        const name6 = document.querySelector('.lyc .name')
        const time6 = document.querySelector('.lyc .time')

        const img12 = document.querySelector('.hx img')
        const song7 = document.querySelector('.hx .song7')
        const name7 = document.querySelector('.hx .name')
        const time7 = document.querySelector('.hx .time')

        const img13 = document.querySelector('.is img')
        const song8 = document.querySelector('.is .song8')
        const name8 = document.querySelector('.is .name')
        const time8 = document.querySelector('.is .time')

        const img14 = document.querySelector('.wantsing img')
        const song9 = document.querySelector('.wantsing .song9')
        const name9 = document.querySelector('.wantsing .name')
        const time9 = document.querySelector('.wantsing .time')

        let j = 0
        btn4.addEventListener('click',function(){
            j++
            if(j >= data6.length){
                j = 0
            }
            img6.src = data6[j].url
            song1.innerHTML = data6[j].title
            name1.innerHTML = data6[j].name
            time1.innerHTML = data6[j].time

            img7.src = data7[j].url
            song2.innerHTML = data7[j].title
            name2.innerHTML = data7[j].name
            time2.innerHTML = data7[j].time

            img8.src = data8[j].url
            song3.innerHTML = data8[j].title
            name3.innerHTML = data8[j].name
            time3.innerHTML = data8[j].time

            img9.src = data9[j].url
            song4.innerHTML = data9[j].title
            name4.innerHTML = data9[j].name
            time4.innerHTML = data9[j].time

            img10.src = data10[j].url
            song5.innerHTML = data10[j].title
            name5.innerHTML = data10[j].name
            time5.innerHTML = data10[j].time

            img11.src = data11[j].url
            song6.innerHTML = data11[j].title
            name6.innerHTML = data11[j].name
            time6.innerHTML = data11[j].time

            img12.src = data12[j].url
            song7.innerHTML = data12[j].title
            name7.innerHTML = data12[j].name
            time7.innerHTML = data12[j].time

            img13.src = data13[j].url
            song8.innerHTML = data13[j].title
            name8.innerHTML = data13[j].name
            time8.innerHTML = data13[j].time

            img14.src = data14[j].url
            song9.innerHTML = data14[j].title
            name9.innerHTML = data14[j].name
            time9.innerHTML = data14[j].time

            document.querySelector('.dott .dot2').classList.remove('dot2')
            document.querySelector(`.dott div:nth-child(${j + 1})`).classList.add('dot2')
        })

        //新歌首发 左按钮
        const btn3 = document.querySelector('.btn3')
        btn3.addEventListener('click',function(){
            j--
            if(j < 0 ){
                j = data6.length - 1
            }
            img6.src = data6[j].url
            song1.innerHTML = data6[j].title
            name1.innerHTML = data6[j].name
            time1.innerHTML = data6[j].time
            
            img7.src = data7[j].url
            song2.innerHTML = data7[j].title
            name2.innerHTML = data7[j].name
            time2.innerHTML = data7[j].time

            img8.src = data8[j].url
            song3.innerHTML = data8[j].title
            name3.innerHTML = data8[j].name
            time3.innerHTML = data8[j].time

            img9.src = data9[j].url
            song4.innerHTML = data9[j].title
            name4.innerHTML = data9[j].name
            time4.innerHTML = data9[j].time

            img10.src = data10[j].url
            song5.innerHTML = data10[j].title
            name5.innerHTML = data10[j].name
            time5.innerHTML = data10[j].time

            img11.src = data11[j].url
            song6.innerHTML = data11[j].title
            name6.innerHTML = data11[j].name
            time6.innerHTML = data11[j].time

            img12.src = data12[j].url
            song7.innerHTML = data12[j].title
            name7.innerHTML = data12[j].name
            time7.innerHTML = data12[j].time

            img13.src = data13[j].url
            song8.innerHTML = data13[j].title
            name8.innerHTML = data13[j].name
            time8.innerHTML = data13[j].time

            img14.src = data14[j].url
            song9.innerHTML = data14[j].title
            name9.innerHTML = data14[j].name
            time9.innerHTML = data14[j].time

            document.querySelector('.dott .dot2').classList.remove('dot2')
            document.querySelector(`.dott div:nth-child(${j + 1})`).classList.add('dot2')
        })
