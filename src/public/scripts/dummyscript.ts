console.log('The dummy client script is now executing!');

var message: string;

export function setMessage(msg: string): void{
    message = msg;
}

export function getMessage(): string{
    return message;
}

function setAjaxContent(content: string): void
{
    document.getElementById('ajax-content').innerHTML = content;
}

export function executeAjax()
{
    var request : XMLHttpRequest = new XMLHttpRequest();
    request.open('GET', '/dummy/forajax', true);
    request.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status >= 200 && this.status < 400){
                // Success
                var response: string = this.responseText;
                setAjaxContent(response);
            }
            else{
                // Error
            }
        }
    };
    request.send();
    request = null;
}

console.log('now executing ajax:');
executeAjax();