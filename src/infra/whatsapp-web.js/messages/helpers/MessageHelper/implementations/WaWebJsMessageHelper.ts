import { Client, Message } from "whatsapp-web.js";
import { MessageHelper } from "../MessageHelper";

class WaWebJsMessageHelper implements MessageHelper {
  constructor(private readonly client: Client, private readonly msg: Message) {}

  public get contactTo(): string {
    return this.msg.from;
  }

  compareMessageBody(msgCondition: string): boolean {
    return this.msg.body.toLowerCase() === msgCondition;
  }

  includeMessageBody(msg: string): boolean {
    return this.msg.body.toLowerCase().includes(msg);
  }

  async reply(msg: string): Promise<void> {
    await this.msg.reply(`Ivobot 🤖: ${msg}`);
  }

  async sendMessage(to: string, msg: string): Promise<void> {
    await this.client.sendMessage(to, `Ivobot 🤖: ${msg}`);
  }

  async conditionallyReply(
    msgCondition: string,
    replyMsg: string
  ): Promise<void> {
    if (!this.compareMessageBody(msgCondition)) return;

    await this.reply(replyMsg);
    return;
  }

  async conditionallyIncludeReply(
    msgCondition: string,
    replyMsg: string
  ): Promise<void> {
    if (!this.includeMessageBody(msgCondition)) return;

    await this.reply(replyMsg);
    return;
  }

  async conditionallySendMessage(
    msgCondition: string,
    answerMsg: string
  ): Promise<void> {
    if (!this.compareMessageBody(msgCondition)) return;

    await this.sendMessage(this.msg.from, answerMsg);
    return;
  }
}

export { WaWebJsMessageHelper };
