class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn(): void {
    console.log(`TV ${this.brand}, ${this.size} inches, resolution ${this.resolution}.
    Available connections: ${this.connections}`);
  }
}

const tv1 = new Tv('Samsung', 70, '4k', ['hdmi', 'WiFi', 'Ethernet']);

tv1.turnOn();