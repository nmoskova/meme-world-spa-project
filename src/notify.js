const container = document.getElementById('errorBox');


export function notify(message){
    container.textContent = message;
    container.style.display = 'block'

    setTimeout(() => container.style.display = 'none', 3000)
}