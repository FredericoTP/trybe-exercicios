class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn(): void {
    console.log(`TV ${this._brand}, ${this._size} inches, resolution ${this._resolution}.
    Available connections: ${this._connections}`);
  }
}

const tv1 = new Tv('Samsung', 70, '4k', ['hdmi', 'WiFi', 'Ethernet']);

tv1.turnOn();