window.onload = () => {
    const player = {
        element: document.getElementById('player'),
        topPosition: 0,
        leftPosition: 0,
        step: 20,
        move: function(direction){
            switch (direction){
                case 'ArrowUp':
                    this.topPosition = this.topPosition - this.step;
                    this.element.style.top = this.topPosition + 'px'; 
                break;

                case 'ArrowDown':
                    this.topPosition = this.topPosition + this.step;
                    this.element.style.top = this.topPosition + 'px'; 
                break;

                case 'ArrowRight':
                    this.leftPosition = this.leftPosition + this.step;
                    this.element.style.left = this.leftPosition + 'px'; 
                break;

                case 'ArrowLeft':
                    this.leftPosition = this.leftPosition - this.step;
                    this.element.style.left = this.leftPosition + 'px'; 
                break;

                default:
                    break;
            }
        }
    };

    onkeydown = (key) => {
        player.move(key.code);
    }
}


const enemy = {
    element: document.getElementById('enemy'),
    topPosition: 500,
    leftPosition: 500,
    step: 10,
    playerLeftPosition: 0,
    playerTopPosition:0,
    chase: function(player){
        this.playerTopPosition = player.element.offsetTop;
        this.playerLeftPosition = player.element.offsetLeft;

        if(this.playerTopPosition != this.topPosition || this.playerLeftPosition != this.leftPosition){
            if(this.playerTopPosition > this.topPosition){
                this.topPosition = this.topPosition + this.step;
            }else{
                this.topPosition = this.topPosition - this.step;
            }
        }

        if(this.playerleftPosition > this.leftPosition){
            this.leftPosition = this.leftPosition + this.step;
        }else{
            this.leftPosition = this.leftPosition - this.step;
        }
    },
    move: function(){
        this.element.style.top = this.topPosition + 'px';
        this.element.style.left = this.leftPosition + 'px';
    }
};

const game = setInterval(() => {
    enemy.chase(player);
},50)