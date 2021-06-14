const random1 = Math.floor(Math.random() * 101)+1;
const random2 = Math.floor(Math.random() * 101)+1;

const $answer = document.querySelector('input[type=submit]');
const correct = random1 - random2;

//問題を定義
const setupQuestion = () => {
    if (random1 > random2) {
        document.getElementById('js-question').textContent = `${random1} - ${random2}`;
    }else {
        window.location.reload();
    }
}
setupQuestion();

//正誤判定
$answer.addEventListener('click' , function(e) {
    e.preventDefault();
    const input = document.querySelector('input[name=correct]').value;
    if(correct == input) {
        window.alert('せいかい！');
    }else {
        window.alert('ふせいかい！');
    }
    
    window.location.reload();
});