console.log('The dummy client script executed!');

var message: string;

export function setMessage(msg: string): void{
    message = msg;
}

export function getMessage(): string{
    return message;
}