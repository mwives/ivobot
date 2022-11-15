interface MessageHelper {
  compareMessageBody(msgCondition: string): boolean;

  reply(msg: string): Promise<void>;

  sendMessage(to: string, msg: string): Promise<void>;

  conditionallyReply(msgCondition: string, replyMsg: string): Promise<void>;

  conditionallyIncludeReply(
    msgCondition: string,
    replyMsg: string
  ): Promise<void>;

  conditionallySendMessage(
    msgCondition: string,
    answerMsg: string
  ): Promise<void>;
}

export { MessageHelper };
