var dummyMessage: string = "dummy test response";

export function setDummyMessage(message: string){
  dummyMessage = message;
}

export function getDummyMessage(): string{
  return dummyMessage;
}