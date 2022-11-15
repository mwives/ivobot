import qrcode from "qrcode-terminal";

import { QrCodeProvider } from "../QrCodeProvider";

class QrCodeTerminal implements QrCodeProvider {
  static generate(data: string): void {
    return qrcode.generate(data, { small: true });
  }
}

export { QrCodeTerminal };
