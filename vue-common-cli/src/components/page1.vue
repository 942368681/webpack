<template>
    <div class="box">
        <h1 @click="turn">我是page1</h1>
        <div class="board-wrap" ref="boardCon"></div>
        <button @click="change">change</button>
        <button @click="rubber">rubber</button>
    </div>
</template>

<script>
import { WhiteBoard } from 'white-board-pro2';
console.log(WhiteBoard);

export default {
    name: 'page-1',
    data: () => ({
        board: null
    }),
    created () {
        console.log('page1 created');
    },
    mounted () {
        console.log('page1 mounted');
        this.board = WhiteBoard({
            "el": this.$refs.boardCon,
            "maxPage": 5,
            // "pageHeight": 100,
            "rubberRange": 10,
            "addBtn": true,
            "zIndexInfo": [{
                "update": true,
                "inputType": "fountain-pen",
                "color": "#9100FF",
                "page": 1,
                "size": 2,
                "zIndex": 1,
                "content": [{"path":[{"x":0.2249912359775641,"y":0.16991159539473685,"pressure":1},{"x":0.23796198918269232,"y":0.16298828125,"pressure":1},{"x":0.27434520232371795,"y":0.15562294407894736,"pressure":1},{"x":0.351161858974359,"y":0.15085320723684212,"pressure":1},{"x":0.459804437099359,"y":0.1525596217105263,"pressure":1},{"x":0.5612229567307693,"y":0.16745476973684212,"pressure":1},{"x":0.6260955028044872,"y":0.1900853207236842,"pressure":1},{"x":0.6664225260416666,"y":0.21967002467105262,"pressure":1},{"x":0.6723257211538461,"y":0.24469572368421053,"pressure":1},{"x":0.6531262520032052,"y":0.2801552220394737,"pressure":1},{"x":0.5928735977564102,"y":0.32444490131578946,"pressure":1},{"x":0.5098219651442307,"y":0.35761204769736843,"pressure":1},{"x":0.4218186598557692,"y":0.3739309210526316,"pressure":1},{"x":0.35827323717948717,"y":0.3673314144736842,"pressure":1},{"x":0.31994315905448717,"y":0.34772306743421055,"pressure":1},{"x":0.29740084134615385,"y":0.32144839638157896,"pressure":1},{"x":0.291904547275641,"y":0.29438219572368424,"pressure":1},{"x":0.3640324519230769,"y":0.2548571134868421,"pressure":1},{"x":0.45674954927884615,"y":0.2600226151315789,"pressure":1},{"x":0.5446902544070513,"y":0.2850380345394737,"pressure":1},{"x":0.5914150140224359,"y":0.3171155427631579,"pressure":1},{"x":0.6095189803685898,"y":0.3603515625,"pressure":1},{"x":0.6029334435096154,"y":0.40936472039473687,"pressure":1},{"x":0.5628004807692307,"y":0.4632092927631579,"pressure":1},{"x":0.4938151041666667,"y":0.49710629111842103,"pressure":1},{"x":0.40959910857371795,"y":0.5127415707236842,"pressure":1},{"x":0.3326009114583333,"y":0.5089432565789473,"pressure":1},{"x":0.3106219951923077,"y":0.5017321134868421,"pressure":1},{"x":0.3087752904647436,"y":0.4986996299342105,"pressure":1},{"x":0.31479116586538464,"y":0.4950349506578947,"pressure":1},{"x":0.36597305689102566,"y":0.4961040296052632,"pressure":1},{"x":0.47717598157051283,"y":0.5147203947368421,"pressure":1},{"x":0.5713141025641025,"y":0.54072265625,"pressure":1},{"x":0.6413762019230769,"y":0.5807874177631579,"pressure":1},{"x":0.6688889723557693,"y":0.6219572368421052,"pressure":1},{"x":0.6573893229166666,"y":0.6663291529605263,"pressure":1},{"x":0.6173815604967948,"y":0.6991056743421052,"pressure":1},{"x":0.5450220352564102,"y":0.7240645559210527,"pressure":1},{"x":0.4803936298076923,"y":0.7303453947368421,"pressure":1},{"x":0.4340632512019231,"y":0.7317948190789474,"pressure":1},{"x":0.4136493389423077,"y":0.7333316200657894,"pressure":1}],"canvasSettings":{"strokeStyle":"#9100FF","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"},"rectArea":[0.20896559495192307,0.6883513621794872,0.1376953125,0.7464895148026316]}],
                "other": {
                    "img": [],
                    "audio": [],
                    "video": [],
                    "N2": []
                }
            }],
            "watcher": {
                wait: 2000,
                cb: () => console.log('异步执行回调')
            },
            "writeCallBack": {
                type: "once",
                cb: () => console.log('同步执行回调')
            },
            "addCallBack": () => console.log('加纸')
        });
    },
    methods: {
        turn () {
            this.$router.push({name:"page2"});
        },
        change () {
            this.setBoardStyle({
                strokeStyle: '#000',
                lineWidth: 5,
                inputType: 'fountain-pen'
            });
        },
        rubber () {
            this.setBoardStyle({
                strokeStyle: '#000',
                lineWidth: 5,
                inputType: 'rubber'
            });
        },
        setBoardStyle(settings) {
            this.board.canvasObj[0].setUp({
                strokeStyle: settings.strokeStyle,
                lineWidth: settings.lineWidth,
                inputType: settings.inputType
            });
        }
    }
}
</script>

<style scoped>
    h1 {
        color: #fff;
    }
    .board-wrap {
        width: 600px;
        height: 600px;
        background: #fff;
        border: 1px solid #000;
        overflow: auto;
    }
</style>
