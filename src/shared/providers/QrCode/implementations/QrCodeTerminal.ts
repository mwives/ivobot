import qrcode from "qrcode-terminal";

class QrCodeTerminal implements QrCodeProvider {
  static generate(data: string): void {
    return qrcode.generate(data, { small: true });
  }
}

export { QrCodeTerminal };
