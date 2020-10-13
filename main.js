/**
 * 彩蛋抽奖
 * 1、画抽奖盒子
 * 2、彩蛋
 * 3、摇动动画
 * 4、中奖彩蛋滚动出现
 * 5、奖品动画
 */
 (function(){
    var Gacha = window.Gacha = function(params){
        var self = this;
        self.canvas = document.getElementById(params.canvasId);
        self.ctx = self.canvas.getContext('2d');

        self.init();
        self.getResources(function(){
            self.render();
        });
    };

    Gacha.prototype.getResources = function(callBack){
        callBack && callBack();
    };

    Gacha.prototype.init = function(){
        // 初始化
        var _winW = window.innerWidth,
            _winH = window.innerHeight;
        this.canvas.width = _winW;
        this.canvas.height = _winH;
    };
    // 画机器
    Gacha.prototype.drawMc = function(){
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#2d2d2d';
        // 上边圆顶
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#f66a53';
        this.ctx.ellipse(this.canvas.width/2,this.ctx.canvas.height/2,this.canvas.width/2 - 50,this.canvas.width/4 - 50,0,0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#fe947a';
        this.ctx.lineWidth = 4;
        this.ctx.shadowBlur = 2;
        this.ctx.shadowColor = 'rgba(0,0,0,.3)';
        this.ctx.shadowOffsetX = 3;
        this.ctx.shadowOffsetY = 3;
        this.ctx.ellipse(this.canvas.width/2,this.ctx.canvas.height/2,this.canvas.width/2 - 75,this.canvas.width/4 - 65,0,0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();

        // 下边圆墙
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(50,this.canvas.height/2);
        this.ctx.bezierCurveTo(this.canvas.width/2 - 150,this.canvas.height/2 +70,this.canvas.width/2 + 150,this.canvas.height/2 +70,this.canvas.width-50,this.canvas.height/2);
        this.ctx.lineTo(this.canvas.width -50,this.canvas.height/2 + 120);
        this.ctx.bezierCurveTo(this.canvas.width/2 + 150,this.canvas.height/2 +190,this.canvas.width/2 - 150,this.canvas.height/2 + 190,50,this.canvas.height/2 + 120);
        this.ctx.lineTo(50,this.canvas.height/2);
        this.ctx.closePath();
        // 渐变对象
        var gd = this.ctx.createLinearGradient(0,0,this.canvas.width,0);
        // 颜色断点
        gd.addColorStop(0,'#cd290e');
        gd.addColorStop(0.5,'#f76655');
        gd.addColorStop(1,'#c52505');
        this.ctx.fillStyle = gd;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.restore();

        // 奖品出口
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width/2 - 50,this.canvas.height/2 + 75);
        this.ctx.lineTo(this.canvas.width/2 + 50,this.canvas.height/2 + 75);
        this.ctx.lineTo(this.canvas.width/2 + 50,this.canvas.height/2 + 135);
        this.ctx.bezierCurveTo(this.canvas.width/2 + 30,this.canvas.height/2 + 165,this.canvas.width/2 - 30,this.canvas.height/2 + 165,this.canvas.width/2 - 50,this.canvas.height/2 + 135);
        this.ctx.lineTo(this.canvas.width/2 - 50,this.canvas.height/2 + 75);
        this.ctx.closePath();
        this.ctx.fillStyle = '#fcd3cb';
        this.ctx.shadowBlur = 2;
        this.ctx.shadowColor = '#c92a0d';
        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width/2 - 47,this.canvas.height/2 + 78);
        this.ctx.lineTo(this.canvas.width/2 + 50,this.canvas.height/2 + 78);
        this.ctx.lineTo(this.canvas.width/2 + 50,this.canvas.height/2 + 135);
        this.ctx.bezierCurveTo(this.canvas.width/2 + 30,this.canvas.height/2 + 165,this.canvas.width/2 - 25,this.canvas.height/2 + 160,this.canvas.width/2 - 47,this.canvas.height/2 + 135);
        this.ctx.lineTo(this.canvas.width/2 - 47,this.canvas.height/2 + 78);
        this.ctx.closePath();
        this.ctx.fillStyle = '#fa9784';
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width/2 - 40,this.canvas.height/2 + 85);
        this.ctx.lineTo(this.canvas.width/2 + 40,this.canvas.height/2 + 85);
        this.ctx.lineTo(this.canvas.width/2 + 40,this.canvas.height/2 + 125);
        this.ctx.bezierCurveTo(this.canvas.width/2 + 30,this.canvas.height/2 + 155,this.canvas.width/2 - 30,this.canvas.height/2 + 155,this.canvas.width/2 - 40,this.canvas.height/2 + 125);
        this.ctx.lineTo(this.canvas.width/2 - 40,this.canvas.height/2 + 85);
        this.ctx.closePath();
        this.ctx.strokeStyle = '#2a2a2a';
        var gd1 = this.ctx.createLinearGradient(this.canvas.width/2 - 40,this.canvas.height/2 + 85,this.canvas.width/2 - 40,this.canvas.height/2 + 155);
        // 颜色断点
        gd1.addColorStop(0,'#730709');
        gd1.addColorStop(0.3,'#a9392b');
        gd1.addColorStop(1,'#ed624d');
        this.ctx.fillStyle = gd1;
        this.ctx.fill();

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvas.width/2 - 40,this.canvas.height/2 + 85);
        this.ctx.lineTo(this.canvas.width/2 + 40,this.canvas.height/2 + 85);
        this.ctx.lineTo(this.canvas.width/2 + 40,this.canvas.height/2 + 100);
        this.ctx.lineTo(this.canvas.width/2 - 40,this.canvas.height/2 + 88);
        this.ctx.closePath();
        this.ctx.fillStyle = '#690100';
        this.ctx.fill();
        this.ctx.restore();

        // 投币口
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width/2 + 90,this.canvas.height/2 + 70);
        this.ctx.lineTo(this.canvas.width/2 + 98,this.canvas.height/2 + 68);
        this.ctx.lineTo(this.canvas.width/2 + 98,this.canvas.height/2 + 128);
        this.ctx.lineTo(this.canvas.width/2 + 90,this.canvas.height/2 + 130);
        this.ctx.closePath();
        this.ctx.lineWidth = 4;
        this.ctx.fillStyle = '#330801';
        this.ctx.strokeStyle = '#fcd3cb';
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.restore();

        // 控制棒槌
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.closePath();
        this.ctx.restore();
    }

    Gacha.prototype.drawBall = function(){
        // 画球
    }

    Gacha.prototype.start = function(){
        // 开始抽奖
    }

    Gacha.prototype.updated = function(){
        // 更新
    };

    Gacha.prototype.render = function(){
        // 渲染
        this.drawMc();
        this.drawBall();
    };
 })();